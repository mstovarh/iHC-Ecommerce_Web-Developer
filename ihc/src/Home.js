import React, { useEffect, useState } from 'react';
import './Home.css';
import { BNIcon } from './Inicio/Nav/BNIcon';
import { HeaderL } from './Login-Logup/HeaderL';
import { Footer } from './Inicio/Footer/Footer';
import { DropdownItem } from './Home/DropdownItem';
import { SearchBt } from './Inicio/Main/SearchBt';
import {ProfileHome} from './Home/ProfileHome';
import {CarritoHome} from './Home/CarritoHome';
import {ContainerCardsIH} from './Home/ContainerCardsIH';

function Home(props){
    const products = props.products;
    const isDataAvailable = products.length > 0;
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect   (() => {
        setFilteredProducts(products);
    }, [products]);
  
    const handleSearchChange = (e) => {
        const searchValue = e.target.value;
        setSearchTerm(searchValue);

        const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
        );

        setFilteredProducts(filtered);
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
  
    return(
        <>
        <HeaderL logpag={"¡Welcome!"}/>
        <main>
            <section>
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg s-navbar">
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
                                        <DropdownItem linkDropItem={""} nameDropItem={"Historial de compras"}/>
                                        <DropdownItem linkDropItem={""} nameDropItem={"Configuracion"}/>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <DropdownItem linkDropItem={""} nameDropItem={"Cerrar sesion"}/>
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
                            <ProfileHome/>
                            <CarritoHome/>
                        </div>
                    </nav>
                </div>
            </div>
            </section>
            <section className="st-cont" id="contCardProducts">
                <ContainerCardsIH p={filteredProducts} link={'/'}/>
            </section>
        </main>
        <Footer/>
        </>
    );
}

export default Home;