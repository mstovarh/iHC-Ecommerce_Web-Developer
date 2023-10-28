import React from 'react';
import './Login.css';
import { HeaderL } from './Login-Logup/HeaderL';
import { MainLG } from './Login-Logup/LG/MainLG';
import { FooterLG } from './Login-Logup/LG/FooterLG';

function Login(props){
  const users = props.users;
  const isDataAvailable = users.length > 0; 
    return(
    <>
      <HeaderL logpag={"Conecta"}/>
      <MainLG datos={isDataAvailable ? users : []}/>
      <FooterLG/>
    </>
  );
}

export default Login;