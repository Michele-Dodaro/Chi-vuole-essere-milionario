"use strict";

// Archivio completo di domande
const tutteleDomande = [
    {
        question: "Quale animale è il simbolo della città di Roma?",
        answers: ["Lupa", "Aquila", "Leone", "Gatto"],
        correct: 0
    },
    {
        question: "Quanti minuti ci sono in un'ora?",
        answers: ["50", "100", "60", "120"],
        correct: 2
    },
    {
        question: "In quale continente si trova il deserto del Sahara?",
        answers: ["Asia", "America", "Australia", "Africa"],
        correct: 3
    },
    {
        question: "Qual è il metallo rappresentato dal simbolo 'Au'?",
        answers: ["Argento", "Oro", "Alluminio", "Rame"],
        correct: 1
    },
    {
        question: "Chi ha scritto 'La Divina Commedia'?",
        answers: ["Alessandro Manzoni", "Giacomo Leopardi", "Dante Alighieri", "Ugo Foscolo"],
        correct: 2
    },
    {
        question: "Qual è l'organo più grande del corpo umano?",
        answers: ["Cervello", "Pelle", "Fegato", "Polmoni"],
        correct: 1
    },
    {
        question: "In che anno è avvenuta la caduta del Muro di Berlino?",
        answers: ["1989", "1991", "1985", "1945"],
        correct: 0
    },
    {
        question: "Qual è la capitale della Francia?",
        answers: ["Berlino", "Parigi", "Madrid", "Londra"],
        correct: 1
    },
    {
        question: "Quanti lati ha un esagono?",
        answers: ["4", "5", "6", "8"],
        correct: 2
    },
    {
        question: "Chi ha dipinto la Cappella Sistina?",
        answers: ["Leonardo da Vinci", "Raffaello", "Botticelli", "Michelangelo"],
        correct: 3
    },
    {
        question: "Qual è il pianeta più grande del Sistema Solare?",
        answers: ["Saturno", "Giove", "Nettuno", "Urano"],
        correct: 1
    },
    {
        question: "Qual è la montagna più alta del mondo?",
        answers: ["K2", "Monte Bianco", "Everest", "Kilimanjaro"],
        correct: 2
    },
    {
        question: "Quante ore ha un giorno?",
        answers: ["12", "20", "24", "36"],
        correct: 2
    },
    {
        question: "Qual è la capitale del Giappone?",
        answers: ["Osaka", "Seul", "Tokyo", "Pechino"],
        correct: 2
    },
    {
        question: "Chi ha scritto 'I Promessi Sposi'?",
        answers: ["Giacomo Leopardi", "Alessandro Manzoni", "Ugo Foscolo", "Giovanni Boccaccio"],
        correct: 1
    },
    {
        question: "Qual è la formula chimica dell'acqua?",
        answers: ["CO2", "O2", "NaCl", "H2O"],
        correct: 3
    },
    {
        question: "In quale anno è scoppiata la Prima Guerra Mondiale?",
        answers: ["1910", "1918", "1914", "1920"],
        correct: 2
    },
    {
        question: "Quante corde ha una chitarra classica?",
        answers: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "Qual è il paese più grande del mondo per superficie?",
        answers: ["Canada", "Cina", "USA", "Russia"],
        correct: 3
    },
    {
        question: "Quanti giocatori ci sono in una squadra di calcio?",
        answers: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        question: "Chi ha scoperto l'America nel 1492?",
        answers: ["Amerigo Vespucci", "Marco Polo", "Cristoforo Colombo", "Vasco da Gama"],
        correct: 2
    },
    {
        question: "Qual è la valuta del Giappone?",
        answers: ["Yuan", "Won", "Dollaro", "Yen"],
        correct: 3
    },
    {
        question: "In quale città si trova il Colosseo?",
        answers: ["Firenze", "Roma", "Napoli", "Milano"],
        correct: 1
    },
    {
        question: "Quanti continenti ci sono sulla Terra?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Qual è l'oceano più grande del mondo?",
        answers: ["Atlantico", "Indiano", "Pacifico", "Artico"],
        correct: 2
    },
    {
        question: "Chi era il primo presidente degli Stati Uniti?",
        answers: ["Abraham Lincoln", "Thomas Jefferson", "Benjamin Franklin", "George Washington"],
        correct: 3
    },
    {
        question: "Qual è l'animale più veloce del mondo?",
        answers: ["Leone", "Ghepardo", "Puma", "Struzzo"],
        correct: 1
    },
    {
        question: "Quanti colori ha l'arcobaleno?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Quante zampe ha un ragno?",
        answers: ["6", "8", "10", "12"],
        correct: 1
    },
    {
        question: "Qual è la capitale dell'Australia?",
        answers: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
        correct: 3
    },
    {
        question: "In quale città si trova la Torre di Pisa?",
        answers: ["Roma", "Firenze", "Pisa", "Bologna"],
        correct: 2
    },
    {
        question: "Quanti secondi ci sono in un minuto?",
        answers: ["30", "45", "60", "100"],
        correct: 2
    },
    {
        question: "Qual è il simbolo chimico del ferro?",
        answers: ["Fe", "Fr", "Fi", "Fo"],
        correct: 0
    },
    {
        question: "Qual è il fiume più lungo del mondo?",
        answers: ["Rio delle Amazzoni", "Congo", "Nilo", "Mississippi"],
        correct: 2
    },
    {
        question: "In quale sport si usa il termine 'slam dunk'?",
        answers: ["Pallavolo", "Tennis", "Basket", "Rugby"],
        correct: 2
    },
    {
        question: "Quante note musicali esistono?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Qual è la lingua più parlata al mondo?",
        answers: ["Inglese", "Spagnolo", "Cinese mandarino", "Hindi"],
        correct: 2
    },
    {
        question: "In quale paese si trova la Grande Muraglia?",
        answers: ["Giappone", "Corea", "India", "Cina"],
        correct: 3
    },
    {
        question: "Quanti mesi ha un anno?",
        answers: ["10", "11", "12", "13"],
        correct: 2
    },
    {
        question: "Qual è il numero che viene dopo 999?",
        answers: ["999,5", "1000", "1001", "9999"],
        correct: 1
    }
];

// Prende 7 domande a caso dall'archivio per questa partita
const domande = tutteleDomande
    .slice()                           // copia l'array senza modificare l'originale
    .sort(() => Math.random() - 0.5)   // mescola in ordine casuale
    .slice(0, 7);                      // prende solo le prime 7

let currentQuestionIndex = 0;
let canAnswer = true;

const qText = document.getElementById('q-text');
const answerButtons = ['A', 'B', 'C', 'D'].map(
    letter => document.getElementById(`btn-${letter}`)
);
const prizeElements = document.querySelectorAll('.prize');
const labels = ['A', 'B', 'C', 'D'];

function updateSidebar() {
    const total = prizeElements.length;
    prizeElements.forEach((prize, i) => {
        prize.classList.remove('active', 'done');
        const questionForThisPrize = total - 1 - i;
        if (questionForThisPrize === currentQuestionIndex) {
            prize.classList.add('active');
        } else if (questionForThisPrize < currentQuestionIndex) {
            prize.classList.add('done');
        }
    });
}

function loadQuestion() {
    if (currentQuestionIndex >= domande.length) {
        showResult(true);
        return;
    }

    const q = domande[currentQuestionIndex];
    qText.textContent = q.question;

    answerButtons.forEach((btn, i) => {
        btn.innerHTML = `<span>${labels[i]}:</span> ${q.answers[i]}`;
        btn.className = 'opt';
        btn.style.background = '';
        btn.disabled = false;
    });

    canAnswer = true;
}

function handleAnswer(answerIndex) {
    if (!canAnswer) return;
    canAnswer = false;

    answerButtons.forEach(btn => (btn.disabled = true));

    const correctIndex = domande[currentQuestionIndex].correct;

    answerButtons[answerIndex].classList.add('active');

    setTimeout(() => {
        if (answerIndex === correctIndex) {
            answerButtons[answerIndex].style.background = '#27ae60';
            setTimeout(() => {
                currentQuestionIndex++;
                updateSidebar();
                loadQuestion();
            }, 1500);
        } else {
            answerButtons[answerIndex].style.background = '#e74c3c';
            answerButtons[correctIndex].style.background = '#27ae60';
            setTimeout(() => showResult(false), 2000);
        }
    }, 1000);
}

function getWonAmount() {
    if (currentQuestionIndex === 0) return '€ 0';
    const wonPrizeIndex = prizeElements.length - currentQuestionIndex;
    return prizeElements[wonPrizeIndex]?.textContent?.trim() ?? '€ 0';
}

function showResult(won) {
    const game = document.querySelector('.game');
    const amount = won ? '€ 1.000.000' : getWonAmount();
    const color = won ? '#ffd700' : '#e74c3c';
    const message = won ? 'HAI VINTO!' : 'HAI PERSO!';
    const subtext = won
        ? `Complimenti! Hai vinto <strong style="color:#ffd700">${amount}</strong>`
        : `Hai guadagnato <strong style="color:#ffd700">${amount}</strong>`;

    game.innerHTML = `
        <div style="text-align:center; padding:40px;">
            <img src="logo.png" alt="Logo" class="logo-img" style="margin-bottom:30px;">
            <h1 style="color:${color}; font-size:2.5rem; margin-bottom:20px;">${message}</h1>
            <p style="font-size:1.6rem; color:white; margin-bottom:30px;">${subtext}</p>
            <button id="btn-restart" style="
                padding:15px 40px;
                font-size:1.2rem;
                background:#ff9900;
                border:none;
                color:black;
                cursor:pointer;
                font-weight:bold;
                clip-path:polygon(8% 0,92% 0,100% 50%,92% 100%,8% 100%,0 50%);
            ">Gioca ancora</button>
        </div>
    `;

    document.getElementById('btn-restart')?.addEventListener('click', () => location.reload());
}

// Avvio del gioco
answerButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => handleAnswer(i));
});

updateSidebar();
loadQuestion();
