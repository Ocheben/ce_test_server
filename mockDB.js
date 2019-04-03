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
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "picked_up",
        id: 1,
        bikerid:101
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "waiting",
        id: 2,
        
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "delivered",
        id: 3,
        bikerid:101
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "assigned",
        id: 4,
        bikerid:101
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "picked_up",
        id: 5,
        bikerid: 102
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        status: "deliverd",
        id: 6,
        bikerid: 102
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 7,
        status: "waiting"
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 8,
        status: "waiting"
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 9,
        status: "waiting"
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 10,
        status: "waiting"
    },
    {
        item: "Printer",
        origin: "Cologne, Germany",
        destination: "Munich, Germany",
        assignee: "",
        id: 11,
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
        bikers
    },
    ...bikers
];


module.exports = {
    users,
    shipmentData
}