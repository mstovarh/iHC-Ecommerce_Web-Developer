function CarritoHome(){
    return(
        <>
        <div id="carritoContenedor" className="carrito-contenedor">
            <div className="carrito">
                <h2>Carrito de Compras</h2>
                <ul id="itemsCarrito"></ul>
                <button id="pagarGo" className="btn btn-warning">
                    Ir a pagar
                </button>
                <button id="cerrarCarrito" className="btn btn-warning">
                    Cerrar
                </button>
            </div>
        </div>
        </>
    );
}

export {CarritoHome};