'use client';

import { Player, Move } from '@/lib/game-logic';
import { cn } from '@/lib/utils';

interface GameStatusProps {
    currentPlayer: Player;
    winner: Player;
    playerXMoves: Move[];
    playerOMoves: Move[];
    gameMode: string;
}

export function GameStatus({ currentPlayer, winner, playerXMoves, playerOMoves, gameMode }: GameStatusProps) {
    const isVsComputer = gameMode === 'vs-computer';

    return (
        <div className="w-full max-w-md mx-auto mb-6 space-y-4">
            {/* Status Message */}
            <div className="text-center">
                {winner ? (
                    <div className="space-y-2 animate-scale-in">
                        <div className="text-5xl">🎉</div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            {winner === 'X' ? (isVsComputer ? 'You Win!' : 'Player X Wins!') : (isVsComputer ? 'Computer Wins!' : 'Player O Wins!')}
                        </h2>
                    </div>
                ) : (
                    <div className="space-y-2">
                        <p className="text-sm text-white/60 uppercase tracking-wider">Current Turn</p>
                        <div className="flex items-center justify-center gap-3">
                            <span
                                className={cn(
                                    'text-4xl font-bold transition-all duration-300',
                                    currentPlayer === 'X' ? 'text-blue-400 scale-110' : 'text-blue-400/30 scale-90'
                                )}
                            >
                                X
                            </span>
                            <span className="text-white/40">vs</span>
                            <span
                                className={cn(
                                    'text-4xl font-bold transition-all duration-300',
                                    currentPlayer === 'O' ? 'text-pink-400 scale-110' : 'text-pink-400/30 scale-90'
                                )}
                            >
                                O
                            </span>
                        </div>
                        <p className="text-lg text-white/80">
                            {currentPlayer === 'X'
                                ? (isVsComputer ? 'Your turn' : "Player X's turn")
                                : (isVsComputer ? "Computer's turn..." : "Player O's turn")}
                        </p>
                    </div>
                )}
            </div>

            {/* Move Counters */}
            <div className="flex justify-center gap-6">
                <div className="text-center px-6 py-3 rounded-lg bg-blue-500/10 border border-blue-400/20">
                    <p className="text-xs text-blue-300/70 mb-1">
                        {isVsComputer ? 'YOU' : 'PLAYER X'}
                    </p>
                    <p className="text-2xl font-bold text-blue-400">
                        {playerXMoves.length}/3
                    </p>
                </div>
                <div className="text-center px-6 py-3 rounded-lg bg-pink-500/10 border border-pink-400/20">
                    <p className="text-xs text-pink-300/70 mb-1">
                        {isVsComputer ? 'COMPUTER' : 'PLAYER O'}
                    </p>
                    <p className="text-2xl font-bold text-pink-400">
                        {playerOMoves.length}/3
                    </p>
                </div>
            </div>
        </div>
    );
}
