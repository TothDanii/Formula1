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
                wins: 7,
                podiums: 17
            },
            {
                name: "Oscar Piastri",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/2col/image.png",
                points: 366,
                number: 81,
                wins: 7,
                podiums: 14
            }
        ]
    },
    {
        name: "Scuderia Ferrari HP",
        drivers: [
            {
                name: "Charles Leclerc",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/2col/image.png",
                points: 226,
                number: 16,
                wins: 0,
                podiums: 7
            },
            {
                name: "Lewis Hamilton",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png",
                points: 152,
                number: 44,
                wins: 0,
                podiums: 0
            }
        ]
    },
    {
        name: "Oracle Red Bull Racing",
        drivers: [
            {
                name: "Max Verstappen",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png",
                points: 366,
                number: 1,
                wins: 6,
                podiums: 13
            },
            {
                name: "Yuki Tsunoda", 
                image: "../kepek/Profil/Yuki.png",
                points: 28,
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
                points: 294,
                number: 63,
                wins: 2,
                podiums: 9
            },
            {
                name: "Kimi Antonelli",
                image: "../kepek/Profil/Ant.png",
                points: 137,
                number: 12,
                wins: 0,
                podiums: 3
            }
        ]
    },
    {
        name: "Aston Martin Aramco F1 Team",
        drivers: [
            {
                name: "Fernando Alonso",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/2col/image.png",
                points: 40,
                number: 14,
                wins: 0,
                podiums: 0
            },
            {
                name: "Lance Stroll",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/2col/image.png",
                points: 32,
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
                points: 22,
                number: 10,
                wins: 0,
                podiums: 0
            },
            {
                name: "Franco Colapinto",
                image: "../kepek/Profil/Col.webp",
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
                points: 73,
                number: 23,
                wins: 0,
                podiums: 0
            },
            {
                name: "Carlos Sainz",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/2col/image.png",
                points: 48,
                number: 55,
                wins: 0,
                podiums: 1
            }
        ]
    },
    {
        name: "Visa Cash App RB",
        drivers: [
            {
                name: "Liam Lawson",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LIALAW01_Liam_Lawson/lialaw01.png.transform/2col/image.png", 
                points: 36,
                number: 22,
                wins: 0,
                podiums: 0
            },
            {
                name: "Isack Hadjar",
                image: "../kepek/Profil/Had.png", 
                points: 51,
                number: 6,
                wins: 0,
                podiums: 1
            }
        ]
    },
    {
        name: "Kick Sauber",
        drivers: [
            {
                name: "Nico Hülkenberg",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/2col/image.png",
                points: 49,
                number: 27,
                wins: 0,
                podiums: 1
            },
            {
                name: "Gabriel Bortoleto",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GABBOR01_Gabriel_Bortoleto/gabbor01.png.transform/2col/image.png",
                points: 19,
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
                points: 32,
                number: 31,
                wins: 0,
                podiums: 0
            },
            {
                name: "Oliver Bearman",
                image: "https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OLIBEA01_Oliver_Bearman/olibea01.png.transform/2col/image.png",
                points: 41,
                number: 87,
                wins: 0,
                podiums: 0
            }
        ]
    },
];

// HTML generáló függvény - KIZÁRÓLAG KÁRTYÁK
const gpPoints = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1]; // Top 10
const sprintPoints = [8, 7, 6, 5, 4, 3, 2, 1];         // Top 8

// --- 3. MEGJELENÍTŐ FÜGGVÉNY (Render) ---
const renderDrivers = () => {
    const mainContainer = document.getElementById('racers');
    if (!mainContainer) return;
    
    mainContainer.innerHTML = ''; 

    // Összegyűjtés és rendezés
    let allDrivers = [];
    f1Data.forEach(team => allDrivers = allDrivers.concat(team.drivers));
    allDrivers.sort((a, b) => b.points - a.points);

    // Kártyák generálása
    allDrivers.forEach(driver => {
        const driverSection = document.createElement('section');
        driverSection.innerHTML = `
            <h2>${driver.name}</h2>
            <img src="${driver.image}" alt="${driver.name}">
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

    // Frissítjük a legördülő listát is, hogy a nevek betöltődjenek
    populateSelect();
};

// --- 4. LEGÖRDÜLŐ LISTA FELTÖLTÉSE ---
const populateSelect = () => {
    const select = document.getElementById('driverSelect');
    // Csak akkor töltjük fel, ha üres (hogy ne duplikálódjon minden frissítésnél)
    if (select.options.length > 0) return; 

    let allDrivers = [];
    f1Data.forEach(team => allDrivers = allDrivers.concat(team.drivers));
    
    // ABC sorrendbe tesszük a listában a könnyebb kereshetőségért
    allDrivers.sort((a, b) => a.name.localeCompare(b.name));

    allDrivers.forEach(driver => {
        const option = document.createElement('option');
        option.value = driver.name;
        option.text = driver.name;
        select.appendChild(option);
    });
};

// --- 5. AZ ADATOK FRISSÍTÉSE (Gombnyomásra) ---
const updateDriverStats = () => {
    const driverName = document.getElementById('driverSelect').value;
    const position = parseInt(document.getElementById('positionInput').value);
    const isGrandPrix = document.getElementById('raceTypeToggle').checked; // True ha GP, False ha Sprint

    if (!position || position < 1 || position > 20) {
        alert("Kérlek adj meg egy érvényes helyezést (1-20)!");
        return;
    }

    // Megkeressük a pilótát az adatbázisban
    let foundDriver = null;
    f1Data.forEach(team => {
        const driver = team.drivers.find(d => d.name === driverName);
        if (driver) foundDriver = driver;
    });

    if (foundDriver) {
        // Pontszámítás
        let pointsToAdd = 0;

        if (isGrandPrix) {
            // GRAND PRIX LOGIKA
            if (position <= 10) {
                pointsToAdd = gpPoints[position - 1];
            }
            // Statisztikák növelése csak GP-n
            if (position === 1) foundDriver.wins += 1;
            if (position <= 3) foundDriver.podiums += 1;
            
        } else {
            // SPRINT LOGIKA
            if (position <= 8) {
                pointsToAdd = sprintPoints[position - 1];
            }
            // Sprinten nem növeljük a hivatalos győzelem/pódium számlálót (F1 szabály)
        }

        // Pontok hozzáadása
        foundDriver.points += pointsToAdd;

        // Visszajelzés
        alert(`${foundDriver.name} eredménye frissítve! (+${pointsToAdd} pont)`);

        // Oldal újrarajzolása (hogy látszódjon a változás és az új sorrend)
        renderDrivers();
    }
};

// Indítás
document.addEventListener('DOMContentLoaded', renderDrivers);