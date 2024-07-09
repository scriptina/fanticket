const artists = [
    {
        id: 1,
        name: "U2",
        genre: ["Rock"],
        cover: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2X1bTq-default.jpg",
        origin: "Ireland",
        activeYears: "1976-present",
        hitSongs: ["With or Without You", "One"],
        images: [
            "/assets/img/artists/u2_1.jpeg",
            "/assets/img/artists/u2_2.jpg",
            "/assets/img/artists/u2_3.webp"
        ]
    },
    {
        id: 2,
        name: "The Beatles",
        genre: ["Rock", "Pop"],
        origin: "United Kingdom",
        activeYears: "1960-1970",
        hitSongs: ["Hey Jude", "Let It Be"],
        images: [
            "/assets/img/artists/beatles_1.jpg",
            "/assets/img/artists/beatles_2.jpg",
            "/assets/img/artists/beatles_3.jpeg"
        ]
    },
    {
        id: 3,
        name: "Beyoncé",
        genre: ["Pop", "R&B"],
        origin: "United States",
        activeYears: "1997-present",
        hitSongs: ["Crazy in Love", "Single Ladies"],
        images: [
            "/assets/img/artists/beyonce_1.webp",
            "/assets/img/artists/beyonce_2.webp",
            "/assets/img/artists/beyonce_3.jpg"
        ]
    },
    {
        id: 4,
        name: "Taylor Swift",
        genre: ["Pop", "Country"],
        origin: "United States",
        activeYears: "2006-present",
        hitSongs: ["Love Story", "Shake It Off"],
        images: [
            "/assets/img/artists/taylor_1.webp",
            "/assets/img/artists/taylor_2.webp",
            "/assets/img/artists/taylor_3.jpg"
        ]
    },
    {
        id: 5,
        name: "Drake",
        genre: ["Hip Hop", "R&B"],
        origin: "Canada",
        activeYears: "2006-present",
        hitSongs: ["Hotline Bling", "God's Plan"],
        images: [
            "/assets/img/artists/drake_1.jpg",
            "/assets/img/artists/drake_2.jpg",
            "/assets/img/artists/drake_3.webp"
        ]
    },
    {
        id: 6,
        name: "Ed Sheeran",
        genre: ["Pop", "Folk"],
        origin: "United Kingdom",
        activeYears: "2004-present",
        hitSongs: ["Shape of You", "Perfect"],
        images: [
            "/assets/img/artists/ed_sheeran_1.jpg",
            "/assets/img/artists/ed_sheeran_2.jpg",
            "/assets/img/artists/ed_sheeran_3.jpg"
        ]
    },
    {
        id: 7,
        name: "Adele",
        genre: ["Pop", "Soul"],
        origin: "United Kingdom",
        activeYears: "2006-present",
        hitSongs: ["Someone Like You", "Hello"],
        images: [
            "/assets/img/artists/adele_1.avif",
            "/assets/img/artists/adele_2.webp",
            "/assets/img/artists/adele_3.png"
        ]
    },
    {
        id: 8,
        name: "Kanye West",
        genre: ["Hip Hop", "Rap"],
        origin: "United States",
        activeYears: "1996-present",
        hitSongs: ["Stronger", "Gold Digger"],
        images: [
            "/assets/img/artists/kanye_1.webp",
            "/assets/img/artists/kanye_2.webp",
            "/assets/img/artists/kanye_3.webp"
        ]
    },
    {
        id: 9,
        name: "Rihanna",
        genre: ["Pop", "R&B"],
        origin: "Barbados",
        activeYears: "2003-present",
        hitSongs: ["Umbrella", "Diamonds"],
        images: [
            "/assets/img/artists/rihanna_1.webp",
            "/assets/img/artists/rihanna_2.webp",
            "/assets/img/artists/rihanna_3.webp"
        ]
    },
    {
        id: 10,
        name: "Coldplay",
        genre: ["Rock", "Alternative"],
        origin: "United Kingdom",
        activeYears: "1996-present",
        hitSongs: ["Yellow", "Viva La Vida"],
        images: [
            "/assets/img/artists/coldplay_1.jpg",
            "/assets/img/artists/coldplay_2.jpg",
            "/assets/img/artists/coldplay_3.webp"
        ]
    },
    {
        id: 11,
        name: "Justin Bieber",
        genre: ["Pop", "R&B"],
        origin: "Canada",
        activeYears: "2008-present",
        hitSongs: ["Baby", "Sorry"],
        images: [
            "/assets/img/artists/bieber_1.jpg",
            "/assets/img/artists/bieber_2.jpg",
            "/assets/img/artists/bieber_3.webp"
        ]

    },
    {
        id: 12,
        name: "Bruno Mars",
        genre: ["Pop", "R&B", "Funk"],
        origin: "United States",
        activeYears: "2004-present",
        hitSongs: ["Just the Way You Are", "Uptown Funk"],
        images: [
            "/assets/img/artists/bruno_mars_1.jpeg",
            "/assets/img/artists/bruno_mars_2.webp",
            "/assets/img/artists/bruno_mars_3.jpeg"
        ]
    },
    {
        id: 13,
        name: "Eminem",
        genre: ["Hip Hop", "Rap"],
        origin: "United States",
        activeYears: "1988-present",
        hitSongs: ["Lose Yourself", "Stan"],
        images: [
            "/assets/img/artists/eminem_1.webp",
            "/assets/img/artists/eminem_2.webp",
            "/assets/img/artists/eminem_3.jpg"
        ]
    },
    {
        id: 14,
        name: "Madonna",
        genre: ["Pop"],
        origin: "United States",
        activeYears: "1979-present",
        hitSongs: ["Like a Virgin", "Vogue"],
        images: [
            "/assets/img/artists/madonna_1.jpeg",
            "/assets/img/artists/madonna_2.webp",
            "/assets/img/artists/madonna_3.jpg"
        ]
    },
    {
        id: 15,
        name: "Shakira",
        genre: ["Pop", "Latin"],
        origin: "Colombia",
        activeYears: "1990-present",
        hitSongs: ["Hips Don't Lie", "Whenever, Wherever"],
        images: [
            "/assets/img/artists/shakira_1.jpg",
            "/assets/img/artists/shakira_2.webp",
            "/assets/img/artists/shakira_3.webp"
        ]
    },
    {
        id: 16,
        name: "The Rolling Stones",
        genre: ["Rock"],
        origin: "United Kingdom",
        activeYears: "1962-present",
        hitSongs: ["Paint It Black", "Satisfaction"],
        images: [
            "/assets/img/artists/rolling_1.webp",
            "/assets/img/artists/rolling_2.webp",
            "/assets/img/artists/rolling_3.avif"
        ]
    },
    {
        id: 17,
        name: "Queen",
        genre: ["Rock"],
        origin: "United Kingdom",
        activeYears: "1970-present",
        hitSongs: ["Bohemian Rhapsody", "We Will Rock You"],
        images: [
            "/assets/img/artists/queen_1.webp",
            "/assets/img/artists/queen_2.webp",
            "/assets/img/artists/queen_3.avif"
        ]
    },
    {
        id: 18,
        name: "Lady Gaga",
        genre: ["Pop"],
        origin: "United States",
        activeYears: "2001-present",
        hitSongs: ["Poker Face", "Bad Romance"],
        images: [
            "/assets/img/artists/lady_gaga_1.jpg",
            "/assets/img/artists/lady_gaga_2.jpg",
            "/assets/img/artists/lady_gaga_3.jpg"
        ]
    },
    {
        id: 19,
        name: "Billie Eilish",
        genre: ["Pop", "R&B"],
        origin: "United States",
        activeYears: "2008-present",
        hitSongs: ["Thank U, Next", "7 rings"],
        images: [
            "/assets/img/artists/billie_eilish_1.webp",
            "/assets/img/artists/billie_eilish_2.avif",
            "/assets/img/artists/billie_eilish_3.jpg"
        ]
    }
];


export function getArtists() {
    return artists;
}