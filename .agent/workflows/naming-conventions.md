---
description: Convenzioni di naming per file e codice del progetto
---

# Convenzioni di Naming - Infinitris

## File Naming (kebab-case obbligatorio)

Tutti i file devono utilizzare **kebab-case** (minuscolo con trattini):

### Componenti React
- ✅ Corretto: `game-board.tsx`, `mode-selector.tsx`, `game-cell.tsx`
- ❌ Sbagliato: `GameBoard.tsx`, `ModeSelector.tsx`, `gameBoard.tsx`

### Hook Custom
- ✅ Corretto: `use-infinite-tic-tac-toe.ts`, `use-game-state.ts`
- ❌ Sbagliato: `useInfiniteTicTacToe.ts`, `useGameState.ts`

### Utility/Logic Files
- ✅ Corretto: `game-logic.ts`, `utils.ts`, `api-client.ts`
- ❌ Sbagliato: `gameLogic.ts`, `apiClient.ts`

### Pages Next.js
- ✅ Corretto: `page.tsx`, `layout.tsx`, `not-found.tsx`
- Next.js richiede questi nomi specifici per le route

### Stili
- ✅ Corretto: `globals.css`, `theme.css`

### Directory
- ✅ Corretto: `components`, `hooks`, `lib`, `ui`
- Tutte minuscole, senza trattini se sono nomi singoli

## Component & Function Naming

### Componenti (export)
- Usare PascalCase per i nomi dei componenti nel codice
- Il file è kebab-case, ma l'export è PascalCase
```typescript
// File: game-board.tsx
export function GameBoard() { ... }
```

### Function Naming
- camelCase per funzioni e metodi
```typescript
// File: game-logic.ts
export function checkWinner() { ... }
export function getBestMove() { ... }
```

### Props Interfaces
- PascalCase + suffisso 'Props'
```typescript
interface GameCellProps {
  value: Player;
  onClick: () => void;
}
```

### Event Handlers
- Prefisso 'handle' o 'on'
```typescript
const handleClick = () => { ... }
const onCellClick = (index: number) => { ... }
```

### Costanti
- UPPER_SNAKE_CASE per costanti globali
```typescript
const WINNING_COMBINATIONS = [[0, 1, 2], ...];
const MAX_MOVES_PER_PLAYER = 3;
```

## Import Statements

Gli import devono riflettere il nome del file kebab-case:

```typescript
// ✅ Corretto
import { GameBoard } from '@/components/game-board';
import { useInfiniteTicTacToe } from '@/hooks/use-infinite-tic-tac-toe';
import { checkWinner } from '@/lib/game-logic';

// ❌ Sbagliato  
import { GameBoard } from '@/components/GameBoard';
import { useInfiniteTicTacToe } from '@/hooks/useInfiniteTicTacToe';
```

## Riepilogo

| Tipo | Convenzione | Esempio |
|------|-------------|---------|
| File componenti | kebab-case.tsx | `game-board.tsx` |
| File hook | kebab-case.ts | `use-game-state.ts` |
| File utility | kebab-case.ts | `game-logic.ts` |
| Export componenti | PascalCase | `GameBoard` |
| Funzioni | camelCase | `checkWinner` |
| Props interface | PascalCase + Props | `GameBoardProps` |
| Costanti | UPPER_SNAKE_CASE | `MAX_MOVES` |
| Directory | lowercase | `components`, `lib` |
