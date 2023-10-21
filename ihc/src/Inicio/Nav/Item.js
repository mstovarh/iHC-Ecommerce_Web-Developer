import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Item = (props) => {
    return(
      <>
        <li className="nav-item">
          <Link
            className="nav-link active"
            aria-current="page"
            to={props.linkIt}
          >
            {props.nameIt}
          </Link>
        </li>
      <Outlet />
      </>
    );    
}

export {Item};