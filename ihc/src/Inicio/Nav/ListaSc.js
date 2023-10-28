import React from 'react';
function ListaSc(props){
    return(
    <>
        <ul className="nav nav-pills">{props.children}</ul>
    </>
    );
}

export {ListaSc};