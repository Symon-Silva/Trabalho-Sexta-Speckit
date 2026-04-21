# Data Model: Game Challenge Generator

## Entities

### Game
- `id` (string): Identificador único do jogo
- `name` (string): Nome do jogo exibido na interface
- `challenges` (array): Lista de desafios associados

### Challenge
- `id` (string): Identificador único do desafio
- `text` (string): Descrição do desafio

## Relationships

```
Game 1 --> * Challenge
```

## State transitions

- **Initial**: No game selected, no challenge displayed
- **Game Selected**: User clicks on a game item → game marked as selected
- **Challenge Generated**: User clicks generate button → random challenge from selected game's list displayed

## Validation Rules

- FR-001: Lista de jogos deve ter pelo menos 3 jogos
- FR-007: Cada jogo deve ter pelo menos 5 desafios
- Seleção de jogo é obrigatória antes de gerar desafio (FR-006)

## Data de Exemplo

```javascript
const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    challenges: [
      "Construa uma casa sem usar madeira",
      "Sobreviva 10 noites sem construir abrigo",
      "Derrote o Ender Dragon sem equipamento de diamante",
      // ...
    ]
  },
  // ... mais jogos
];
```