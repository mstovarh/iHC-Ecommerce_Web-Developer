import React from 'react';
import './Logup.css';
import { HeaderL } from './Login-Logup/HeaderL';
import { FooterLU } from './Login-Logup/LU/FooterLU';
import { MainLU } from './Login-Logup/LU/MainLU';

//const Logup = () => {
function Logup(){
  return(
  <>
    <HeaderL logpag={"Registrate"}/>
    <MainLU/>
    <FooterLU/>
  </>
  );
}

export default Logup;