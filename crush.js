const menu = document.getElementById("menu");
const giocoDiv = document.getElementById("gioco");

function apriGioco(nome) {
    menu.style.display = 'none';
    giocoDiv.style.display = 'block';
    giocoDiv.innerHTML = '';

    switch(nome) {
        case 'chiConosceMeglio': chiConosceMeglio(); break;
        case 'giocoDecisioni': giocoDecisioni(); break;
        case 'memoryGame': memoryGame(); break;
        case 'simulatoreESe': simulatoreESe(); break;
        case 'questionarioPersonalita': questionarioPersonalita(); break;
        case 'indovinaScelta': indovinaScelta(); break;
        case 'contatoreGiorni': contatoreGiorni(); break;
        case 'testCompatibilita': testCompatibilita(); break;
        case 'sfidaRandom': sfidaRandom(); break;
        case 'complimentiRandom': complimentiRandom(); break;
        case 'crushScore4': crushScore4(); break;
    }
}

// Funzione per tornare al menu
function tornaMenu() {
    giocoDiv.style.display = 'none';
    menu.style.display = 'block';
}

// ---------------------- GIOCHI ----------------------
function chiConosceMeglio() {
    let domande = [
        "Qual'è il suo colore preferito?",
        "Qual'è il suo cibo preferito?",
        "Qual'è il suo animale preferito?",
        "Qual'è il suo hobby principale?",
        "Qual'è il suo film preferito?"
    ];
    let risposte = [];

    let html = "<h2>Chi conosce meglio l'altro</h2>";
    domande.forEach((d,i)=>{
        html += `<p>${d}</p><input type="text" id="q${i}"><br>`;
    });
    html += `<button onclick="verificaChiConosceMeglio()">Invia risposte</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaChiConosceMeglio() {
    let domande = 5;
    let punti = 0;
    for(let i=0;i<domande;i++){
        let val = document.getElementById(`q${i}`).value.toLowerCase();
        if(val) punti++;
    }
    giocoDiv.innerHTML += `<p>Hai completato ${punti} risposte!</p>`;
}

// ----------------------
function giocoDecisioni() {
    let scelte = ["Guardare un film","Uscire a passeggio","Fare un gioco da tavolo","Andare a mangiare una pizza","Ascoltare musica insieme"];
    let scelta = scelte[Math.floor(Math.random()*scelte.length)];
    giocoDiv.innerHTML = `<h2>Gioco delle decisioni</h2><p>La decisione scelta è: <strong>${scelta}</strong></p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function memoryGame() {
    let sequenza = ["rosso","verde","blu","giallo"];
    let html = `<h2>Memory Game</h2><p>Ricorda questa sequenza: ${sequenza.join(", ")}</p>`;
    html += `<button onclick="mostraMemoryInput()">Prossimo</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function mostraMemoryInput() {
    let html = "<h2>Memory Game</h2>";
    html += "<p>Scrivi la sequenza uno per uno:</p>";
    let sequenza = ["rosso","verde","blu","giallo"];
    sequenza.forEach((s,i)=>{
        html += `<input type="text" id="m${i}"><br>`;
    });
    html += `<button onclick="verificaMemory()">Invia</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaMemory() {
    let sequenza = ["rosso","verde","blu","giallo"];
    let punti = 0;
    sequenza.forEach((s,i)=>{
        let val = document.getElementById(`m${i}`).value.toLowerCase();
        if(val===s) punti++;
    });
    giocoDiv.innerHTML = `<p>Hai indovinato ${punti} su ${sequenza.length}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function simulatoreESe() {
    let scenari = [
        "E se andassimo al cinema insieme?",
        "E se facessimo una passeggiata nel parco?",
        "E se organizzassimo una serata giochi?",
        "E se cucinassimo qualcosa insieme?"
    ];
    let scenario = scenari[Math.floor(Math.random()*scenari.length)];
    let prob = Math.floor(Math.random()*101);
    giocoDiv.innerHTML = `<h2>Simulatore 'E se...'</h2><p>${scenario}</p><p>Probabilità: ${prob}%</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function questionarioPersonalita() {
    let domande = [
        "Ti consideri estroverso/a? (si/no)",
        "Ti piace pianificare tutto? (si/no)",
        "Ti senti creativo/a? (si/no)",
        "Ti piace lavorare in gruppo? (si/no)",
        "Ti consideri empatico/a? (si/no)"
    ];
    let html = "<h2>Questionario personalità</h2>";
    domande.forEach((d,i)=>{
        html += `<p>${d}</p><input type="text" id="p${i}"><br>`;
    });
    html += `<button onclick="verificaQuestionario()">Invia risposte</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaQuestionario() {
    let punteggio = 0;
    for(let i=0;i<5;i++){
        let val = document.getElementById(`p${i}`).value.toLowerCase();
        if(val==="si") punteggio++;
    }
    giocoDiv.innerHTML += `<p>Punteggio personalità: ${punteggio}/5</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function indovinaScelta() {
    let scelte = ["Pizza","Gelato","Cinema","Passeggiata","Musica"];
    let html = "<h2>Indovina cosa sceglierà l'altro</h2>";
    html += `<input type="text" id="iscelta"><br><button onclick="verificaIndovina()">Invia</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaIndovina() {
    let scelte = ["Pizza","Gelato","Cinema","Passeggiata","Musica"];
    let risposta = document.getElementById("iscelta").value;
    let sceltaAltro = scelte[Math.floor(Math.random()*scelte.length)];
    let risultato = risposta.toLowerCase()===sceltaAltro.toLowerCase() ? "Hai indovinato!" : `Non hai indovinato. L'altro ha scelto ${sceltaAltro}`;
    giocoDiv.innerHTML = `<p>${risultato}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function contatoreGiorni() {
    let html = `<h2>Contatore giorni amicizia</h2><p>Inserisci da quanti giorni vi conoscete:</p><input type="number" id="giorni"><br><button onclick="verificaGiorni()">Calcola</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaGiorni() {
    let giorni = parseInt(document.getElementById("giorni").value);
    let settimane = Math.floor(giorni/7);
    let mesi = Math.floor(giorni/30);
    giocoDiv.innerHTML = `<p>Giorni: ${giorni}<br>Settimane: ${settimane}<br>Mesi: ${mesi}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function testCompatibilita() {
    let domande = [
        "Preferite uscire o stare a casa?",
        "Vi piace lo stesso genere musicale?",
        "Avete ritmi simili?",
        "Vi considerate organizzate?",
        "Vi fidate una dell'altra?"
    ];
    let html = "<h2>Test compatibilità</h2>";
    domande.forEach((d,i)=>{
        html += `<p>${d}</p><input type="text" id="tc${i}"><br>`;
    });
    html += `<button onclick="verificaCompatibilita()">Invia</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaCompatibilita() {
    let score = 0;
    for(let i=0;i<5;i++){
        let val = document.getElementById(`tc${i}`).value.toLowerCase();
        if(val==="si") score++;
    }
    giocoDiv.innerHTML = `<p>Compatibilità: ${score*20}%</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function sfidaRandom() {
    let sfide = ["Cantate una canzone insieme!","Scattate una foto buffa!","Imitate un personaggio!","Raccontate un segreto!","Fate una mini coreografia!"];
    let scelta = sfide[Math.floor(Math.random()*sfide.length)];
    giocoDiv.innerHTML = `<h2>Sfida random</h2><p>${scelta}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function complimentiRandom() {
    let complimenti = ["Hai un sorriso bellissimo!","Porti buon umore!","Sei unica!","Hai uno stile stupendo!","Sei una grande amica!"];
    let scelta = complimenti[Math.floor(Math.random()*complimenti.length)];
    giocoDiv.innerHTML = `<h2>Complimento random</h2><p>${scelta}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------------------
function crushScore4() {
    let domande = [
        "Ti piace il suo sorriso?","Ti piace il suo modo di vestire?","Ti si illumina la giornata quando lo/la vedi?",
        "Ti capita di guardarlo/a anche quando non dovresti?","Ti emozioni quando senti la sua voce?"
    ];
    let html = "<h2>Crush Score 4.0</h2>";
    domande.forEach((d,i)=>{
        html += `<p>${d}</p><input type="text" id="c${i}"><br>`;
    });
    html += `<button onclick="verificaCrushScore()">Calcola</button><br><button onclick="tornaMenu()">Torna al menu</button>`;
    giocoDiv.innerHTML = html;
}

function verificaCrushScore() {
    let score = 0;
    for(let i=0;i<5;i++){
        let val = document.getElementById(`c${i}`).value.toLowerCase();
        if(val==="si") score += 4;
    }
    let percent = Math.floor((score/20)*100);
    giocoDiv.innerHTML = `<p>Crush Score: ${percent}%</p><button onclick="tornaMenu()">Torna al menu</button>`;
}
