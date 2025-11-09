import fastify from "fastify";
import { request } from "http";

const server = fastify({logger: true});

// const teams = [
//     {
//             id: 1,
//             name: "McLaren",
//             base: "Working, United Kingdom"
//         },
//         {
//             id: 2,
//             name: "Mercedes",
//             base: "Brackley, United Kingdom"
//         },
//         {
//             id: 3,
//             name: "Red Bull Racing",
//             base: "Milton Keynes, United Kingdom"
//         }
// ];

const teams = [
    // 1. Red Bull Racing
    {
        id: 1,
        name: "Red Bull Racing",
        base: "Milton Keynes, Reino Unido"
    },
    // 2. Mercedes-AMG PETRONAS F1 Team
    {
        id: 2,
        name: "Mercedes",
        base: "Brackley, Reino Unido"
    },
    // 3. Scuderia Ferrari
    {
        id: 3,
        name: "Ferrari",
        base: "Maranello, Itália"
    },
    // 4. McLaren Formula 1 Team
    {
        id: 4,
        name: "McLaren",
        base: "Woking, Reino Unido"
    },
    // 5. Aston Martin Aramco F1 Team
    {
        id: 5,
        name: "Aston Martin",
        base: "Silverstone, Reino Unido"
    },
    // 6. Visa Cash App RB F1 Team (RB)
    {
        id: 6,
        name: "RB",
        base: "Faenza, Itália"
    },
    // 7. Alpine F1 Team
    {
        id: 7,
        name: "Alpine",
        base: "Enstone, Reino Unido"
    },
    // 8. Williams Racing
    {
        id: 8,
        name: "Williams",
        base: "Grove, Reino Unido"
    },
    // 9. Stake F1 Team Kick Sauber
    {
        id: 9,
        name: "Sauber",
        base: "Hinwil, Suíça"
    },
    // 10. MoneyGram Haas F1 Team
    {
        id: 10,
        name: "Haas",
        base: "Kannapolis, Estados Unidos"
    }
];



//  const drivers = [
//            {
//             id: 1,
//             name: "Max Verstappen",
//             team: "Red Bull Racing"
//         },
//            {
//             id: 2,
//             name: "Lewis Hamilton",
//             team: "Ferrari"
//         },
//            {
//             id: 3,
//             name: "Lando Norris",
//             team: "McLaren"
//         },
//         ];

const drivers = [
    // Red Bull Racing
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Liam Lawson", team: "Red Bull Racing" }, 
    
    // Ferrari
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Lewis Hamilton", team: "Ferrari" }, // Confirmado para 2025
    
    // McLaren
    { id: 5, name: "Lando Norris", team: "McLaren" },
    { id: 6, name: "Oscar Piastri", team: "McLaren" },
    
    // Mercedes
    { id: 7, name: "George Russell", team: "Mercedes" },
    { id: 8, name: "Andrea Kimi Antonelli", team: "Mercedes" },
    
    // Aston Martin
    { id: 9, name: "Fernando Alonso", team: "Aston Martin" },
    { id: 10, name: "Lance Stroll", team: "Aston Martin" },
    
    // Alpine
    { id: 11, name: "Pierre Gasly", team: "Alpine" },
    { id: 12, name: "Jack Doohan", team: "Alpine" },

    // Williams
    { id: 13, name: "Alexander Albon", team: "Williams" },
    { id: 14, name: "Carlos Sainz", team: "Williams" },

    // RB (Racing Bulls, ex-AlphaTauri)
    { id: 15, name: "Yuki Tsunoda", team: "RB" },
    { id: 16, name: "Isack Hadjar", team: "RB" },

    // Sauber (Kick Sauber / Audi)
    { id: 17, name: "Nico Hülkenberg", team: "Sauber" },
    { id: 18, name: "Gabriel Bortoleto", team: "Sauber" }, 

    // Haas
    { id: 19, name: "Oliver Bearman", team: "Haas" },
    { id: 20, name: "Esteban Ocon", team: "Haas" }
];

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200)

    return {teams};
});

server.get("/drivers", async(request, response) =>{
    response.type("application/json").code(200)

    return {drivers}
});

//camada de service

interface DriversParams {
    id : string;
}

server.get<{ Params: DriversParams }>("/drivers/:id", async(request,response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if(!driver) {
        response.type("application/json").code(404);
        return {message: "Driver Not Found"}
    }else{
        response.type("application/json").code(200);
        return {driver};
    }
}
);


server.listen({port: 3333}, () => {
    console.log("Server init")
});