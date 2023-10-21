import React from 'react';
import { Link } from "react-router-dom";
import './footerLG.css';

function FooterLG(){
  return(
    <>
      <footer> 
        <div className="row s-footerLG d-flex align-items-center justify-content-start ">
          <div className="col-sm-10">
            <p className="h4">¿Aún no tienes cuenta?</p>
          </div>
          <div className="col-sm-1">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button type="button" className="btn btn-warning">
                <Link to="/logup">Registrarme</Link>
              </button>
              <button type="button" className="btn btn-warning">
                <Link to="/">Atras</Link>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export {FooterLG};