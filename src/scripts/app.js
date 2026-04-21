// ============================================================
// Dados dos jogos e desafios pré-definidos
// ============================================================
const games = [
    {
        id: "minecraft",
        name: "Minecraft",
        challenges: [
            "Construa uma casa sem usar madeira",
            "Sobreviva 10 noites sem construir abrigo",
            "Derrote o Ender Dragon sem equipamento de diamante",
            "Crie uma fazenda automática de trigo",
            "Explore 3 biomas diferentes em um dia",
            "Encontre e domesticar um lobo",
            "Crie um sistema de trilho minecart funcional"
        ]
    },
    {
        id: "fifa",
        name: "FIFA",
        challenges: [
            "Ganhe uma partida na dificuldade Lendário",
            "Faça um hat-trick com um time de bronze",
            "Ganhe 5 partidas seguidas",
            "Marque 5 gols de falta em uma partida",
            "Vença sem fazer nenhuma substituição",
            "Ganhe usando apenas jogadores de 3 estrelas"
        ]
    },
    {
        id: "gta",
        name: "GTA San Andreas",
        challenges: [
            "Complete a missão final sem morrer",
            "Explore todo o mapa a pé",
            "Colete todos os oyster tokens",
            "Faça 100% de conclusão do jogo",
            "Complete todas as missões de gangue",
            "Adquira todas as propriedades disponíveis"
        ]
    },
    {
        id: "resident-evil",
        name: "Resident Evil 4",
        challenges: [
            "Complete o jogo sem morrer",
            "Obtenha a classificação S+ no Profissional",
            "Acabe com todos os Ganados em uma sala",
            "Colete todos os宝物 raros",
            "Derrote o Krauser com apenas uma vida",
            "Complete no难度 máxima"
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
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        gameItem.dataset.gameId = game.id;
        gameItem.textContent = game.name;
        
        gameItem.addEventListener('click', () => selectGame(game.id));
        
        gamesListEl.appendChild(gameItem);
    });
}

// ============================================================
// Função para selecionar jogo
// ============================================================
function selectGame(gameId) {
    const allGames = document.querySelectorAll('.game-item');
    allGames.forEach(item => item.classList.remove('selected'));
    
    const selectedItem = document.querySelector(`[data-game-id="${gameId}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    selectedGameId = gameId;
    hideError();
}

// ============================================================
// Função para gerar desafio
// ============================================================
function generateChallenge() {
    if (!selectedGameId) {
        showError('Por favor, selecione um jogo primeiro!');
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