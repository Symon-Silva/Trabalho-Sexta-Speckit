# Data Model: Adicionar Novos Desafios para Jogos

## Entities

### Jogo

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | string | Identificador único (ex: "minecraft") |
| name | string | Nome de exibição (ex: "Minecraft") |
| icon | string | Emoji do jogo (ex: "⛏️") |
| challenges | string[] | Lista de desafios pré-definidos |

### Desafio

| Campo | Tipo | Descrição |
|-------|------|-----------|
| descricao | string | Texto do desafio exibido ao usuário |

## Estrutura de Dados

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
            // ... mais 13 desafios
        ]
    },
    // ... outros jogos
];
```

## Relacionamentos

- Um Jogo tem múltiplos Desafios (relação 1:N)
- Desafio pertence a um único Jogo
- A seleção de jogo determina quais desafios podem ser exibidos

## Validações

- Cada jogo deve ter pelo menos 1 desafio
- Desafios não podem estar vazios ou apenas espaços
- ID do jogo deve ser único