import products from './dom_products.js';

const contCardProducts = document.getElementById("contCardProducts");
contCardProducts.classList.add("d-flexE");
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
//profile
const profileModal = document.getElementById("profileModal");
const cerrarProfile = document.getElementById("cerrarProfile");
const profileLink = document.getElementById("profile");
//carrito
const carritoContenedor = document.getElementById("carritoContenedor");
const carrito = document.querySelector(".carrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const itemsCarrito = document.getElementById("itemsCarrito");
const pagarGo = document.getElementById("pagarGo");

window.onload = function () {
    function mostrarTar(product, index){
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

        const cardPrice = document.createElement("p");
        cardPrice.classList.add("card-text");
        cardPrice.textContent = `$${product.price}`;

        const inputGroup = document.createElement("div");
        inputGroup.classList.add("input-group", "mb-3");

        const input = document.createElement("input");
        input.type = "number";
        input.classList.add("form-control", "st-cant");
        input.placeholder = "Cantidad";
        input.setAttribute("aria-label", "Cantidad");
        input.setAttribute("aria-describedby", "basic-addon2");
        input.setAttribute("data-product-index", index);
        input.min = "0";
        const buyButton = document.createElement("a");
        buyButton.href = "#";
        buyButton.classList.add("btn", "btn-outline-warning");
        buyButton.textContent = "Comprar ahora";

        const eliminarItemCarrito = document.createElement("button");
        eliminarItemCarrito.classList.add("btn", "btn-danger");
        eliminarItemCarrito.textContent = "Eliminar";
        eliminarItemCarrito.setAttribute("data-product-index", index);

        eliminarItemCarrito.addEventListener("click", function () {
            const productIndex = eliminarItemCarrito.getAttribute("data-product-index");
            const cartItem = carrito[productIndex];
            const selectedProduct = products.find((product) => product.name === cartItem.name);
        
            if (selectedProduct) {
                selectedProduct.stock += cartItem.quantity;
                actualizarCarrito();
            }
        });    
        
        buyButton.addEventListener("click", function () {
            const productIndex = input.getAttribute("data-product-index");
            const quantity = parseInt(input.value);
        
            if (quantity > 0) {
                const selectedProduct = products[productIndex];
        
                if (selectedProduct.stock >= quantity) {
                    selectedProduct.stock -= quantity;
        
                    const cartItem = {
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        quantity: quantity,
                    };
        
                    carrito.push(cartItem);
                    actualizarCarrito();
                    input.value = 0;
    
                    const carritoUpdateEvent = new Event('carritoUpdate');
                    document.dispatchEvent(carritoUpdateEvent);
                } else {
                    alert("No hay suficiente stock disponible.");
                }
            } else {
                alert("Por favor, ingresa una cantidad válida.");
            }
            
        });
        
        inputGroup.appendChild(input);
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(inputGroup);
        cardBody.appendChild(buyButton);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        contCardProducts.appendChild(col);
    }

    products.forEach(mostrarTar);

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
        while (contCardProducts.firstChild) {
            contCardProducts.removeChild(contCardProducts.firstChild);
        }

        filteredProducts.forEach(mostrarTar);

    }

    const carrito = [];

    function actualizarCarrito() {
        while (itemsCarrito.firstChild) {
            itemsCarrito.removeChild(itemsCarrito.firstChild);
        }
    
        let totalPrice = 0;
    
        carrito.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
            itemsCarrito.appendChild(listItem);
    
            totalPrice += item.price * item.quantity;
        });
    
        const totalItem = document.createElement("li");
        totalItem.textContent = `Total: $${totalPrice}`;
        itemsCarrito.appendChild(totalItem);
    
        localStorage.setItem('carrito', JSON.stringify(carrito));
        localStorage.setItem('products', JSON.stringify(products));
    }
    

    document.getElementById("carrito").addEventListener("click", () => {
        carritoContenedor.style.display = "block";
        actualizarCarrito();
    });
    
    cerrarCarrito.addEventListener("click", () => {
        carritoContenedor.style.display = "none";
    });
    
    pagarGo.addEventListener("click", () => {
        if (carrito.length > 0) {
            window.location.href = "p_carrito.html";
        } else {
            alert("No hay productos en el carrito. Agrega productos antes de continuar.");
        }
    });
        
    profileLink.addEventListener("click", () => {
        profileModal.style.display = "block"; 
    });

    cerrarProfile.addEventListener("click", () => {
        profileModal.style.display = "none";
    });

};
