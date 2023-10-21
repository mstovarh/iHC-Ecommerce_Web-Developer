import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Logup from './Logup';
import Inicio from './Inicio';
import Admin from './Admin';
import Home from './Home';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data); 
        /* console.log(data) */
      })
      .catch(error => {
        console.error('Error al cargar los datos:', error);
      });
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio products={products}/>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home products={products} />}/>
        <Route path="/admin" element={<Admin products={products}/>}/>
        <Route path="/logup" element={<Logup/>} />
        <Route path='*' element={<Navigate to="/"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


