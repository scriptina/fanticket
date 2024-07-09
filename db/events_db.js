const events = [
    {
        id: 1,
        artistId: 2,  // The Beatles
        day: 25,
        month: "July",
        year: 2024,
        dayOfWeek: "Thursday",
        timeStart: "8:00 PM",
        timeEnd: "10:30 PM",
        venue: "Wembley Stadium",
        city: "London",
        doorsOpen: "6:00 PM",
        ticketId: "EVT20240725BEATLES",
        tourName: "The Beatles Reunion Tour",
        price: 80,
        currency: "EUR"
    },
    {
        id: 2,
        artistId: 3,  // Beyoncé
        day: 15,
        month: "August",
        year: 2024,
        dayOfWeek: "Thursday",
        timeStart: "9:00 PM",
        timeEnd: "11:00 PM",
        venue: "Madison Square Garden",
        city: "New York",
        doorsOpen: "7:00 PM",
        ticketId: "EVT20240815BEYONCE",
        tourName: "Beyoncé World Tour",
        price: 85,
        currency: "EUR"
    },
    {
        id: 3,
        artistId: 5,  // Drake
        day: 10,
        month: "September",
        year: 2024,
        dayOfWeek: "Tuesday",
        timeStart: "7:30 PM",
        timeEnd: "10:00 PM",
        venue: "Scotiabank Arena",
        city: "Toronto",
        doorsOpen: "5:30 PM",
        ticketId: "EVT20240910DRAKE",
        tourName: "Drake Live 2024",
        price: 40,
        currency: "EUR"
    },
    {
        id: 4,
        artistId: 7,  // Adele
        day: 5,
        month: "October",
        year: 2024,
        dayOfWeek: "Saturday",
        timeStart: "8:00 PM",
        timeEnd: "10:30 PM",
        venue: "O2 Arena",
        city: "London",
        doorsOpen: "6:00 PM",
        ticketId: "EVT20241005ADELE",
        tourName: "Adele's 2024 Tour",
        price: 62,
        currency: "EUR"
    },
    {
        id: 5,
        artistId: 10,  // Coldplay
        day: 22,
        month: "November",
        year: 2024,
        dayOfWeek: "Friday",
        timeStart: "7:00 PM",
        timeEnd: "9:30 PM",
        venue: "Allianz Parque",
        city: "São Paulo",
        doorsOpen: "5:00 PM",
        ticketId: "EVT20241122COLDPLAY",
        tourName: "Coldplay - Music of the Spheres Tour",
        price: 80,
        currency: "EUR"
    },
    {
        id: 6,
        artistId: 12,  // Bruno Mars
        day: 18,
        month: "December",
        year: 2024,
        dayOfWeek: "Wednesday",
        timeStart: "8:00 PM",
        timeEnd: "10:30 PM",
        venue: "Staples Center",
        city: "Los Angeles",
        doorsOpen: "6:00 PM",
        ticketId: "EVT20241218BRUNO",
        tourName: "Bruno Mars - 24K Magic Tour",
        price: 70,
        currency: "EUR"
    },
    {
        id: 7,
        artistId: 14,  // Madonna
        day: 3,
        month: "January",
        year: 2025,
        dayOfWeek: "Friday",
        timeStart: "9:00 PM",
        timeEnd: "11:30 PM",
        venue: "Barclays Center",
        city: "Brooklyn",
        doorsOpen: "7:00 PM",
        ticketId: "EVT20250103MADONNA",
        tourName: "Madonna - Celebration Tour",
        price: 80,
        currency: "EUR"
    },
    {
        id: 8,
        artistId: 16,  // The Rolling Stones
        day: 14,
        month: "February",
        year: 2025,
        dayOfWeek: "Friday",
        timeStart: "8:30 PM",
        timeEnd: "11:00 PM",
        venue: "Mercedes-Benz Arena",
        city: "Berlin",
        doorsOpen: "6:30 PM",
        ticketId: "EVT20250214STONES",
        tourName: "The Rolling Stones - No Filter Tour",
        price: 85,
        currency: "EUR"
    },
    {
        id: 9,
        artistId: 17,  // Queen
        day: 27,
        month: "March",
        year: 2025,
        dayOfWeek: "Thursday",
        timeStart: "7:00 PM",
        timeEnd: "9:30 PM",
        venue: "Accor Arena",
        city: "Paris",
        doorsOpen: "5:00 PM",
        ticketId: "EVT20250327QUEEN",
        tourName: "Queen + Adam Lambert - Rhapsody Tour",
        price: 60,
        currency: "EUR"
    },
    {
        id: 10,
        artistId: 18,  // Lady Gaga
        day: 9,
        month: "April",
        year: 2025,
        dayOfWeek: "Wednesday",
        timeStart: "8:00 PM",
        timeEnd: "10:30 PM",
        venue: "Tokyo Dome",
        city: "Tokyo",
        doorsOpen: "6:00 PM",
        ticketId: "EVT20250409GAGA",
        tourName: "Lady Gaga- Sweetener World Tour",
        price: 55,
        currency: "EUR"
    }
];



export function getEvents() {
    return events;
}