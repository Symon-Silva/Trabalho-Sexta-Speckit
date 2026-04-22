# Tasks: Adicionar Novos Desafios para Jogos

**Feature**: Adicionar novos desafios pré-definidos para Minecraft, GTA San Andreas, Resident Evil 4 e FIFA  
**Branch**: `004-add-new-challenges`  
**Plan**: [plan.md](plan.md)

## Implementation Strategy

**MVP Scope**: User Story 1 (Minecraft) - Adicionar desafios para Minecraft primeiro, pois é o jogo principal.

**Abordagem**: Adicionar dados incrementalmente - cada user story é independente e pode ser testado separadamente.

---

## Phase 1: Setup

- [X] T001 Revisar código existente em src/scripts/app.js para entender estrutura atual

---

## Phase 2: Foundational

- [X] T002 [P] Criar backup do arquivo src/scripts/app.js antes das modificações

---

## Phase 3: User Story 1 - Adicionar desafios para Minecraft (Priority: P1)

**Goal**: Adicionar 5 novos desafios para Minecraft à lista existente  
**Independent Test**: Selecionar Minecraft e verificar que novos desafios aparecem na rotação

- [X] T003 [P] [US1] Adicionar desafios novos para Minecraft em src/scripts/app.js:
  - "Derrotar uma Raid nível 5 sem morrer e sem usar poções"
  - "Zerar o jogo sem atacar"
  - "Achar uma maçã dourada encantada"
  - "Construir uma farm de ferro"
  - "Fazer um sistema de loop infinito com redstone"

- [X] T004 [US1] Testar se desafios Minecraft aparecem corretamente

---

## Phase 4: User Story 2 - Adicionar desafios para GTA San Andreas (Priority: P1)

**Goal**: Adicionar 5 novos desafios para GTA San Andreas à lista existente  
**Independent Test**: Selecionar GTA e verificar que novos desafios aparecem na rotação

- [X] T005 [P] [US2] Adicionar desafios novos para GTA San Andreas em src/scripts/app.js:
  - "Atravessar o mapa inteiro sem morrer"
  - "Sobreviver por 10 minutos com 6 estrelas"
  - "Pegar a Minigun no início do jogo"
  - "Vencer uma corrida"
  - "Chegar no norte do mapa"

- [X] T006 [US2] Testar se desafios GTA aparecem corretamente

---

## Phase 5: User Story 3 - Adicionar desafios para Resident Evil 4 (Priority: P1)

**Goal**: Adicionar 5 novos desafios para RE4 à lista existente  
**Independent Test**: Selecionar RE4 e verificar que novos desafios aparecem na rotação

- [X] T007 [P] [US3] Adicionar desafios novos para Resident Evil 4 em src/scripts/app.js:
  - "Zerar só com pistolas"
  - "Zerar em menos de 3 horas"
  - "Derrotar o Garrador só com granadas"
  - "Matar o Verdugo usando apenas faca"
  - "Passar do Capítulo 1 sem tomar dano"

- [X] T008 [US3] Testar se desafios RE4 aparecem corretamente

---

## Phase 6: User Story 4 - Adicionar desafios para FIFA (Priority: P1)

**Goal**: Adicionar 5 novos desafios para FIFA à lista existente  
**Independent Test**: Selecionar FIFA e verificar que novos desafios aparecem na rotação

- [X] T009 [P] [US4] Adicionar desafios novos para FIFA em src/scripts/app.js:
  - "Virar um jogo com desvantagem de 3 goles"
  - "Vencer com 2 jogadores expulsos"
  - "Marcar 10.000 pontos em jogo de habilidade de finalização"
  - "Ganhar com o CR7 no gol"
  - "Vencer sem chutar (apenas conduzindo a bola até o gol)"

- [X] T010 [US4] Testar se desafios FIFA aparecem corretamente

---

## Phase 7: User Story 5 - Evitar repetição de desafios (Priority: P2)

**Goal**: Garantir que o sistema não repete desafios consecutivamente  
**Independent Test**: Gerar múltiplos desafios consecutivos e verificar que não se repetem

- [X] T011 [P] [US5] Verificar que a lógica de evitar repetição funciona com a lista expandida em src/scripts/app.js

- [X] T012 [US5] Testar gerando 10+ desafios consecutivos para cada jogo

---

## Phase 8: Polish & Cross-Cutting Concerns

- [X] T013 Verificar que todos os 4 jogos agora têm 15 desafios cada (~10 existentes + 5 novos)
- [X] T014 Validar que descrições dos desafios estão claras e sem erros de digitação
- [X] T015 Testar interface completa no navegador

---

## Dependencies

```
T001 (Setup)
   └─ T002 (Foundational)
       ├─ T003-T004 (US1: Minecraft)
       ├─ T005-T006 (US2: GTA)
       ├─ T007-T008 (US3: RE4)
       ├─ T009-T010 (US4: FIFA)
       └─ T011-T012 (US5: Não Repetir)
           └─ T013-T015 (Polish)
```

**Nota**: User Stories 1-5 podem ser executados em paralelo já que modificam diferentes seções do array de jogos.

---

## Parallel Execution Examples

1. **Executar Minecraft + GTA em paralelo**:
   - T003 (Minecraft) com T005 (GTA) podem rodar em paralelo

2. **Executar RE4 + FIFA em paralelo**:
   - T007 (RE4) com T009 (FIFA) podem rodar em paralelo

3. **Testes em paralelo**:
   - T004 (teste Minecraft), T006 (teste GTA), T008 (teste RE4), T010 (teste FIFA) podem rodar em paralelo

---

## Summary

| Métrica | Valor |
|---------|-------|
| Total de tarefas | 15 |
| Tarefas concluídas | 15 |
| Tarefas paralelizáveis | 8 |
| User Stories | 5 |
| Escopo MVP | User Story 1 (Minecraft) |

**Status**: ✓ IMPLEMENTAÇÃO CONCLUÍDA