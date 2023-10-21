import React from 'react';

function ListaIt(props){
    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">{props.children}</ul>
    );
}

export {ListaIt};