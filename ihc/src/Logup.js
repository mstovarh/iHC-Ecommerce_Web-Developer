import React from 'react';
import './Logup.css';
import { HeaderL } from './Login-Logup/HeaderL';
import { FooterLU } from './Login-Logup/LU/FooterLU';
import { MainLU } from './Login-Logup/LU/MainLU';

function Logup(props){
  const users = props.users;
  const isDataAvailable = users.length > 0; 
  return(
    <>
      <HeaderL logpag={"Registrate"}/>
      <MainLU datos={isDataAvailable ? users : []}/>
      <FooterLU/>
    </>
  );
}

export default Logup;