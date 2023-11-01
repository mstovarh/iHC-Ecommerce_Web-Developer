const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const path = require('path');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const config = require('./webpack.config');
const Product = require('./models/products');
const port = 3000;
require('dotenv').config();

const server = express();

// Analyze the forms
server.use(bodyparser.urlencoded({ extended: false }));

// Serving and compiling files in real time with Webpack
server.use(webpackDev(webpack(config)));
server.use(express.json());

// Serving static files from directories
server.use(express.static(path.join(__dirname, "public")));
server.use('/dist', express.static(path.join(__dirname, 'public', 'dist')));

// Cross-source resource sharing with Webpack
const corsOptions = {
  origin: 'http://localhost:8080',
  methods: 'GET, POST, PATCH, DELETE',
}; 

server.use(cors(corsOptions)); 

// Connection to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/ihomec', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Conexión a MongoDB establecida.');
})
.catch(err => {
  console.error('Error al conectar a MongoDB: ' + err);
});

// Importacion de rutas
const authRoutes = require('./routes/auth');
const validateToken = require('./routes/validate-token');
const routeAdmin = require('./routes/route-admin');
const routeHome = require('./routes/route-home');

// Routes middlewares
server.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

server.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

server.get('/logup', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

server.get('/home', validateToken, (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

server.get('/admin', validateToken, (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

server.get('/api/products', (req, res) => {
  Product.find({})
    .exec()
    .then(products => {
      res.json(products);
    })
    .catch(error => {
      console.error('Error al obtener productos: ' + error);
      res.status(500).send('Error al obtener productos.');
    });
});

server.patch('/api/products/:id', (req, res) => {
  const productId = req.params.id;
  const updatedData = req.body;

  Product.findOne({ Id: productId })
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }

      if (updatedData.stock !== undefined) {
        product.stock = updatedData.stock;
        return product.save();
      } else {
        return Promise.reject('Data es undefined y no se puede actualizar');
      }
    })
    .then(updatedProduct => {
      res.json(updatedProduct);
    })
    .catch(error => {
      console.error('Error al actualizar el producto: ' + error);
      res.status(500).json({ error: 'Error al actualizar el producto.' });
    });
});

server.post('/api/products', (req, res) => {
  const productData = req.body; 

  const newProduct = new Product(productData);

  newProduct
    .save()
    .then(savedProduct => {
      res.json(savedProduct);
    })
    .catch(error => {
      console.error('Error al crear el producto: ' + error);
      res.status(500).send('Error al crear el producto.');
    });
});

server.delete('/api/products/:id', (req, res) => {
  const productId = req.params.id;

  Product.findOneAndDelete({ Id: productId })
    .then(deletedProduct => {
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      res.json(deletedProduct);
    })
    .catch(error => {
      console.error('Error al eliminar el producto: ' + error);
      res.status(500).json({ error: 'Error al eliminar el producto.' });
    });
});
  
server.use('/api/users', authRoutes)

server.use('/admin', validateToken, routeAdmin)

server.use('/home', validateToken, routeHome)

server.use((req, res) => {
  res.status(404).sendFile(path.resolve('./public/404.html'));
});

// start server
server.listen(port, () => {
  console.log("La aplicación está en funcionamiento");
});
