// Adatbázis - Minden csapat és versenyző
const f1Data = [
    {
        name: "McLaren Formula 1 Team",
        drivers: [
            {
                name: "Lando Norris",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/2col/image.png",
                points: 390,
                number: 4,
                wins: 3,
                podiums: 12
            },
            {
                name: "Oscar Piastri",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png",
                points: 366,
                number: 81,
                wins: 2,
                podiums: 9
            }
        ]
    },
    {
        name: "Scuderia Ferrari HP",
        drivers: [
            {
                name: "Charles Leclerc",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
                points: 305,
                number: 16,
                wins: 2,
                podiums: 10
            },
            {
                name: "Lewis Hamilton",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
                points: 190,
                number: 44,
                wins: 1,
                podiums: 4
            }
        ]
    },
    {
        name: "Oracle Red Bull Racing",
        drivers: [
            {
                name: "Max Verstappen",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
                points: 382,
                number: 1,
                wins: 7,
                podiums: 14
            },
            {
                name: "Liam Lawson", 
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/2col/image.png",
                points: 2,
                number: 30,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "Mercedes-AMG PETRONAS F1 Team",
        drivers: [
            {
                name: "George Russell",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/2col/image.png",
                points: 210,
                number: 63,
                wins: 1,
                podiums: 5
            },
            {
                name: "Andrea Kimi Antonelli",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KIMANT01_Kimi_Antonelli/kimant01.png.transform/2col/image.png",
                points: 85,
                number: 12,
                wins: 0,
                podiums: 1
            }
        ]
    },
    {
        name: "Aston Martin Aramco F1 Team",
        drivers: [
            {
                name: "Fernando Alonso",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
                points: 62,
                number: 14,
                wins: 0,
                podiums: 0
            },
            {
                name: "Lance Stroll",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
                points: 24,
                number: 18,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "BWT Alpine F1 Team",
        drivers: [
            {
                name: "Pierre Gasly",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/2col/image.png",
                points: 26,
                number: 10,
                wins: 0,
                podiums: 1
            },
            {
                name: "Jack Doohan",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/J/JACDOO01_Jack_Doohan/jacdoo01.png.transform/2col/image.png",
                points: 0,
                number: 7,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "Williams Racing",
        drivers: [
            {
                name: "Alexander Albon",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/2col/image.png",
                points: 12,
                number: 23,
                wins: 0,
                podiums: 0
            },
            {
                name: "Carlos Sainz",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
                points: 184,
                number: 55,
                wins: 1,
                podiums: 5
            }
        ]
    },
    {
        name: "Visa Cash App RB",
        drivers: [
            {
                name: "Yuki Tsunoda",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/2col/image.png",
                points: 22,
                number: 22,
                wins: 0,
                podiums: 0
            },
            {
                name: "Isack Hadjar",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png", 
                points: 0,
                number: 6,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "Kick Sauber",
        drivers: [
            {
                name: "Nico Hülkenberg",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
                points: 24,
                number: 27,
                wins: 0,
                podiums: 0
            },
            {
                name: "Gabriel Bortoleto",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/2col/image.png",
                points: 0,
                number: 5,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "MoneyGram Haas F1 Team",
        drivers: [
            {
                name: "Esteban Ocon",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/2col/image.png",
                points: 5,
                number: 31,
                wins: 0,
                podiums: 0
            },
            {
                name: "Oliver Bearman",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/2col/image.png",
                points: 7,
                number: 87,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "Cadillac F1 Team",
        drivers: [
            {
                name: "Ismeretlen Pilóta 1",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
                points: 0,
                number: 0,
                wins: 0,
                podiums: 0
            },
            {
                name: "Ismeretlen Pilóta 2",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
                points: 0,
                number: 0,
                wins: 0,
                podiums: 0
            }
        ]
    }
];

// HTML generáló függvény - KIZÁRÓLAG KÁRTYÁK
const renderDrivers = () => {
    // FONTOS: Most már a belső 'div'-et keressük, nem a main-t!
    const mainContainer = document.getElementById('racers');
    
    if (!mainContainer) return;
    
    // Töröljük a korábbi kártyákat (de a H1-et nem, mert az a div-en kívül van)
    mainContainer.innerHTML = ''; 

    // 1. Pilóták összegyűjtése
    let allDrivers = [];
    f1Data.forEach(team => {
        allDrivers = allDrivers.concat(team.drivers);
    });

    // 2. Rendezés
    allDrivers.sort((a, b) => b.points - a.points);

    // 3. Kiíratás
    allDrivers.forEach(driver => {
        const driverSection = document.createElement('section');

        driverSection.innerHTML = `
            <h2>${driver.name}</h2>
            <img src="${driver.image}" alt="${driver.name} fotó">
            <ul>
                <li>
                    <p>Pontszám: ${driver.points}</p>
                    <p>Rajtszám: ${driver.number}</p>
                    <p>Győzelem: ${driver.wins}</p>
                    <p>Pódium: ${driver.podiums}</p>
                </li>
            </ul>
        `;

        mainContainer.appendChild(driverSection);
    });
};

document.addEventListener('DOMContentLoaded', renderDrivers);