export type Player = 'X' | 'O' | null;
export type Board = Player[];
export type Position = number;

export interface Move {
  position: Position;
  player: Player;
  moveNumber: number; // 1, 2, or 3 (order within player's moves)
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal top-left to bottom-right
  [2, 4, 6], // Diagonal top-right to bottom-left
];

/**
 * Check if there's a winner on the current board
 * Returns the winning player and winning positions, or null if no winner
 */
export function checkWinner(board: Board): { winner: Player; winningLine: number[] } | null {
  for (const combination of WINNING_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winningLine: combination };
    }
  }
  return null;
}

/**
 * Get all available (empty) cells on the board
 */
export function getAvailableCells(board: Board): Position[] {
  return board.reduce((acc, cell, index) => {
    if (cell === null) {
      acc.push(index);
    }
    return acc;
  }, [] as Position[]);
}

/**
 * Get the best move for the AI player
 * Strategy:
 * 1. Try to win if possible
 * 2. Block opponent from winning
 * 3. Take center if available
 * 4. Take a corner
 * 5. Take any available cell
 */
export function getBestMove(board: Board, aiPlayer: Player): Position {
  const opponent = aiPlayer === 'X' ? 'O' : 'X';
  const availableCells = getAvailableCells(board);

  // Strategy 1: Try to win
  for (const cell of availableCells) {
    const testBoard = [...board];
    testBoard[cell] = aiPlayer;
    if (checkWinner(testBoard)?.winner === aiPlayer) {
      return cell;
    }
  }

  // Strategy 2: Block opponent from winning
  for (const cell of availableCells) {
    const testBoard = [...board];
    testBoard[cell] = opponent;
    if (checkWinner(testBoard)?.winner === opponent) {
      return cell;
    }
  }

  // Strategy 3: Take center if available
  if (availableCells.includes(4)) {
    return 4;
  }

  // Strategy 4: Take a corner
  const corners = [0, 2, 6, 8];
  const availableCorners = corners.filter(corner => availableCells.includes(corner));
  if (availableCorners.length > 0) {
    return availableCorners[Math.floor(Math.random() * availableCorners.length)];
  }

  // Strategy 5: Take any available cell
  return availableCells[Math.floor(Math.random() * availableCells.length)];
}
