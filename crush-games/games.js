// games.js

// ===============================
// Variabili globali
// ===============================
let punteggio = 0;

// ===============================
// Gioco 1: Sfida Random
// ===============================
function giocoSfidaRandom() {
    const sfide = [
        "Cantate una canzone insieme!",
        "Scattate una foto buffa!",
        "Imitate un personaggio!",
        "Raccontate un segreto!",
        "Fate una mini coreografia!"
    ];

    const scelta = sfide[Math.floor(Math.random() * sfide.length)];
    alert("Sfida: " + scelta);
}

// ===============================
// Gioco 2: Indovina la scelta
// ===============================
function giocoIndovinaScelta() {
    const scelte = ["Pizza","Gelato","Cinema","Passeggiata","Musica"];
    const sceltaSegreta = scelte[Math.floor(Math.random() * scelte.length)];
    const tentativo = prompt("Indovina cosa sceglierà l'altro: " + scelte.join(", "));

    if(tentativo && tentativo.toLowerCase() === sceltaSegreta.toLowerCase()) {
        alert("🎉 Hai indovinato! Era: " + sceltaSegreta);
    } else {
        alert("❌ Non hai indovinato. Era: " + sceltaSegreta);
    }
}

// ===============================
// Gioco 3: Contatore giorni amicizia
// ===============================
function giocoContatoreGiorni() {
    const giorni = parseInt(prompt("Inserisci da quanti giorni vi conoscete:"));
    if(isNaN(giorni)) return alert("Inserisci un numero valido!");

    const settimane = Math.floor(giorni / 7);
    const mesi = Math.floor(giorni / 30);

    alert(`Giorni: ${giorni}\nSettimane: ${settimane}\nMesi (approssimati): ${mesi}`);
}

// ===============================
// Gioco 4: Crush Score 4.0
// ===============================
function giocoCrushScore() {
    let score = 0;
    const domande = [
        "Ti piace il suo sorriso?",
        "Ti piace il suo modo di vestire?",
        "Ti si illumina la giornata quando lo/la vedi?",
        "Ti capita di guardarlo/a anche quando non dovresti?",
        "Ti emozioni quando senti la sua voce?"
    ];

    domande.forEach(dom => {
        const risposta = prompt(dom + " (si/no)");
        if(risposta && risposta.toLowerCase() === "si") score += 3;
    });

    const percent = Math.min(100, Math.floor(score / (domande.length * 3) * 100));
    alert(`💖 Crush Score: ${percent}%`);
}

// ===============================
// Funzione menu principale
// ===============================
function mostraMenu() {
    let scelta;
    do {
        scelta = prompt(
            "=== MENU GIOCHI 💖 ===\n" +
            "1. Sfida Random\n" +
            "2. Indovina la scelta\n" +
            "3. Contatore giorni amicizia\n" +
            "4. Crush Score 4.0\n" +
            "0. Esci\n" +
            "Scegli un gioco:"
        );

        switch(scelta) {
            case "1": giocoSfidaRandom(); break;
            case "2": giocoIndovinaScelta(); break;
            case "3": giocoContatoreGiorni(); break;
            case "4": giocoCrushScore(); break;
            case "0": alert("Ciao!"); break;
            default: alert("Scelta non valida!"); break;
        }
    } while(scelta !== "0");
}

// Avvio automatico del menu
mostraMenu();
