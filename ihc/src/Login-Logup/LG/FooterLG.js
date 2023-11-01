import React from 'react';
import { Link } from "react-router-dom";
import './footerLG.css';

function FooterLG(){
  return(
    <>
      <footer className="s-footerLG d-flex align-items-center justify-content-between w-100 p-3">
        <div className="col-sm-8">
          <p className="h4">¿Aún no tienes cuenta?</p>
        </div>
        <div className="col-sm-4 text-end">
          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button type="button" className="btn btn-warning">
              <Link to="/logup">Registrarme</Link>
            </button>
            <button type="button" className="btn btn-warning">
              <Link to="/">Atras</Link>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export {FooterLG};