import React, { useEffect, useState } from 'react';

function CarritoHome(props) {
  const [carritoItems, setCarritoItems] = useState([]);

  useEffect(() => {
    const updatedItems = props.actualizarCarrito();
    setCarritoItems(updatedItems);
  }, [props.actualizarCarrito]);
  
  return (
    <div /* onMouseOver={sendDataToParent} */>
      <ul>
        {carritoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> 
      <button onClick={() => {props.fnCheck()}} className='btn btn-warning'>
        Ir a pagar
      </button> 
    </div>
  );
}

export { CarritoHome };
