import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './mainLG.css';
 
function MainLG() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleForgotPassword = () => {
    const email = window.prompt('Ingresa tu dirección de correo electrónico para recuperar tu contraseña:');
    if (email) {
      alert(`El proceso de recuperación se seguirá por medio del correo electrónico: ${email}`);
    } else {
      alert('Proceso de recuperación cancelado.');
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setFormSubmitted(true);

    if (email === '' && password === '') {
      setErrorMessage('Por favor, completa los campos de correo y contraseña.');
    } else if (email === '') {
      setErrorMessage('Por favor, completa el campo de correo.');
    } else if (!isEmailValid(email)) {
      setErrorMessage('El correo debe tener una dirección válida (alguien@example.com).');
    } else if (password === '') {
      setErrorMessage('Por favor, completa el campo de contraseña.');
    } else if (password.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
    } else {

      let redirectLocation;

      try {
        const response = await fetch('/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
      
        if (response.ok) {
          const data = await response.json();
          redirectLocation = data.data.location;
          // console.log("token:", data.data.token); 
          if (redirectLocation) {
            navigate(redirectLocation);
          }
        } else {
          const errorData = await response.json();
          if (errorData.error && errorData.mensaje === 'Usuario invalido') {
            alert('Usuario invalido');
          } else {
            console.error(errorData);
          }
        }
      } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
      }      
    }
    if (errorMessage) {
      event.preventDefault();
    }
  };

  return (
    <>
      <main>
        <section>
          <div className="text-center">
            <div className="row">
              <div className="col-md-6 s-nameLG d-flex align-items-center justify-content-center">
                <h1 className="display-3">iHome Creations</h1>
              </div>
              <div className="col-md-6 s-formLG d-flex align-items-center justify-content-center">
                <fieldset className="s-fieldsetLG rounded-4">
                  <div>
                    <p className="h5">Ingresa tus datos</p>
                    <div className="error-message-container">
                      {errorMessage && <p className='p-error'>{errorMessage}</p>}
                    </div>
                    <form>
                      <div className="mb-3">
                        <div className="col">
                          <input
                            type="email"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Correo electrónico"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="col">
                          <input
                            type="password"
                            value={password}
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value.toLowerCase())}
                            placeholder="Contraseña"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="col">
                          <button onClick={handleLogin} type="submit" className="btn btn-warning">
                            Iniciar Sesión
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <h6>
                          <a href="#" onClick={handleForgotPassword}>¿Olvidaste tu contraseña?</a>
                        </h6>
                      </div>
                    </form>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export { MainLG };
