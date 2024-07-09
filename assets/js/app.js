import { 
    markNavbarLink, 
    renderCartItems, 
    toggleDarkMode, 
    loadCommonCSS, 
    loadCommonJS, 
    addHeaderAndFooter 
} from "./utils.js";


// Cuando el DOM está cargado, se llama a las funciones
document.addEventListener('DOMContentLoaded', function () {
    
    addHeaderAndFooter(); // Añadir header y footer
    loadCommonCSS(); // Cargar todos los css comunes para todas las pág.
    loadCommonJS(); // Cargar todos los js comunes para todas las pág.
    toggleDarkMode(); // Activa/desactiva modo oscuro
    markNavbarLink(); // Marcar enlaces de la barra de navegación
    
    // Agregar la función de renderizar el carrito al botón de carrito
    const cartButton = document.getElementById('cartButton');
    cartButton.addEventListener('click', function () {
        renderCartItems();
    });
    
});
