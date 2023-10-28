import React, { useEffect, useState } from 'react';
import './Home.css';
import { BNIcon } from './Inicio/Nav/BNIcon';
import { HeaderL } from './Login-Logup/HeaderL';
import { Footer } from './Inicio/Footer/Footer';
import { DropdownItem } from './Home/DropdownItem';
import { SearchBt } from './Inicio/Main/SearchBt';
import ProfileHome from './Home/ProfileHome'; 
import {CarritoHome} from './Home/CarritoHome';
import {ContainerCardsIH} from './Home/ContainerCardsIH';
import { useNavigate } from "react-router-dom";

function Home(props){
    const products = props.products;
    const { userName } = props;
    const isDataAvailable = products.length > 0;
    const navigate = useNavigate();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');
    const [carrito, setCarrito] = useState([]);
    const [showCarrito, setShowCarrito] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    useEffect   (() => {
        setFilteredProducts(products);
    }, [products]);
  
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);

        const filteredProducts = isDataAvailable
        ? products.filter((product) =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : [];
    
        setFilteredProducts(filteredProducts);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      const searchTermLowerCase = searchTerm.toLowerCase();
    
      const filteredProducts = isDataAvailable
        ? products.filter((product) => {
            const productName = product.name.toLowerCase();
            return productName.includes(searchTermLowerCase);
          })
        : [];
    
      setFilteredProducts(filteredProducts);
    };
    
    const comprarProducto = (index, quantity) => {
        const selectedProduct = products.find(product => product.Id === index);
        if (selectedProduct) {
            if (quantity > 0 && selectedProduct.stock >= quantity) {
                const updatedStock = selectedProduct.stock -= quantity; 
                const productID = selectedProduct.Id;

                const updatedData = {
                    stock: updatedStock,
                };

                fetch(`/api/products/${productID}`, {
                    method: 'PATCH',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                })
                .then(response => {
                if (response.ok) {

                    selectedProduct.stock = updatedStock;
                    
                    const cartItem = {
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        quantity: quantity,
                    };
            
                    setCarrito([...carrito, cartItem]);            
                    const carritoUpdateEvent = new Event('carritoUpdate');
                    document.dispatchEvent(carritoUpdateEvent);

                    alert('Stock actualizado')

                } else {
                    alert("Error al actualizar el stock del producto.");
                }
                })
                .catch(error => {
                    console.error('Error al realizar la solicitud PATCH:', error);
                });
            } else {
            alert("No hay suficiente stock disponible.");
            }
        } else {
            alert("El indice no coincide");
        }
    };

    const actualizarCarrito = () => {
        const itemsCarrito = [];
        let totalPrice = 0;

        carrito.forEach((item, index) => {
            itemsCarrito.push(
                <li key={index}>{`${item.name} x${item.quantity} - $${item.price * item.quantity}`}</li>
            );
            totalPrice += item.price * item.quantity;
        });

        itemsCarrito.push(<li key="total">{`Total: $${totalPrice}`}</li>);

        return itemsCarrito;
    };

    const openCarrito = () => {
        setShowCarrito(true);
        actualizarCarrito();
    };

    const closeCarrito = () => {
        setShowCarrito(false);
    };

    const goToCheckout = () => {
        if (carrito.length > 0) {
            navigate('/home:GoPay');
        } else {
            alert("No hay productos en el carrito. Agrega productos antes de continuar.");
        }
    };

    const openProfile = () => {
        setShowProfile(true);
    };

    const closeProfile = () => {
        setShowProfile(false);
    };
  
    return(
        <>
            <HeaderL logpag={"¡Welcome!"}/>
            <main>
                <section>
                <div className="row">
                    <div className="col">
                        <nav className="navbar navbar-expand-lg s-navbar text-center">
                            <div className="container-fluid">
                                <BNIcon/>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li id="profile" className="nav-item">
                                        <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#profileContenedor"
                                        onClick={openProfile}
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-person-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                        </svg>
                                        </a>
                                    </li>
                                    <li id="carrito" className="nav-item">
                                        <ul id="lista-carrito" />
                                        <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#carritoContenedor"
                                        onClick={openCarrito}
                                        >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={20}
                                            height={20}
                                            fill="currentColor"
                                            className="bi bi-cart-check-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        >
                                        Opciones
                                        </a>
                                        <ul className="dropdown-menu">
                                            <DropdownItem linkDropItem={"/home"} nameDropItem={"Historial de compras"}/>
                                            <DropdownItem linkDropItem={"/home"} nameDropItem={"Configuracion"}/>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <DropdownItem linkDropItem={"/login"} nameDropItem={"Cerrar sesion"}/>
                                        </ul>
                                    </li>
                                    </ul>
                                    <div className="d-flex justify-content-end align-items-center me-5">
                                        <div className="search-container">
                                            <SearchBt
                                            handleSearch={handleSearch}
                                            searchTerm={searchTerm}
                                            handleSearchChange={handleSearchChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div id="profileModal" className="profile-contenedor" style={{ display: showProfile ? 'block' : 'none' }}>
                                    <div className="profile">
                                        <span className="close closeCont" onClick={closeProfile}>&times;</span>
                                        <ProfileHome idCerrarProfile={"cerrarProfile"} userName={userName}/>
                                    </div>
                                </div>
                                <div id="carritoContenedor" className="carrito-contenedor" style={{ display: showCarrito ? 'block' : 'none' }}>
                                    <div className="carrito">
                                        <span className="close closeCont" onClick={closeCarrito}>&times;</span>
                                        <CarritoHome fnCheck={goToCheckout} actualizarCarrito={actualizarCarrito} p={isDataAvailable ? products : []}/>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                </section>
                <section className="st-cont" id="contCardProducts">
                    <ContainerCardsIH p={filteredProducts} comprarProducto={comprarProducto} link={''}/>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Home;