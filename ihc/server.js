const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
const webpack = require("webpack");
const webpackDev = require("webpack-dev-middleware");
const config = require("./webpack.config");
const Product = require('./models/products');
const User = require('./models/users');
/* const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); */

const port = 3000;

const server = express();

server.use(webpackDev(webpack(config)));
server.use(express.json());

server.use(express.static(path.join(__dirname, "public")));
server.use('/dist', express.static(path.join(__dirname, 'public', 'dist')));

const corsOptions = {
  origin: 'http://localhost:8080',
  methods: 'GET, POST, PATCH, DELETE',
}; 

server.use(cors(corsOptions)); 

mongoose.connect('mongodb://127.0.0.1:27017/ihomec', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Conexión a MongoDB establecida.');
})
.catch(err => {
  console.error('Error al conectar a MongoDB: ' + err);
});

server.get("/", (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});


server.get("/api/products", (req, res) => {
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

server.get("/api/users", (req, res) => {
  User.find({})
    .exec()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      console.error('Error al obtener los usuarios: ' + error);
      res.status(500).send('Error al obtener los usuarios.');
    });
});

server.post('/api/users', (req, res) => {
  const userData = req.body; 

  const newUser = new User(userData);

  newUser
    .save()
    .then(savedUser => {
      res.json(savedUser);
    })
    .catch(error => {
      console.error('Error al crear un usuario: ' + error);
      res.status(500).send('Error al crear un usuario.');
    });
});

server.use((req, res) => {
  res.status(404).sendFile(path.resolve('./public/404.html'));
});


server.listen(port, () => {
  console.log("La aplicación está en funcionamiento");
});
