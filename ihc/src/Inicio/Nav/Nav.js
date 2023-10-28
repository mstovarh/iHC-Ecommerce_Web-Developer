import React from 'react';
import './nav.css'
import { ListaIt } from './ListaIt';
import { Item } from './Item';
import {ListaSc} from './ListaSc';
import { Scroll } from './Scroll';
import { BNIcon } from './BNIcon';

function Nav (){
  return(
    <>
      <nav className="navbar navbar-expand-lg st-nav">
        <div className="container-fluid">
          <BNIcon />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ListaIt>
              <Item linkIt={"/"} nameIt={"Inicio"} />
              <Item linkIt = {"/login"} nameIt= {"Log In"}/>
              <Item linkIt = {"/logup"} nameIt= {"Log Up"}/>
            </ListaIt>
            <ListaSc>
              <Scroll linkSc={"#scrollspyHeading1"} nameSc={"Tendencia"} />
              <Scroll linkSc={"#scrollspyHeading2"} nameSc={"Sobre nosotros"}/>
              <Scroll linkSc={"#scrollspyHeading3"} nameSc={"Contáctenos"}/>
              <Scroll linkSc={"#scrollspyHeading4"} nameSc={"Localízenos"}/>
            </ListaSc>
          </div>
        </div>
      </nav>
    </>
  );
}

export {Nav};