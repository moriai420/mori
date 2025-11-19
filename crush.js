const gameArea = document.getElementById("gameArea");

const domande = [
    "Ti piace il suo sorriso?",
    "Ti piace il suo modo di vestire?",
    "Ti si illumina la giornata quando lo/la vedi?",
    "Ti capita di guardarlo/a anche quando non dovresti?",
    "Ti emozioni quando senti la sua voce?",
    "Ti scrive spontaneamente senza motivo?",
    "Ti risponde spesso subito?",
    "Rileggi i messaggi che vi scrivete?",
    "Ti senti speciale quando ti manda qualcosa?",
    "Una sua notifica ti emoziona un po?",
    "Ti guarda spesso negli occhi?",
    "Ti cerca con lo sguardo?",
    "Si avvicina più del necessario quando parla con te?",
    "Cerca scuse per parlare con te?",
    "Si comporta diversamente con te?",
    "Ti senti a tuo agio vicino a lui/lei?",
    "Ti confidi facilmente con lui/lei?",
    "Con lui/lei sei te stesso/a al 100%?",
    "Ti fa ridere spesso?",
    "Capisce quando non stai bene?",
    "Ti fa complimenti sinceri?",
    "Ricorda piccoli dettagli che gli/le hai detto?",
    "Ti cerca quando siete in gruppo?",
    "Ti difende/supporta quando serve?",
    "Mostra un po' di gelosia verso altri/e?",
    "Quando vi toccate, senti qualcosa?",
    "Cerchi di fare colpo su di lui/lei?",
    "Immagini situazioni romantiche con lui/lei?",
    "Ti piace il modo in cui ti guarda?",
    "Avverti tensione quando siete vicini?",
    "Lo/la pensi prima di dormire?",
    "Immagini come sarebbe uscire insieme?",
    "Hai mai immaginato di abbracciarlo/a?",
    "Ti chiedi se pensa a te?",
    "Vorresti passare più tempo solo voi due?",
    "Ti immagini una relazione con lui/lei?",
    "Ti fa sentire sicuro/a?",
    "Ti vedi bene al suo fianco in pubblico?",
    "Senti che vi completate?",
    "Hai paura di perderlo/a?"
];

let html = "";
domande.forEach((q,i) => {
    html += `<label>${q}</label>
             <select id="q${i}">
                <option value="si">Si</option>
                <option value="no">No</option>
             </select><br>`;
});

html += `<button onclick="calcolaCrush()">Calcola Crush Score</button>
         <div class="output" id="output"></div>`;

gameArea.innerHTML = html;

function calcolaCrush() {
    let score = 0;
    domande.forEach((_, i) => {
        if(document.getElementById(`q${i}`).value === "si") score += 4;
    });
    const percent = Math.round((score / (domande.length*4)) * 100);
    document.getElementById("output").innerHTML = `💖 Il tuo Crush Score è: ${percent}% 💖`;
}
