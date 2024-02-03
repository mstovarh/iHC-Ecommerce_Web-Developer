import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './cardIndvIH.css';

function CardIndvIH(props) {
  const [cantidad, setCantidad] = useState(1);

  const comprarProducto = (index, quantity) => {
    props.comprarProducto(index, quantity);
    setCantidad(1);
  }

  const handleCantidadChange = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };

  return (
    <>
      <div className="card color" style={{ width: "18rem" }}>
        <img
          src={props.srcImgCard}
          className="card-img-top"
          alt={props.altCard}
        />
        <div className="card-body">
          <h5 className="card-title">{props.nameCard}</h5>
          <p className="card-text pih">
            <strong>${props.priceCard * cantidad}</strong>
          </p>
          <div className="input-group mb-3 justify-content-center">
            <input
              type="number"
              className="form-control st-cant"
              placeholder="Cantidad"
              aria-label="Cantidad"
              aria-describedby="basic-addon2"
              value={cantidad}
              onChange={handleCantidadChange}
              min="1"
            />
          </div>
          <button className="btn btn-outline-warning">
            {props.pagRef === 'inicio' ? (
              <Link className="st-link" to={props.linkS}>Comprar ahora</Link>
            ) : (
              <Link onClick={() => comprarProducto(props.index, cantidad)}>Comprar ahora</Link>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export { CardIndvIH };
