import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './mainLU.css';

function MainLU(props) { 
  const users = props.datos; 

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    emailCheck: '', 
    passwordCheck: '' 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (event) => {
    const { name, lastname, email, password, emailCheck, passwordCheck } = formData;
  
    if (
      name === '' &&
      lastname === '' &&
      email === '' &&
      password === '' &&
      emailCheck === '' &&
      passwordCheck === ''
    ) {
      setErrorMessage('Por favor, completa los campos');
    } else if (name === '') {
      setErrorMessage('Por favor, completa el campo de nombre');
    } else if (lastname === '') {
      setErrorMessage('Por favor, completa el campo de apellido');
    } else if (email === '') {
      setErrorMessage('Por favor, completa el campo de correo');
    } else if (!isEmailValid(email)) {
      setErrorMessage('El correo debe tener una dirección válida');
    } else if (password === '') {
      setErrorMessage('Por favor, completa el campo de contraseña');
    } else if (password.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres');
    } else if (emailCheck === '') {
      setErrorMessage('Por favor, completa el campo de verificación de correo');
    } else if (!isEmailValid(emailCheck)) {
      setErrorMessage('El correo debe tener una dirección válida');
    } else if (passwordCheck === '') {
      setErrorMessage('Por favor, completa el campo de verificación de contraseña');
    } else if (passwordCheck.length < 8) {
      setErrorMessage('La contraseña debe tener al menos 8 caracteres');
    } else if (email !== emailCheck) {
      setErrorMessage('Los correos no coinciden');
    } else if (password !== passwordCheck) {
      setErrorMessage('Las contraseñas no coinciden');
    } else {

      const user = users.find(u => u.email === email && u.password === password);
      
      if (user) {
        alert('Usted ya tiene una cuenta');
        navigate('/login');
      } else {
        const newUser = {
          name,
          lastname,
          email,
          password,
          emailCheck,
          passwordCheck
        };

        try {
          const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });
    
          if (response.ok) {
            alert('Registro exitoso');
            navigate('/login');
          } else {
            const errorData = await response.json();
            console.error(errorData);
          }
        } catch (error) {
          console.error('Error al realizar la solicitud POST:', error);
        }
      }
    }
  };
  
    return(
      <>
        <main>
          <section>
            <div className="text-center">
              <div className="row">
                <div className="col s-form d-flex align-items-center justify-content-center">
                  <fieldset className="s-fieldset rounded-4">
                    <div className="row">
                      <p className="h5">Ingresa tus datos</p>
                      {errorMessage && <p className="p-error">{errorMessage}</p>}
                      <div className="col">
                        <div className="mb-3">
                          <div className="col">
                            <input
                              name="name"
                              value={formData.name}
                              className="form-control"
                              placeholder="Nombre"
                              autoComplete="given-name"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <div className="col">
                            <input
                              name="lastname"
                              value={formData.lastname}
                              className="form-control"
                              placeholder="Apellido"
                              autoComplete="family-name"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <div className="col">
                            <input
                              name="email"
                              value={formData.email.toLowerCase()}
                              className="form-control"
                              placeholder="Correo electrónico"
                              autoComplete="off"
                              pattern=".+@globex\.com"
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <div className="col">
                            <input
                              name="emailCheck"
                              value={formData.emailCheck.toLowerCase()}
                              className="form-control"
                              placeholder="Confirme correo electrónico"
                              autoComplete="off"
                              pattern=".+@globex\.com"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="mb-3">
                          <div className="col">
                            <input
                              type="password"
                              name="password"
                              minLength="8"
                              value={formData.password}
                              className="form-control"
                              placeholder="Contraseña"
                              autoComplete="off"
                              onChange={handleInputChange}
                              required  
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="mb-3">
                          <div className="col">
                            <input
                              type="password"
                              name="passwordCheck"
                              value={formData.passwordCheck}
                              className="form-control"
                              placeholder="Confirme contraseña"
                              autoComplete="off"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="col">
                        <button type="submit" className="btn btn-warning" onClick={handleRegister}>
                          Regístrame
                        </button>
                      </div>
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

export {MainLU};