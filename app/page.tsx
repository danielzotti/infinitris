'use client';

import { useInfiniteTicTacToe } from '@/hooks/use-infinite-tic-tac-toe';
import { ModeSelector } from '@/components/mode-selector';
import { GameBoard } from '@/components/game-board';
import { GameStatus } from '@/components/game-status';
import { GameControls } from '@/components/game-controls';

export default function Home() {
  const {
    board,
    currentPlayer,
    playerXMoves,
    playerOMoves,
    winner,
    winningLine,
    gameMode,
    makeMove,
    resetGame,
    changeMode,
    selectMode,
  } = useInfiniteTicTacToe();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {gameMode === 'select' ? (
          <ModeSelector onSelectMode={selectMode} />
        ) : (
          <div className="space-y-6">
            <GameStatus
              currentPlayer={currentPlayer}
              winner={winner}
              playerXMoves={playerXMoves}
              playerOMoves={playerOMoves}
              gameMode={gameMode}
            />
            <GameBoard
              board={board}
              onCellClick={makeMove}
              playerXMoves={playerXMoves}
              playerOMoves={playerOMoves}
              winningLine={winningLine}
              isDisabled={winner !== null}
            />
            <GameControls onNewGame={resetGame} onChangeMode={changeMode} />
          </div>
        )}
      </div>
    </div>
  );
}
