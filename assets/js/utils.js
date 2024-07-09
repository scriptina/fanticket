
import { getEvents } from "../../db/events_db.js";
import { header } from "../../components/main/header.js";
import { footer } from "../../components/main/footer.js";
import { hero } from "../../components/main/hero.js";

// Función para marcar el enlace activo
export function markNavbarLink(){

    // Marcar el enlace del navbar
    const currentPath = window.location.pathname.split("/");
    const lastCurrentPath = currentPath[currentPath.length-1];

    switch (lastCurrentPath) {
        case "index.html":
            document.getElementById("homeLink").className = "nav-link active"
            break;
        case "tickets.html":
            document.getElementById("ticketsLink").className = "nav-link active"
            break;
        case "artists.html":
                document.getElementById("artistListLink").className = "nav-link active"
                break;
        case "about.html":
                document.getElementById("aboutLink").className = "nav-link active"
                break;
        default:
            break;
    }

}

// Función para renderizar el carrito
export function renderCartItems() {
    const cartBody = document.getElementById('cartBody');
    const totalDiv = document.getElementById('cartTotal'); // Nuevo div para mostrar el total

    const cartItems = JSON.parse(window.localStorage.getItem('fanTicket')) || [];
    cartBody.innerHTML = ''; // Limpiamos el contenido actual del carrito

    let totalPrice = 0;

    if (cartItems.length === 0) {
        cartBody.innerHTML = '<p>Your cart is empty.</p>';
        totalDiv.textContent = 'Total: 0 EUR'; // Mostrar total 0 si el carrito está vacío
    } else {
        const events = getEvents();
        cartItems.forEach(cartItem => {
            const eventFound = events.find(event => event.id == cartItem.eventId);
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <p class="textHeading m-0">${eventFound.tourName}</p>
                <p class="m-0">${eventFound.venue}</p>
                <p class="m-0 text-muted"><small>${eventFound.price} ${eventFound.currency}</small></p>
                <p class="m-0 text-muted"><small>Quantity: ${cartItem.quantity}</small></p>
                <p>Total: ${eventFound.price * cartItem.quantity} ${eventFound.currency}</p>
                <button class="btn btn-danger btn-sm delete-btn" data-event-id="${cartItem.eventId}">Remove</button>
                <hr>
            `;
            cartBody.appendChild(itemDiv);

            totalPrice += eventFound.price * cartItem.quantity;

            // Agregar evento para eliminar el evento del carrito
            const deleteBtn = itemDiv.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () {
                deleteCartItem(cartItem.eventId);
            });
        });

        // Mostrar el total al final del carrito
        totalDiv.textContent = `Total: ${totalPrice} EUR`;
    }
}

// Función para eliminar un elemento del carrito
function deleteCartItem(eventId) {
    let cartItems = JSON.parse(window.localStorage.getItem('fanTicket')) || [];

    // Filtrar los elementos que no coincidan con el eventId
    cartItems = cartItems.filter(item => item.eventId !== eventId);

    // Actualizar el localStorage
    window.localStorage.setItem('fanTicket', JSON.stringify(cartItems));

    // Volver a renderizar el carrito
    renderCartItems();
}

// Función para añadir header y footer
export function addHeaderAndFooter() {
    document.getElementById("header").innerHTML = header();
    document.getElementById("hero").innerHTML = hero();
    document.getElementById("footer").innerHTML = footer();
}

// Función para cargar CSS comunes
export function loadCommonCSS() {
    document.head.innerHTML += `
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
        <link rel="icon" type="image/x-icon" href="/assets/img/icons/favicon.ico">
        <link rel="stylesheet" href="/assets/css/root.css">
    `;
}

// Función para cargar JS comunes
export function loadCommonJS() {
    let bootstrapJs = document.createElement("script");
    bootstrapJs.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    bootstrapJs.defer = true;
    document.head.appendChild(bootstrapJs);
}


// Función para cambiar el modo oscuro/claro
export function toggleDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';

    html.setAttribute('data-bs-theme', savedTheme);

    darkModeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        localStorage.setItem('theme', newTheme);
        html.setAttribute('data-bs-theme', newTheme);
    });
}

// Función para cambiar el titulo
export function setPageTitle(title) {
    document.getElementById("header-title").textContent = title;
}
