# Quickstart: Adicionar Novos Desafios para Jogos

## Como Implementar

### 1. Editar src/scripts/app.js

Adicionar os novos desafios aos arrays existentes de cada jogo.

### 2. Desafios a Adicionar

**Minecraft** (5 novos):
- Derrotar uma Raid nível 5 sem morrer e sem usar poções
- Zerar o jogo sem atacar
- Achar uma maçã dourada encantada
- Construir uma farm de ferro
- Fazer um sistema de loop infinito com redstone

**GTA San Andreas** (5 novos):
- Atravessar o mapa inteiro sem morrer
- Sobreviver por 10 minutos com 6 estrelas
- Pegar a Minigun no início do jogo
- Vencer uma corrida
- Chegar no norte do mapa

**Resident Evil 4** (5 novos):
- Zerar só com pistolas
- Zerar em menos de 3 horas
- Derrotar o Garrador só com granadas
- Matar o Verdugo usando apenas faca
- Passar do Capítulo 1 sem tomar dano

**FIFA** (5 novos):
- Virar um jogo com desvantagem de 3 gols
- Vencer com 2 jogadores expulsos
- Marcar 10.000 pontos em jogo de habilidade de finalização
- Ganhar com o CR7 no gol
- Vencer sem chutar (apenas conduzindo a bola até o gol)

### 3. Testar

Abrir src/index.html no navegador e verificar que os desafios aparecem corretamente para cada jogo.

## Estrutura do Código

```javascript
const games = [
    {
        id: "minecraft",
        name: "Minecraft",
        icon: "⛏️",
        challenges: [
            // Desafios existentes + novos (15 total)
            "Construa uma casa usando apenas terra e pedra",
            "Sobreviva 10 noites sem construir nenhum abrigo",
            "Encontre e domesticar pelo menos 3 lobos",
            "Crie uma fazenda automática de trigo",
            "Explore uma mina até encontrar diamantes",
            "Faça uma tabela de encantamentos",
            "Derrote o Wither sem armadura de diamante",
            "Construa uma torre de 50 blocos de altura",
            "Colete 10 obras de arte para o museus",
            "Crie um redstone que funcione",
            // Novos desafios Minecraft:
            "Derrotar uma Raid nível 5 sem morrer e sem usar poções",
            "Zerar o jogo sem atacar",
            "Achar uma maçã dourada encantada",
            "Construir uma farm de ferro",
            "Fazer um sistema de loop infinito com redstone"
        ]
    },
    // ... outros jogos
];
```