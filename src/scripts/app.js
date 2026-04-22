// ============================================================
// Dados dos jogos e desafios pré-definidos
// ============================================================
const games = [
    {
        id: "minecraft",
        name: "Minecraft",
        icon: "⛏️",
        challenges: [
            "Construa uma casa usando apenas terra e pedra",
            "Sobreviva 10 noites sem construir nenhum abrigo",
            "Encontre e domesticar pelo menos 3 lobos",
            "Crie uma fazenda automática de trigo",
            "Explore uma mina até encontrar diamantes",
            "Faça uma tabela de encantamentos",
            "Derrote o Wither sem armadura de diamante",
            "Construa uma torre de 50 blocos de altura",
            "Colete 10 obras de arte para o museus",
            "Crie um redstone que funcione"
        ]
    },
    {
        id: "fifa",
        name: "FIFA",
        icon: "⚽",
        challenges: [
            "Ganhe uma partida na dificuldade Lendário",
            "Faça um hat-trick com um time de bronze",
            "Marque 5 gols de falta em uma partida",
            "Vença sem fazer nenhuma substituição",
            "Ganhe 5 partidas seguidas",
            "Faça um gol contra usando apenas o goleiro",
            "Complete o modo Carreira sem perder",
            "Vença um rival histórico",
            "Marque um gol de meio de campo",
            "Ganhe usando only reservas"
        ]
    },
    {
        id: "gta",
        name: "GTA San Andreas",
        icon: "🚗",
        challenges: [
            "Complete todas as missões de Las Venturas",
            "Colete todos os 50 oyster tokens",
            "Faça 100% de conclusão do save",
            "Explore todo o mapa sem usar veículos",
            "Complete a missão Grove Street",
            "Adquira todas as propriedades",
            "Vença todas as missões de gangue",
            "Chegue ao rank máximo de任一個 gangue",
            "Complete o jogo em dificuldade máxima",
            "Colete todas as items colecionáveis"
        ]
    },
    {
        id: "resident-evil",
        name: "RE4",
        icon: "🧟",
        challenges: [
            "Complete a Turno A sem mortes",
            "Obtenha ranking S+ no Profissional",
            "Acabe com 20 Ganados de uma vez",
            "Colete todos os treasures",
            "Derrote o Krauser com apenas uma vida",
            "Vença sem usar First Aid Spray",
            "Complete a cutscene do Salazar",
            "Encontre 3 attache cases",
            "Derrote o Mendez sem morrer",
            "Complete no difficulty máxima"
        ]
    }
];

// ============================================================
// Variáveis de estado
// ============================================================
let selectedGameId = null;
let lastChallengeIndex = -1;

// ============================================================
// Elementos do DOM
// ============================================================
const gamesListEl = document.getElementById('games-list');
const generateBtnEl = document.getElementById('generate-btn');
const challengeTextEl = document.getElementById('challenge-text');
const errorMessageEl = document.getElementById('error-message');

// ============================================================
// Função para renderizar lista de jogos
// ============================================================
function renderGames() {
    gamesListEl.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.dataset.gameId = game.id;
        gameCard.innerHTML = `
            <span class="game-icon">${game.icon}</span>
            <span class="game-name">${game.name}</span>
        `;
        
        gameCard.addEventListener('click', () => selectGame(game.id));
        
        gamesListEl.appendChild(gameCard);
    });
}

// ============================================================
// Função para selecionar jogo
// ============================================================
function selectGame(gameId) {
    const allCards = document.querySelectorAll('.game-card');
    allCards.forEach(card => card.classList.remove('selected'));
    
    const selectedCard = document.querySelector(`[data-game-id="${gameId}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }
    
    selectedGameId = gameId;
    hideError();
}

// ============================================================
// Função para gerar desafio
// ============================================================
function generateChallenge() {
    if (!selectedGameId) {
        showError('Selecione um jogo primeiro!');
        return;
    }
    
    const game = games.find(g => g.id === selectedGameId);
    
    if (!game || game.challenges.length === 0) {
        showError('Nenhum desafio disponível para este jogo.');
        return;
    }
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * game.challenges.length);
    } while (game.challenges.length > 1 && randomIndex === lastChallengeIndex);
    
    lastChallengeIndex = randomIndex;
    
    challengeTextEl.textContent = game.challenges[randomIndex];
    challengeTextEl.classList.add('challenge-visible');
    hideError();
}

// ============================================================
// Funções auxiliares
// ============================================================
function showError(message) {
    errorMessageEl.textContent = message;
    errorMessageEl.classList.remove('hidden');
}

function hideError() {
    errorMessageEl.classList.add('hidden');
    errorMessageEl.textContent = '';
}

// ============================================================
// Event Listeners
// ============================================================
generateBtnEl.addEventListener('click', generateChallenge);
document.addEventListener('DOMContentLoaded', renderGames);