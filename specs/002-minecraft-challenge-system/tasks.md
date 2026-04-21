# Tasks: Sistema de Dificuldade para Minecraft

**Feature**: Sistema de Dificuldade para Minecraft
**Plan**: specs/002-minecraft-challenge-system/plan.md

## Phase 1: Setup

- [x] T001 Backup dos arquivos existentes (index.html, style.css, app.js)

## Phase 2: UI Update

**Goal**: Atualizar interface com botões de dificuldade
**Independent Test**: Abrir página e verificar botões de dificuldade exibidos

- [x] T002 [P] [US1] Atualizar index.html com seção de botões de dificuldade em src/index.html
- [x] T003 [P] [US1] Remover lista de jogos múltiplos e focar em Minecraft em src/index.html
- [x] T004 [P] [US2] Adicionar estilos para botões de dificuldade em src/styles/style.css
- [x] T005 [US3] Adicionar estilos para botão selecionado em src/styles/style.css

## Phase 3: Logic Update

**Goal**: Implementar lógica de dificuldade e geração dinâmica
**Independent Test**: Selecionar dificuldade e gerar desafio dinâmico

- [x] T006 [P] [US2] Definir dados de componentes por dificuldade em src/scripts/app.js
- [x] T007 [P] [US2] Implementar função selectDifficulty() em src/scripts/app.js
- [x] T008 [P] [US3] Implementar função generateDynamicChallenge() em src/scripts/app.js
- [x] T009 [US3] Implementar função combineComponents() em src/scripts/app.js
- [x] T010 [US3] Implementar geração por nível (easy/medium/hard) em src/scripts/app.js

## Phase 4: Fallback & Polish

**Goal**: Manter desafios pré-definidos e tratar edge cases
**Independent Test**: Verificar que desafios pré-definidos ainda funcionam

- [x] T011 [P] [US4] Manter array de desafios pré-definidos de Minecraft em src/scripts/app.js
- [x] T012 [P] Adicionar mensagem de erro se nenhuma dificuldade selecionada em src/scripts/app.js
- [x] T013 [US4] Adicionar toggle para modo "Desafios Rápidos" vs "Desafios Dinâmicos" em src/scripts/app.js

## Dependencies

```
T001 (Setup)
   ↓
T002-T005 (UI Update)
   ↓
T006-T010 (Logic Update)
   ↓
T011-T013 (Polish)
```

## Parallel Opportunities

- T002, T003, T004, T006, T007 podem rodar em paralelo
- T008, T009 podem rodar em paralelo

## Summary

| Métrica | Valor |
|---------|-------|
| Total de tarefas | 13 |
| Phase 1 (Setup) | 1 |
| Phase 2 (UI) | 4 |
| Phase 3 (Logic) | 5 |
| Phase 4 (Polish) | 3 |
| Oportunidades paralelas | 3 |

## Suggested MVP Scope

**Tarefas T001-T010**: Sistema completo de dificuldade e geração dinâmica.
Este conjunto implementa US1, US2 e US3 - as funcionalidades principais.