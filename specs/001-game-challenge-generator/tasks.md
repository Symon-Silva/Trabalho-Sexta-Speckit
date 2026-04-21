# Tasks: Game Challenge Generator

**Feature**: Game Challenge Generator
**Plan**: specs/001-game-challenge-generator/plan.md

## Phase 1: Setup

- [x] T001 Criar estrutura de diretórios src/styles/ e src/scripts/

## Phase 2: Core Functionality (US1 + US3)

**Goal**: Allow users to view games and generate random challenges
**Independent Test**: Open index.html, verify games are displayed and clicking generate shows a challenge

- [x] T002 [P] [US1] Create index.html with basic HTML structure in src/index.html
- [x] T003 [P] [US1] Define games data array with 3+ games and 5+ challenges each in src/scripts/app.js
- [x] T004 [P] [US3] Implement generateChallenge() function with Math.random() in src/scripts/app.js
- [x] T005 [US3] Render challenge text in DOM when button is clicked in src/scripts/app.js
- [x] T006 Add button "Gerar Desafio" in src/index.html

## Phase 3: Game Selection (US2)

**Goal**: Allow users to select a game from the list
**Independent Test**: Click on a game item and verify visual selection state

- [x] T007 [P] Add click event listeners to game items in src/scripts/app.js
- [x] T008 Implement visual highlight for selected game with CSS class in src/styles/style.css
- [x] T009 Add error message display when no game is selected in src/scripts/app.js

## Phase 4: Polish & Edge Cases

**Goal**: Handle edge cases and improve UX

- [x] T010 Add responsive CSS styles for mobile and desktop in src/styles/style.css
- [x] T011 Ensure generate button handles rapid clicks correctly in src/scripts/app.js
- [x] T012 Add Portuguese translations for all UI text in src/index.html

## Dependencies

```
T001 (Setup)
   ↓
T002-T006 (Core: US1 + US3)
   ↓
T007-T009 (Selection: US2)
   ↓
T010-T012 (Polish)
```

## Parallel Opportunities

- T002, T003, T004 can run in parallel (different files)
- T007, T008 can run in parallel

## Summary

| Métrica | Valor |
|---------|-------|
| Total de tarefas | 12 |
| Tarefas por fase | Setup: 1, Core: 5, Selection: 3, Polish: 3 |
| Oportunidades paralelas | 2 |

## Suggested MVP Scope

**Tarefas T001-T006**: Funcionalidade core - exibir jogos e gerar desafio aleatório.
Este conjunto permite testar a experiência completa do usuário: abrir a página, ver a lista de jogos, e gerar um desafio.