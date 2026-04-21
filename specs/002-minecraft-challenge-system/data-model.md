# Data Model: Sistema de Dificuldade para Minecraft

## Entities

### Dificuldade
- `id` (string): Identificador (easy, medium, hard)
- `name` (string): Nome para exibição (Fácil, Médio, Difícil)
- `components` (object): Componentes específicos por dificuldade

### ComponenteDesafio
- `objetivos` (array): Ações principais do desafio
- `restricoes` (array): Limitações ou constraints
- `condicoes` (array): Condições adicionais

### DesafioGerado
- `text` (string): Texto final do desafio
- `difficulty` (string): Dificuldade usada
- `components` (array): Componentes usados na geração

## Relationships

```
Dificuldade 1 --> * ComponenteDesafio
ComponenteDesafio --> DesafioGerado
```

## State Transitions

- **Initial**: Nenhuma dificuldade selecionada
- **Difficulty Selected**: Usuário clica em botão de dificuldade
- **Challenge Generated**: Desafio gerado e exibido

## Data Structure (JavaScript)

```javascript
const difficultyData = {
  easy: {
    objetivos: ["Construir...", "Explorar...", "Encontrar..."],
    restricoes: ["sem usar...", "apenas com..."],
    condicoes: []
  },
  medium: {
    objetivos: [...],
    restricoes: [...],
    condicoes: ["em menos de...", "dentro de..."]
  },
  hard: {
    objetivos: [...],
    restricoes: [...],
    condicoes: [...]
  }
};
```