document.addEventListener("DOMContentLoaded", function() {
    const itemsCarrito = document.getElementById("itemsCarrito");

    const storedCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function actualizarCarrito() {
        while (itemsCarrito.firstChild) {
            itemsCarrito.removeChild(itemsCarrito.firstChild);
        }
        
        let totalAmount = 0;

        storedCarrito.forEach((item) => {
            const listItem = document.createElement("li");
            listItem.textContent = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
            itemsCarrito.appendChild(listItem);

            totalAmount += item.price * item.quantity;
        });

        const totalItem = document.createElement("li");
        totalItem.textContent = `Total: $${totalAmount}`;
        itemsCarrito.appendChild(totalItem);
    }

    actualizarCarrito();

});
