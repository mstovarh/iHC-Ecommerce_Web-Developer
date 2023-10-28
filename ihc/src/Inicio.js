import React from 'react';
import './Inicio.css';
import { Header } from './Inicio/Header/Header';
import { Footer } from './Inicio/Footer/Footer';
import { Main } from './Inicio/Main/Main';
import { Nav } from './Inicio/Nav/Nav';

function Inicio(props) {
  const products = props.products;
  const isDataAvailable = products.length > 0; 

  return (
    <>
      <div>
        <Header descuento={"70%"} productoD={"las Smart Locks"} deadLineOne={12} deadLineTwo={30} mesD={"Noviembre"} />
        <Nav/>
        <Main datos={isDataAvailable ? products : []}/>
        <Footer />
    </div>
    </>
  );
}

export default Inicio;
