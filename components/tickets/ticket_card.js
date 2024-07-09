export function getTicketCardComponent({
    artistName,
    artistImageCover,
    eventId,
    eventTourName,
    eventDay,
    eventMonth,
    eventVenue,
    eventCity,
    eventDayOfWeek,
    eventTime,
    eventPrice,
    eventCurrency
}) {
    return `
        <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-10">
            <div class="card h-100">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div style="height: 200px; overflow: hidden; position: relative;">
                            <img src="${artistImageCover}" class="img-fluid rounded-start w-100 h-100" style="object-fit: cover; position: absolute; top: 0; bottom: 0; left: 0; right: 0;" alt="${artistName}" />
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="card-body d-flex flex-column h-100">
                            <h5 class="card-title textHeading">${eventTourName}</h5>
                            <p class="card-text">${eventDay} ${eventMonth}</p>
                            <p class="card-text m-0">${eventCity}</p>
                            <p class="card-text m-0">${eventVenue}</p>
                            <div class="mt-auto">
                                <small class="text-muted">${eventDayOfWeek}, ${eventTime}</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 d-flex flex-column align-items-end p-4">
                        <div class="form-group mt-auto d-flex flex-column align-items-end">
                            <p class="card-text">${eventPrice} ${eventCurrency}</p>
                            <div class="input-group d-flex flex-column gap-2 align-items-center">
                                <input id="qty-event-${eventId}" min="1" max="5" value="1" type="number" class="form-control btn btn-outline-secondary rounded-2 w-100">
                                <div class="input-group-append d-flex gap-2">
                                    <button class="btn btn-outline-secondary btn-minus" type="button" onclick="document.getElementById('qty-event-${eventId}').stepDown();">-</button>
                                    <button class="btn btn-outline-secondary btn-plus" type="button" onclick="document.getElementById('qty-event-${eventId}').stepUp();">+</button>
                                </div>
                            </div>
                            <button class="btn w-100 ticketBtn mt-2" data-event-id="${eventId}">Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}



export function addToCart(eventId) {
    // Recuperamos el valor de la cantidad de tickets
    const qtyResult = document.getElementById(`qty-event-${eventId}`).value;

    // Creamos el objeto del ticket
    const ticketEvent = {
        eventId: eventId,
        quantity: qtyResult
    };

    // Recuperamos el localStorage y verificamos si tiene un valor válido
    let ticketsEventFromLocalStorage = window.localStorage.getItem("fanTicket");
    let ticketsEvent = [];

    if (ticketsEventFromLocalStorage) {
        // Verificamos si el valor es un JSON válido
        if (ticketsEventFromLocalStorage.trim() !== "") {
            ticketsEvent = JSON.parse(ticketsEventFromLocalStorage) || [];
        }
    }

    // Buscamos si el ticket ya existe en el localStorage
    let isUpdated = false;
    ticketsEvent = ticketsEvent.map(ticket => {
        if (ticket.eventId === eventId) {
            isUpdated = true;
            return ticketEvent;
        }
        return ticket;
    });

    // Si el ticket no existe, lo agregamos
    if (!isUpdated) {
        ticketsEvent.push(ticketEvent);
    }

    // Guardamos el array actualizado en el localStorage
    window.localStorage.setItem("fanTicket", JSON.stringify(ticketsEvent));

}

