import React, { useState } from 'react';
import { Footer } from "../Inicio/Footer/Footer";
import { HeaderL } from "../Login-Logup/HeaderL";
import './goPay.css';

function GoPay() {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePagarClick = () => {
    if (!cardNumber || !expirationDate || !cvc) {
      alert('Por favor, llene todos los campos antes de pagar.');
    } else {
      alert('Su pago ha sido exitoso. Revise su email.');
    }
  };

  return (
    <>
      <div>
        <HeaderL logpag={"Carrito de compras"} />
        <main className="s-dataPay">
          <section className="d-flex flex-wrap flex-column align-items-center justify-content-center">
            <div>
              <h2>DATOS DE PAGO</h2>
            </div>
            <div>
              <form>
                <div className="mb-3">
                  <label>Número de tarjeta:</label>
                  <input className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>Fecha de expiración:</label>
                  <input className="form-control" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label>CVC:</label>
                  <input className="form-control" value={cvc} onChange={(e) => setCvc(e.target.value)} />
                </div>
                <button className="btn btn-warning m-1" onClick={handlePagarClick}>Pagar</button>
              </form>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default GoPay;
