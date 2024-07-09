export function header() {
    return `
        <nav class="navbar navbar-expand-lg sticky-top">
            <div class="container">
                <i class="fa-solid fa-ticket fa-2x navbar-brand" aria-hidden="true"></i>
                <a class="navbar-brand" href="/" aria-label="FanTicket Home" title="FanTicket Home">FanTicket</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                    <ul class="navbar-nav me-auto my-2 my-lg-0 w-100 justify-content-center gap-4" style="--bs-scroll-height: 100px;">
                        <li class="nav-item">
                            <a id="homeLink" class="nav-link" href="./index.html" title="Home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a id="artistListLink" class="nav-link" href="./artists.html" title="Artists">Artists</a>
                        </li>
                        <li class="nav-item">
                            <a id="ticketsLink" class="nav-link" href="./tickets.html" title="Tickets">Tickets</a>
                        </li>
                        <li class="nav-item">
                            <a id="aboutLink" class="nav-link" href="./about.html" title="About">About</a>
                        </li>
                    </ul>
                    <div>
                        <ul class="navbar-nav me-auto my-2 my-lg-0 w-100 justify-content-end flex-row gap-4">
                            <li class="nav-item">
                                <a href="./login.html" class="nav-link" aria-label="Login" title="Login">
                                    <i class="fas fa-user" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link" id="cartButton" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas" aria-controls="cartOffcanvas" aria-label="Shopping Cart" title="Shopping Cart">
                                    <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" id="darkModeToggle" class="nav-link" aria-label="Toggle Dark Mode" title="Toggle Dark Mode">
                                    <i class="fas fa-adjust" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Carrito Offcanvas -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="cartOffcanvas" aria-labelledby="cartOffcanvasLabel">
            <div class="offcanvas-header">
                <i class="fas fa-shopping-cart pe-2" aria-hidden="true"></i>
                <h5 class="offcanvas-title" id="cartOffcanvasLabel">Shopping cart</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div id="cartBody" class="offcanvas-body">
                <p>Your cart is empty.</p>
            </div>
            <div class="d-flex flex-column p-4 w-100 gap-3">
                <div id="cartTotal" class="offcanvas-total"></div>
                <button onclick="location.href='./ticketsBought.html'" class="btn ticketBtn w-50 align-self-center">PAY</button>
            </div>
        </div>
    `;
}
