const gameArea = document.getElementById("gameArea");

function mostraGioco(gioco) {
    switch(gioco) {
        case 'crush': crushScore4UI(); break;
        case 'chiConosce': gameArea.innerHTML = "<p>Funzione 'Chi conosce meglio' in arrivo!</p>"; break;
        case 'decisioni': gameArea.innerHTML = "<p>Funzione 'Gioco delle decisioni' in arrivo!</p>"; break;
        case 'memory': gameArea.innerHTML = "<p>Funzione 'Memory Game' in arrivo!</p>"; break;
        case 'eSe': gameArea.innerHTML = "<p>Funzione 'Simulatore E se...' in arrivo!</p>"; break;
        case 'personalita': gameArea.innerHTML = "<p>Funzione 'Questionario personalità' in arrivo!</p>"; break;
        case 'indovina': gameArea.innerHTML = "<p>Funzione 'Indovina la scelta' in arrivo!</p>"; break;
        case 'giorni': gameArea.innerHTML = "<p>Funzione 'Contatore giorni' in arrivo!</p>"; break;
    }
}

// ---------------- Crush Score 4.0 (Tutte le domande) ----------------
function crushScore4UI() {
    const domande = [
        "Ti piace il suo sorriso?",
        "Ti piace il suo modo di vestire?",
        "Ti emozioni quando lo/la vedi?",
        "Ti piace parlare con lui/lei?",
        "Ti interessa sapere cosa fa nella giornata?",
        "Vorresti passare più tempo con lui/lei?",
        "Ti piace come pensa?",
        "Ti fa ridere?",
        "Ti senti felice quando lo/la vedi?",
        "Vorresti conoscerlo/la meglio?"
    ];

    let html = `<h2>Crush Score 4.0</h2>`;
    domande.forEach((q,i) => {
        html += `<label>${q}</label>
                 <select id="q${i}">
                    <option value="si">Si</option>
                    <option value="no">No</option>
                 </select><br>`;
    });

    html += `<button onclick="calcolaCrush(${domande.length})">Calcola Crush Score</button>
             <div class="output" id="output"></div>`;
    gameArea.innerHTML = html;
}

function calcolaCrush(totalDomande) {
    let score = 0;
    for(let i=0; i<totalDomande; i++){
        if(document.getElementById(`q${i}`).value === "si") score += 3;
    }
    const percent = Math.round((score / (totalDomande*3)) * 100);
    document.getElementById("output").innerHTML = `💖 Il tuo Crush Score è: ${percent}% 💖`;
}
