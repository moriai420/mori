function showGame(game) {
    const area = document.getElementById('gameArea');
    area.innerHTML = ""; // pulisci l'area

    switch(game) {
        case 'chiConosceMeglio':
            chiConosceMeglio();
            break;
        case 'giocoDecisioni':
            giocoDecisioni();
            break;
        case 'memoryGame':
            memoryGame();
            break;
        case 'simulatoreESe':
            simulatoreESe();
            break;
        case 'questionarioPersonalita':
            questionarioPersonalita();
            break;
        case 'indovinaScelta':
            indovinaScelta();
            break;
        case 'contatoreGiorni':
            contatoreGiorni();
            break;
        case 'testCompatibilita':
            testCompatibilita();
            break;
        case 'sfidaRandom':
            sfidaRandom();
            break;
        case 'complimentiRandom':
            complimentiRandom();
            break;
        case 'crushScore':
            crushScore();
            break;
    }
}

// --- Esempio di uno dei giochi adattato in JS ---
function chiConosceMeglio() {
    const area = document.getElementById('gameArea');
    area.innerHTML = `<h2>Chi conosce meglio l'altro</h2>`;

    const domande = [
        "Qual'è il suo colore preferito?",
        "Qual'è il suo cibo preferito?",
        "Qual'è il suo animale preferito?",
        "Qual'è il suo hobby principale?",
        "Qual'è il suo film preferito?"
    ];

    const risposte = [];
    let current = 0;

    const inputDiv = document.createElement('div');
    const input = document.createElement('input');
    inputDiv.appendChild(input);
    const btn = document.createElement('button');
    btn.textContent = "Avanti";
    inputDiv.appendChild(btn);
    area.appendChild(inputDiv);

    const titolo = document.createElement('p');
    area.appendChild(titolo);

    function nextStep() {
        if(current < domande.length) {
            titolo.textContent = domande[current];
            if(risposte[current] !== undefined) {
                input.value = risposte[current];
            } else {
                input.value = "";
            }
            current++;
        } else {
            let punti = 0;
            alert("Simulazione completata!"); // placeholder
            // qui puoi aggiungere la logica per indovinare le risposte
        }
    }

    btn.onclick = nextStep;
    nextStep();
}
