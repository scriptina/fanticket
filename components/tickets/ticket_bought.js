export function getTicketBoughtComponent({
    artistName,
    artistImageCover,
    eventTourName,
    eventDay,
    eventMonth,
    eventYear,
    eventVenue,
    eventCity,
    eventDayOfWeek,
    eventDoorsOpen,
    eventTimeStart,
    eventTimeEnd,
    eventTicketId
}) {
    return `
         <div class="ticket created-by-anniedotexe staatliches-font">
                    <div class="left">
                        <div class="image" style="background-image: url('./${artistImageCover}')">
                            <p class="admit-one">
                                <span>ADMIT ONE</span>
                                <span>ADMIT ONE</span>
                                <span>ADMIT ONE</span>
                            </p>
                            <div class="ticket-number">
                                <p>
                                    #${eventTicketId}
                                </p>
                            </div>
                        </div>
                        <div class="ticket-info">
                            <p class="date">
                                <span>${eventDayOfWeek}</span>
                                <span class="june-29">${eventMonth.toUpperCase().substring(0,3)}. ${eventDay}</span>
                                <span>${eventYear}</span>
                            </p>
                            <div class="show-name">
                                <h4>${eventTourName}</h4>
                                <h5>${artistName}</h5>
                            </div>
                            <div class="time">
                                <small><p>${eventTimeStart} <span>TO</span> ${eventTimeEnd}</p></small>
                                <small><p>DOORS <span>@</span> ${eventDoorsOpen}</p></small>
                            </div>
                            <p class="location"><span>${eventVenue}</span>
                                <span class="separator"> - </span><span>${eventCity}</span>
                            </p>
                        </div>
                    </div>
                    <div class="right">
                        <p class="admit-one">
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                            <span>ADMIT ONE</span>
                        </p>
                        <div class="right-info-container">
                            <div class="show-name">
                                <h6>${eventTourName}</h6>
                            </div>
                            <div class="time">
                                <p>${eventTimeStart} <span>TO</span> ${eventTimeEnd}</p>
                                <p>DOORS <span>@</span> 7:00 PM</p>
                            </div>
                            <div class="barcode">
                                <img src="./assets/img/others/barcode.webp" alt="QR code">
                            </div>
                            <p class="ticket-number">
                                #${eventTicketId}
                            </p>
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

