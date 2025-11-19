const menu = document.getElementById('menu');
const giocoDiv = document.getElementById('gioco');

function apriGioco(nome) {
  menu.style.display = 'none';
  giocoDiv.style.display = 'block';
  giocoDiv.innerHTML = '';
  if(nome === 'chiConosceMeglio') chiConosceMeglio();
  if(nome === 'giocoDecisioni') giocoDecisioni();
  if(nome === 'memoryGame') memoryGame();
  if(nome === 'simulatoreESe') simulatoreESe();
  if(nome === 'questionarioPersonalita') questionarioPersonalita();
  if(nome === 'indovinaScelta') indovinaScelta();
  if(nome === 'contatoreGiorni') contatoreGiorni();
  if(nome === 'testCompatibilita') testCompatibilita();
  if(nome === 'sfidaRandom') sfidaRandom();
  if(nome === 'complimentiRandom') complimentiRandom();
  if(nome === 'crushScore') crushScore();
}

// ----------- Gioco 1: Chi conosce meglio -----------
function chiConosceMeglio() {
  let domande = [
    "Qual è il suo colore preferito?",
    "Qual è il suo cibo preferito?",
    "Qual è il suo animale preferito?",
    "Qual è il suo hobby principale?",
    "Qual è il suo film preferito?"
  ];
  let risposte = [];
  let current = 0;

  giocoDiv.innerHTML = `<div id="domandaContainer"></div><button id="prossima">Prossima</button><div id="risultato"></div>`;

  function nextQuestion() {
    const container = document.getElementById('domandaContainer');
    if(current < domande.length) {
      container.innerHTML = `<p>${domande[current]}</p><input type="text" id="rispostaInput">`;
    } else {
      mostraRisultato();
    }
  }

  function mostraRisultato() {
    const container = document.getElementById('domandaContainer');
    container.innerHTML = '';
    const risultato = document.getElementById('risultato');
    risultato.innerHTML = `<p>Hai inserito tutte le risposte!</p>
                           <p class="cuore">Le tue risposte: ${risposte.join(', ')}</p>
                           <button onclick="tornaMenu()">Torna al menu</button>`;
  }

  document.getElementById('prossima').onclick = function() {
    risposte.push(document.getElementById('rispostaInput').value);
    current++;
    nextQuestion();
  }

  nextQuestion();
}

// ----------- Gioco 2: Gioco delle decisioni -----------
function giocoDecisioni() {
  let scelte = ["Guardare un film","Uscire a passeggio","Fare un gioco da tavolo","Andare a mangiare una pizza","Ascoltare musica insieme"];
  let scelta = scelte[Math.floor(Math.random() * scelte.length)];
  giocoDiv.innerHTML = `<p>La decisione scelta dal programma è:</p><p class="cuore">${scelta}</p>
                        <button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------- Gioco 3: Memory Game -----------
function memoryGame() {
  let sequenza = ["rosso","verde","blu","giallo"];
  let current = 0;
  let risposte = [];

  giocoDiv.innerHTML = `<p>Ricorda questa sequenza:</p><p class="cuore">${sequenza.join(', ')}</p>
                        <button id="iniziaMemory">Ho memorizzato!</button>
                        <div id="domandaMemory"></div><div id="risultatoMemory"></div>`;

  document.getElementById('iniziaMemory').onclick = function() {
    document.getElementById('domandaMemory').innerHTML = `<p>Scrivi la sequenza uno per uno:</p><input type="text" id="rispostaInput"><button id="prossimaMem">Prossima</button>`;
    document.getElementById('iniziaMemory').style.display='none';
    document.getElementById('prossimaMem').onclick = function() {
      risposte.push(document.getElementById('rispostaInput').value);
      document.getElementById('rispostaInput').value='';
      current++;
      if(current >= sequenza.length) {
        let punti = risposte.filter((v,i)=>v===sequenza[i]).length;
        document.getElementById('risultatoMemory').innerHTML = `<p>Hai indovinato ${punti} su ${sequenza.length}</p><button onclick="tornaMenu()">Torna al menu</button>`;
      }
    }
  }
}

// ----------- Gioco 4: Simulatore E se... -----------
function simulatoreESe() {
  let scenari = ["E se andassimo al cinema insieme?","E se facessimo una passeggiata nel parco?","E se organizzassimo una serata giochi?","E se cucinassimo qualcosa insieme?"];
  let scenario = scenari[Math.floor(Math.random() * scenari.length)];
  let prob = Math.floor(Math.random() * 101);
  giocoDiv.innerHTML = `<p>${scenario}</p><p>Probabilità che succeda: ${prob}%</p>
                        <button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------- Gioco 5: Questionario personalità -----------
function questionarioPersonalita() {
  let domande = ["Ti consideri estroverso/a? (si/no)","Ti piace pianificare tutto? (si/no)","Ti senti creativo/a? (si/no)","Ti piace lavorare in gruppo? (si/no)","Ti consideri empatico/a? (si/no)"];
  let punteggio = 0;
  let current = 0;

  giocoDiv.innerHTML = `<div id="domandaContainer"></div><button id="prossima">Prossima</button><div id="risultato"></div>`;

  function nextQuestion() {
    const container = document.getElementById('domandaContainer');
    if(current < domande.length) {
      container.innerHTML = `<p>${domande[current]}</p><input type="text" id="rispostaInput">`;
    } else {
      document.getElementById('risultato').innerHTML = `<p>Punteggio personalità: ${punteggio}/${domande.length}</p>
                                                        <button onclick="tornaMenu()">Torna al menu</button>`;
      document.getElementById('domandaContainer').innerHTML='';
    }
  }

  document.getElementById('prossima').onclick = function() {
    if(document.getElementById('rispostaInput').value.toLowerCase()=='si') punteggio++;
    current++;
    nextQuestion();
  }

  nextQuestion();
}

// ----------- Gioco 6: Indovina scelta -----------
function indovinaScelta() {
  let scelte = ["Pizza","Gelato","Cinema","Passeggiata","Musica"];
  giocoDiv.innerHTML = `<p>Prova a indovinare la scelta dell'altro:</p>
                        <input type="text" id="rispostaInput"><button id="prossima">Controlla</button>
                        <div id="risultato"></div>`;
  document.getElementById('prossima').onclick = function() {
    let risposta = document.getElementById('rispostaInput').value;
    let sceltaAltro = scelte[Math.floor(Math.random() * scelte.length)];
    let risultato = risposta===sceltaAltro ? "Hai indovinato!" : `Non hai indovinato. L'altro ha scelto: ${sceltaAltro}`;
    document.getElementById('risultato').innerHTML = `<p>${risultato}</p><button onclick="tornaMenu()">Torna al menu</button>`;
  }
}

// ----------- Gioco 7: Contatore giorni amicizia -----------
function contatoreGiorni() {
  giocoDiv.innerHTML = `<p>Inserisci da quanti giorni vi conoscete:</p>
                        <input type="number" id="giorni"><button id="calcola">Calcola</button>
                        <div id="risultato"></div>`;
  document.getElementById('calcola').onclick = function() {
    let giorni = parseInt(document.getElementById('giorni').value);
    let settimane = Math.floor(giorni/7);
    let mesi = Math.floor(giorni/30);
    document.getElementById('risultato').innerHTML = `<p>Giorni: ${giorni}</p><p>Settimane: ${settimane}</p><p>Mesi (approssimati): ${mesi}</p>
                                                      <button onclick="tornaMenu()">Torna al menu</button>`;
  }
}

// ----------- Gioco 8: Test compatibilità -----------
function testCompatibilita() {
  let domande = ["Preferite uscire o stare a casa?","Vi piace lo stesso genere musicale?","Avete ritmi simili?","Vi considerate organizzate?","Vi fidate una dell'altra?"];
  let score = 0;
  let current = 0;

  giocoDiv.innerHTML = `<div id="domandaContainer"></div><button id="prossima">Prossima</button><div id="risultato"></div>`;

  function nextQuestion() {
    const container = document.getElementById('domandaContainer');
    if(current<domande.length){
      container.innerHTML = `<p>${domande[current]}</p><input type="text" id="rispostaInput">`;
    } else {
      document.getElementById('risultato').innerHTML = `<p>Compatibilità: ${score*20}%</p><button onclick="tornaMenu()">Torna al menu</button>`;
      container.innerHTML='';
    }
  }

  document.getElementById('prossima').onclick = function(){
    if(document.getElementById('rispostaInput').value.toLowerCase()=='si') score++;
    current++;
    nextQuestion();
  }

  nextQuestion();
}

// ----------- Gioco 9: Sfida random -----------
function sfidaRandom() {
  let sfide = ["Cantate una canzone insieme!","Scattate una foto buffa!","Imitate un personaggio!","Raccontate un segreto!","Fate una mini coreografia!"];
  let scelta = sfide[Math.floor(Math.random() * sfide.length)];
  giocoDiv.innerHTML = `<p class="cuore">Sfida: ${scelta}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------- Gioco 10: Complimento random -----------
function complimentiRandom() {
  let complimenti = ["Hai un sorriso bellissimo!","Porti buon umore!","Sei unica!","Hai uno stile stupendo!","Sei una grande amica!"];
  let scelta = complimenti[Math.floor(Math.random() * complimenti.length)];
  giocoDiv.innerHTML = `<p class="cuore">Complimento: ${scelta}</p><button onclick="tornaMenu()">Torna al menu</button>`;
}

// ----------- Gioco 11: Crush Score 4.0 -----------
function crushScore() {
  let domande = [
    {q:"Ti piace il suo sorriso?",p:3},{q:"Ti piace il suo modo di vestire?",p:3},{q:"Ti si illumina la giornata quando lo/la vedi?",p:4},
    {q:"Ti capita di guardarlo/a anche quando non dovresti?",p:3},{q:"Ti emozioni quando senti la sua voce?",p:4},{q:"Ti scrive spontaneamente senza motivo?",p:4},
    {q:"Ti risponde spesso subito?",p:3},{q:"Rileggi i messaggi che vi scrivete?",p:3},{q:"Ti senti speciale quando ti manda qualcosa?",p:3},
    {q:"Una sua notifica ti emoziona un po'?",p:4}
  ]; // puoi aggiungere tutte le 40 domande nello stesso formato

  let score = 0;
  let current = 0;

  giocoDiv.innerHTML = `<div id="domandaContainer"></div><button id="prossima">Prossima</button><div id="risultato"></div>`;

  function nextQuestion() {
    if(current<domande.length){
      document.getElementById('domandaContainer').innerHTML = `<p>${domande[current].q}</p><input type="text" id="rispostaInput">`;
    } else {
      let percent = Math.round(score/40*100); 
      document.getElementById('domandaContainer').innerHTML='';
      document.getElementById('risultato').innerHTML = `<p class="cuore">Crush Score: ${percent}%</p>
                                                        <button onclick="tornaMenu()">Torna al menu</button>`;
    }
  }

  document.getElementById('prossima').onclick = function() {
    if(document.getElementById('rispostaInput').value.toLowerCase()=='si') score+=domande[current].p;
    current++;
    nextQuestion();
  }

  nextQuestion();
}

// ---------- Torna al menu -----------
function tornaMenu(){
  giocoDiv.style.display='none';
  menu.style.display='block';
  giocoDiv.innerHTML='';
}
