import React, { useEffect, useState } from 'react';
import './Admin.css';
import { BNIcon } from './Inicio/Nav/BNIcon';
import { SearchBt } from './Inicio/Main/SearchBt';
import {ItemsNavAd} from './Admin/ItemsNavAd'
import { ContainerCardsA } from './Admin/ContainerCardsA';
import { Footer } from './Inicio/Footer/Footer';

function Admin(props){
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

    return(
    <>
        <header>
            <div className="col s-welcome">
            <p className="h1 m-0">Administrador</p>
            </div>
        </header>
        <main className="text-center">
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
                            <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                                <ItemsNavAd linkNavAd={"#scrollspyHeading1"} nameNavAd={"Inventario"}/>
                                <ItemsNavAd linkNavAd={"#scrollspyHeading2"} nameNavAd={"Historial de compras"}/>
                                <ItemsNavAd linkNavAd={"#scrollspyHeading3"} nameNavAd={"Registro de ventas"}/>
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
                        </div>
                    </nav>
                    </div>
                </div>
            </section>
            <section className="st-cont">
                <div className="row st-inv">
                    <p className="h2 m-0" id="scrollspyHeading1">
                    Inventario
                    </p>
                </div>
                <ContainerCardsA d={filteredProducts}/> 
                </section>
                <section className="st-cont">
                <div className="row st-inv">
                    <p className="h2 m-0" id="scrollspyHeading2">
                    Historial de compras
                    </p>
                </div>
                </section>
                <section className="st-cont">
                <div className="row st-inv">
                    <p className="h2 m-0" id="scrollspyHeading3">
                    Registro de ventas
                    </p>
                </div>
            </section>
        </main>
        <Footer />
    </>
    );
}

export default Admin;