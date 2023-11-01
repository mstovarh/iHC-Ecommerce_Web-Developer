import React from 'react';
import './Login.css';
import { HeaderL } from './Login-Logup/HeaderL';
import { MainLG } from './Login-Logup/LG/MainLG';
import { FooterLG } from './Login-Logup/LG/FooterLG';

function Login(){
    return(
    <>
      <div>
        <HeaderL logpag={"Conecta"}/>
        <MainLG/>
        <FooterLG/>
      </div>
    </>
  );
}

export default Login;