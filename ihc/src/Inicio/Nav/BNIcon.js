import React from 'react';
import { Link } from "react-router-dom";

function BNIcon(){
  return(
    <>
      <Link className="navbar-brand" id="brand" to="/">
      <img
      src={'/favicon.ico'}
      alt="Logo"
      width={70}
      height={24}
      className={"me-1"}
      />
      iHome Creations
      </Link>
    </>
  );
}

export {BNIcon};