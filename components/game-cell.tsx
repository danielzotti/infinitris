'use client';

import { Player } from '@/lib/game-logic';
import { cn } from '@/lib/utils';

interface GameCellProps {
    value: Player;
    onClick: () => void;
    moveNumber: number | null;
    isWinningCell: boolean;
    isDisabled: boolean;
}

export function GameCell({ value, onClick, moveNumber, isWinningCell, isDisabled }: GameCellProps) {
    return (
        <button
            onClick={onClick}
            disabled={isDisabled || value !== null}
            className={cn(
                'relative aspect-square w-full rounded-xl transition-all duration-300',
                'flex items-center justify-center',
                'bg-white/5 backdrop-blur-sm border border-white/10',
                'hover:bg-white/10 hover:border-white/20 hover:scale-105',
                'disabled:hover:scale-100 disabled:cursor-not-allowed',
                'group',
                isWinningCell && 'bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border-emerald-400/50 animate-pulse',
                value && 'animate-scale-in'
            )}
        >
            {value && (
                <div className="relative">
                    <span
                        className={cn(
                            'text-6xl font-bold transition-all duration-300',
                            value === 'X' ? 'text-blue-400' : 'text-pink-400',
                            'drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]',
                            value === 'O' && 'drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]'
                        )}
                    >
                        {value}
                    </span>
                    {moveNumber && (
                        <span
                            className={cn(
                                'absolute -top-2 -right-2 text-xs font-bold',
                                'w-5 h-5 rounded-full flex items-center justify-center',
                                'bg-gradient-to-br from-white/20 to-white/10',
                                'border border-white/30',
                                value === 'X' ? 'text-blue-300' : 'text-pink-300'
                            )}
                        >
                            {moveNumber}
                        </span>
                    )}
                </div>
            )}
            {!value && !isDisabled && (
                <div className="opacity-0 group-hover:opacity-30 transition-opacity duration-200 text-4xl text-white/50">
                    +
                </div>
            )}
        </button>
    );
}
