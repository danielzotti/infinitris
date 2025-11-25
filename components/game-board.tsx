'use client';

import { Board, Player, Move } from '@/lib/game-logic';
import { GameCell } from './game-cell';

interface GameBoardProps {
    board: Board;
    onCellClick: (position: number) => void;
    playerXMoves: Move[];
    playerOMoves: Move[];
    winningLine: number[] | null;
    isDisabled: boolean;
}

export function GameBoard({
    board,
    onCellClick,
    playerXMoves,
    playerOMoves,
    winningLine,
    isDisabled,
}: GameBoardProps) {
    const getMoveNumber = (position: number, player: Player): number | null => {
        if (player === 'X') {
            const move = playerXMoves.find(m => m.position === position);
            return move?.moveNumber || null;
        } else if (player === 'O') {
            const move = playerOMoves.find(m => m.position === position);
            return move?.moveNumber || null;
        }
        return null;
    };

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <div className="grid grid-cols-3 gap-3">
                {board.map((cell, index) => (
                    <GameCell
                        key={index}
                        value={cell}
                        onClick={() => onCellClick(index)}
                        moveNumber={getMoveNumber(index, cell)}
                        isWinningCell={winningLine?.includes(index) || false}
                        isDisabled={isDisabled}
                    />
                ))}
            </div>
        </div>
    );
}
