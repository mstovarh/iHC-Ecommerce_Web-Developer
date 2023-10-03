import products from './dom_products.js';

document.addEventListener("DOMContentLoaded", function() {
    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    const adminContainer = document.getElementById('contCardProducts');

    function actualizarPagina() {
        adminContainer.innerHTML = '';
    
        storedProducts.forEach((product) => {
            const col = document.createElement("div");
            col.classList.add("col", "st-card");
    
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
    
            const img = document.createElement("img");
            img.src = product.imageSrc;
            img.classList.add("card-img-top");
            img.alt = product.name;
    
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
    
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = product.name;
    
            const cardStock = document.createElement("p");
            cardStock.classList.add("card-text");
            cardStock.textContent = `Stock: ${product.stock}`;
    
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardStock);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            adminContainer.appendChild(col);
        });
        
    }
    

    actualizarPagina();

    document.addEventListener('carritoUpdate', () => {
    storedCarrito.forEach((cartItem) => {
        const product = storedProducts.find((product) => product.name === cartItem.name);
        if (product) {
            product.stock -= cartItem.quantity;
        }
    });

    actualizarPagina();
    });

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        
        const searchTerm = searchInput.value.toLowerCase();

        const filteredProducts = products.filter((product) => {
            const productName = product.name.toLowerCase();
            return productName.includes(searchTerm); 
        });
    
        displayFilteredProducts(filteredProducts);
    });

    function displayFilteredProducts(filteredProducts) {
        adminContainer.innerHTML = ''; 
        
        filteredProducts.forEach((product) => {
            const col = document.createElement("div");
            col.classList.add("col", "st-card");
    
            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
    
            const img = document.createElement("img");
            img.src = product.imageSrc;
            img.classList.add("card-img-top");
            img.alt = product.name;
    
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");
    
            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = product.name;
    
            const cardStock = document.createElement("p");
            cardStock.classList.add("card-text");
            cardStock.textContent = `Stock: ${product.stock}`;
    
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardStock);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            adminContainer.appendChild(col);
        });
    }
    

});
