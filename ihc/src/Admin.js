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
    const [idValue, setIdValue] = useState(null);
    const [stockValue, setStockValue] = useState(null);
    const [idValueAdd, setIdValueAdd] = useState(null);
    const [nameValueAdd, setNameValueAdd] = useState('');
    const [priceValueAdd, setPriceValueAdd] = useState(null);
    const [stockValueAdd, setStockValueAdd] = useState(null);
    const [imgValueAdd, setImgValueAdd] = useState('');
    const [idValueDelete, setIdValueDelete] = useState(null);

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

    const handleUpStock = (e) => {
        e.preventDefault();
    
        const id = parseInt(idValue);
        const stock = parseInt(stockValue);
    
        if (isNaN(id) || isNaN(stock)) {
            alert('Los valores deben ser numéricos');
            return;
        }
    
        const updatedData = {
            stock: stock,
        };
    
        fetch(`/api/products/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
        .then(response => {
            if (response.ok) {
                setIdValue(null);
                setStockValue(null);

                const updatedProducts = products.map(product => {
                    if (product.id === id) {
                        product.stock = stock;
                    }
                    return product;
                });
    
                setFilteredProducts(updatedProducts);
    
                alert('Stock actualizado');
            } else {
                alert('Error al actualizar el stock del producto.');
            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud PATCH:', error);
        });
    }
    

    const handleAddP = async (e) => {
        e.preventDefault();
    
        const newProduct = {
            name: nameValueAdd,
            price: priceValueAdd,
            stock: stockValueAdd,
            imageSrc: imgValueAdd,
            Id: idValueAdd
        };
    
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
    
            if (response.ok) {
                setNameValueAdd('');
                setPriceValueAdd(null);
                setStockValueAdd(null);
                setImgValueAdd('');
                setIdValueAdd(null);
                alert('El producto ha sido añadido');
            } else {
                const errorData = await response.json();
                console.error(errorData);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud POST:', error);
        }
    }    

    const handleDeleteP = (e) => {
        const productId = idValueDelete; 

        fetch(`/api/products/${productId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        })
        .then((response) => {
            if (response.ok) {
            setIdValueDelete(null);
            alert('Producto eliminado con éxito.');
            } else {
            alert('Error al eliminar el producto.');
            }
        })
        .catch((error) => {
            console.error('Error al realizar la solicitud DELETE:', error);
        });
    }

    return(
    <>
        <header>
            <div className="col s-welcome d-flex align-items-center justify-content-center">
            <p className="h1 m-0">Administrador</p>
            </div>
        </header>
        <main className="text-center">
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
                                <ul className="nav navbar-nav me-auto mb-2 mb-lg-0">
                                    <ItemsNavAd linkNavAd={"#scrollspyHeading1"} nameNavAd={"Inventario"}/>
                                    <ItemsNavAd linkNavAd={"#scrollspyHeading2"} nameNavAd={"Registro de ventas"}/>
                                    <ItemsNavAd linkNavAd={"#scrollspyHeading3"} nameNavAd={"Modificar stock"}/>
                                    <ItemsNavAd linkNavAd={"#scrollspyHeading4"} nameNavAd={"Añadir producto"}/>
                                    <ItemsNavAd linkNavAd={"#scrollspyHeading5"} nameNavAd={"Borrar producto"}/>
                                </ul>
                                <div className="d-flex justify-content-end align-items-center me-2">
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
                    Registro de ventas
                    </p>
                </div>
            </section>
            <section className="st-cont">
                <div className="row st-inv">
                    <p className="h2 m-0" id="scrollspyHeading3">
                    Modificar Stock
                    </p>
                </div>
                <div className='p-2'>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Id producto a modificar</label>
                            <input
                                className="form-control input-custom"
                                type="number"
                                value={idValue || ''}
                                onChange={(e) => setIdValue(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nuevo Stock</label>
                            <input
                                className="form-control input-custom"
                                type="number"
                                value={stockValue || ''}
                                onChange={(e) => setStockValue(e.target.value)}
                            />
                        </div>
                    </form>
                    <button class="btn btn-warning" type="submit" onClick={handleUpStock}>Modificar</button>
                </div>
            </section>
            <section className="st-cont">
                <div className="row st-inv">
                    <p className="h2 m-0" id="scrollspyHeading4">
                    Añadir Producto
                    </p>
                </div>
                <div className='p-2'>
                    <form>
                        <div class="mb-3">
                            <label className="form-label">Id producto</label>
                            <input
                                className="form-control input-custom"
                                type="number"
                                value={idValueAdd || ''}
                                onChange={(e) => setIdValueAdd(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Nombre</label>
                            <input
                                className="form-control input-custom"
                                type="text"
                                value={nameValueAdd}
                                onChange={(e) => setNameValueAdd(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Precio</label>
                            <input
                                className="form-control input-custom"
                                type="number"
                                value={priceValueAdd || ''}
                                onChange={(e) => setPriceValueAdd(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Stock</label>
                            <input
                                className="form-control input-custom"
                                type="number"
                                value={stockValueAdd || ''}
                                onChange={(e) => setStockValueAdd(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label className="form-label">Link de imagen</label>
                            <input
                                className="form-control input-custom"
                                type="text"
                                value={imgValueAdd}
                                onChange={(e) => setImgValueAdd(e.target.value)}
                            />
                        </div>
                    </form>
                    <button class="btn btn-warning" type="submit" onClick={handleAddP}>Añadir</button>
                </div>
            </section>
            <section className="st-cont">
                <div className="row st-inv">
                    <p className="h2 m-0" id="scrollspyHeading5">
                    Borrar Producto
                    </p>
                </div>
                <div className='p-2'>
                    <form>
                        <div class="mb-3">
                            <label className="form-label">Id product a borrar</label>
                            <input
                                className="form-control input-custom"
                                type="number"
                                value={idValueDelete || ''}
                                onChange={(e) => setIdValueDelete(e.target.value)}
                            />
                        </div>
                    </form>
                    <button class="btn btn-warning" type="submit" onClick={handleDeleteP}>Borrar</button>
                </div>
            </section>
        </main>
        <Footer />
    </>
    );
}

export default Admin;