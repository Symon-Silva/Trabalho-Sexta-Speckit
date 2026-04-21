# Research: Sistema de Dificuldade para Minecraft

**Date**: 2026-04-21
**Feature**: Sistema de Dificuldade para Minecraft

## Decisions

### Sistema de Dificuldade
- **Decision**: Botões de dificuldade (fácil, médio, difícil)
- **Rationale**: Interface simples e intuitiva, clara diferenciação visual
- **Alternatives considered**: Dropdown - rejeitado por ser menos direto

### Geração Dinâmica
- **Decision**: Combinação de componentes (objetivo + restrição + condição)
- **Rationale**: Proporciona maior variedade de desafios
- **Alternatives considered**: IA/LLM - não disponível em vanilla JS

### Componentes de Desafio
- **Decision**: Arrays separados por dificuldade
- **Rationale**: Fácil manutenção e extensão
- **Alternatives considered**: JSON externo - não necessário para v1

## Estrutura de Desafios

### Formato de Geração
```
[Objetivo] + [Restrição] + [Condição]
Exemplo: "Construa uma casa" + "sem usar madeira" + "em menos de 30 minutos"
```

### Componentes por Dificuldade
- **Fácil**: 1-2 componentes (objetivo + restrição simples)
- **Médio**: 2-3 componentes (objetivo + restrições + condição)
- **Difícil**: 3+ componentes (objetivos complexos + múltiplas restrições)