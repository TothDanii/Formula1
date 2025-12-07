document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('surveyForm');

    // Biztonsági ellenőrzés: csak akkor fut, ha megtalálja az űrlapot
    if (!form) return;

    form.addEventListener('submit', function(event) {
        let isValid = true;
        let hibaUzenetek = [];

        // Elemek lekérése
        const nevInput = document.getElementById('nev');
        const emailInput = document.getElementById('email');
        const selectUpdate = document.getElementById('kedvenc-ujitas');
        const adatkezelesInput = document.getElementById('adatkezeles');

        // Reset: levesszük a piros kereteket az előző próbálkozásról
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(el => el.classList.remove('input-error'));
        // Checkbox szöveg színének visszaállítása
        if (adatkezelesInput.parentElement) {
            adatkezelesInput.parentElement.style.color = ""; 
        }

        // --- 1. NÉV VALIDÁCIÓ ---
        if (nevInput.value.trim().length < 3) {
            nevInput.classList.add('input-error');
            hibaUzenetek.push("- A névnek legalább 3 karakter hosszúnak kell lennie.");
            isValid = false;
        }

        // --- 2. EMAIL VALIDÁCIÓ (Opcionális, de ha írt, legyen jó) ---
        if (emailInput.value.trim() !== "") {
            if (!emailInput.value.includes('@')) { 
                emailInput.classList.add('input-error');
                hibaUzenetek.push("- Kérlek, valós e-mail címet adj meg!");
                isValid = false;
            }
        }

        // --- 3. SELECT (VÁLASZTÁS) VALIDÁCIÓ ---
        if (selectUpdate.value === "") {
            selectUpdate.classList.add('input-error');
            hibaUzenetek.push("- Kérlek válassz kedvenc újítást a listából.");
            isValid = false;
        }

        // --- 4. CHECKBOX VALIDÁCIÓ ---
        if (!adatkezelesInput.checked) {
            // A checkbox melletti szöveget pirosítjuk be
            adatkezelesInput.parentElement.style.color = "red";
            hibaUzenetek.push("- A beküldéshez el kell fogadnod az adatkezelési szabályzatot.");
            isValid = false;
        }

        // --- DÖNTÉS ---
        if (!isValid) {
            event.preventDefault(); // Megállítjuk a küldést
            alert("Hiba az űrlapon:\n\n" + hibaUzenetek.join("\n"));
        } else {
            // Ha minden rendben, hagyjuk, hogy a form elküldje az adatokat (POST)
            // Opcionális: visszajelzés a felhasználónak
            alert("Köszönjük a véleményed! Az adatok küldése folyamatban...");
        }
    });
});