const shipmentData = [
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "waiting",
        id: 0,
        
    },
    {
        item: "Camera",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 1,
        bikerid:101
    },
    {
        item: "Books",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "waiting",
        id: 2,
        
    },
    {
        item: "Documents",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 3,
        bikerid:101
    },
    {
        item: "Pizza",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "assigned",
        id: 4,
        bikerid:101
    },
    {
        item: "Files",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 5,
        bikerid: 102
    },
    {
        item: "Laptop",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 6,
        bikerid: 102
    },
    {
        item: "Mobile Phone",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 7,
        status: "waiting"
    },
    {
        item: "Bill",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 8,
        status: "waiting"
    },
    {
        item: "Clothing Items",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 9,
        status: "waiting",
        bikerid: 103
    },
    {
        item: "Shoes",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 10,
        status: "waiting"
    },
    {
        item: "Accessories",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 11,
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        bikerid: 104
    },
    {
        item: "Bags",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Aldous Huxley",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 12,
        bikerid: 104
    },
    {
        item: "Watch",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Aldous Huxley",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 13,
        bikerid:104
    },
    {
        item: "Camera",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "George Orwell",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 14,
        bikerid:105
        
    },
    {
        item: "Documents",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "George Orwell",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 15,
        bikerid:105
    },
    {
        item: "Desktop",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Aldous Huxley",
        status: "assigned",
        id: 16,
        bikerid:104
    },
    {
        item: "Clothing",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 17,
        bikerid: 102
    },
    {
        item: "Food",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 18,
        bikerid: 102
    },
    {
        item: "Laptop",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 19,
        status: "waiting"
    },
    {
        item: "Mobile Phone",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 10,
        status: "waiting"
    },
    {
        item: "Charger",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 21,
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        bikerid: 103
    },
    {
        item: "Belt",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 22,
        status: "waiting"
    },
    {
        item: "Watch",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 23,
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        bikerid: 104
    },
    {
        item: "Ring",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "George Orwell",
        status: "assigned",
        id: 24,
        
    },
    {
        item: "Shoes",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 25,
        bikerid:101
    },
    {
        item: "Purse",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "waiting",
        id: 26,
        
    },
    {
        item: "Paper",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 27,
        bikerid:101
    },
    {
        item: "Provisions",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "assigned",
        id: 28,
        bikerid:101
    },
    {
        item: "Water",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 29,
        bikerid: 102
    },
    {
        item: "Batteries",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 30,
        bikerid: 102
    },
    {
        item: "MacBook Pro",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 31,
        status: "waiting"
    },
    {
        item: "HP Pavillion",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 32,
        status: "waiting"
    },
    {
        item: "Nike Air Max",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 33,
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        bikerid: 103
    },
    {
        item: "Fuse Box",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 34,
        status: "waiting"
    },
    {
        item: "Radio",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 35,
        status: "assigned",
        bikerid: 104
    },
    {
        item: "Monitor",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Aldous Huxley",
        status: "assigned",
        id: 36,
        bikerid: 104
    },
    {
        item: "Speakers",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Aldous Huxley",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 37,
        bikerid:104
    },
    {
        item: "Pizza",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "waiting",
        id: 38,
        
    },
    {
        item: "Perfume",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Niccolò Machiavelli",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 39,
        bikerid:105
    },
    {
        item: "Clothes",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Aldous Huxley",
        status: "assigned",
        id: 40,
        bikerid:104
    },
    {
        item: "Sweater",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        id: 41,
        bikerid: 102
    },
    {
        item: "Jeans",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Ernest Hemingway",
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        id: 42,
        bikerid: 102
    },
    {
        item: "Hats",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 43,
        status: "waiting"
    },
    {
        item: "Socks",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 44,
        status: "waiting"
    },
    {
        item: "Acer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Friedrich Nietzsche",
        id: 45,
        status: "assigned",
        bikerid: 103
    },
    {
        item: "Alien Ware",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 46,
        status: "waiting"
    },
    {
        item: "Bottles",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "William Shakespeare",
        id: 47,
        status: "picked_up",
        pickupDate: new Date().toDateString(),
        bikerid: 110
    },
    {
        item: "T Shirts",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "Charles Dickens",
        id: 48,
        status: "delivered",
        pickupDate: new Date().toDateString(),
        deliverDate: new Date().toDateString(),
        bikerid: 107
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 49,
        status: "waiting"
    },
]

const bikers = [
    {
        email: "biker1@ce.com",
        password:"biker1",
        name: "Niccolò Machiavelli",
        role: "biker",
        bikerid: 101
    },
    {
        email: "biker2@ce.com",
        password:"biker2",
        name: "Ernest Hemingway",
        role: "biker",
        bikerid: 102
    },
    {
        email: "biker3@ce.com",
        password:"biker3",
        name: "Friedrich Nietzsche",
        role: "biker",
        bikerid: 103
    },
    {
        email: "biker4@ce.com",
        password:"biker4",
        name: "Aldous Huxley",
        role: "biker",
        bikerid: 104
    },
    {
        email: "biker5@ce.com",
        password:"biker5",
        name: "George Orwell",
        role: "biker",
        bikerid: 105
    },
    {
        email: "biker6@ce.com",
        password:"biker6",
        name: "Yuval Noah Harari",
        role: "biker",
        bikerid: 106
    },
    {
        email: "biker7@ce.com",
        password:"biker7",
        name: "Charles Dickens",
        role: "biker",
        bikerid: 107
    },
    {
        email: "biker8@ce.com",
        password:"biker1",
        name: "James Joyce",
        role: "biker",
        bikerid: 108
    },
    {
        email: "biker9@ce.com",
        password:"biker9",
        name: "Leo Tolstoy",
        role: "biker",
        bikerid: 109
    },
    {
        email: "biker10@ce.com",
        password:"biker10",
        name: "William Shakespeare",
        role: "biker",
        bikerid: 110
    },
]

const users = [
    {
        email: "admin@ce.com",
        password:"admin",
        name: "Albert Einstien",
        role: "admin",
        shipments:shipmentData,
        bikers,
        dashStatus: {
            shipments: 50,
            delivered: 14,
            picked_up: 10,
            assigned: 8,
            waiting: 18
        }
    },
    ...bikers
];


module.exports = {
    users,
    shipmentData
}