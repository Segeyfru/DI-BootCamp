// let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
let webPlanets = document.body.firstElementChild;
// console.log(webPlanets);

let planets = [
    {
        name: "Mercury",
        moons: [],
    },
    {
        name: "Venus",
        moons: [],
    },
    {
        name: "Earth",
        moons: ["Moon"],
    },
    {
        name: "Mars",
        moons: ["Phobos", "Deimos"],
    },
    {
        name: "Jupiter",
        moons: ["Io", "Europa", "Ganymede", "Callisto"],
    },
    {
        name: "Saturn",
        moons: [
            "Mimas",
            "Enceladus",
            "Tethys",
            "Dione",
            "Rhea",
            "Titan",
            "Iapetus",
        ],
    },
    {
        name: "Uranus",
        moons: ["Miranda", "Ariel", "Umbriel", "Titania", "Oberon"],
    },
    {
        name: "Neptune",
        moons: ["Triton", "Nereid"],
    },
];

for (const object of planets) {
    let planetMoon = document.createElement('div')
    planetMoon.className = 'planetMoon'
    for (const key in object) {
        if (key === "name") {
            let newDiv = document.createElement("div");
            newDiv.className = `planet ${object[key].toLowerCase()}`;
            newDiv.innerHTML = `${object[key]}`;
            planetMoon.appendChild(newDiv);           
        }else if (key == "moons") {
            const element = object[key];
            for (const i of element) {
                // console.log(i);
                let newDivMoon = document.createElement("div");
                newDivMoon.className = `moon`;
                newDivMoon.innerHTML = `${i}`;
                planetMoon.appendChild(newDivMoon);
            }
        }
    }
    webPlanets.appendChild(planetMoon)
}
