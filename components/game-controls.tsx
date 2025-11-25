'use client';

import { Button } from '@/components/ui/button';

interface GameControlsProps {
    onNewGame: () => void;
    onChangeMode: () => void;
}

export function GameControls({ onNewGame, onChangeMode }: GameControlsProps) {
    return (
        <div className="w-full max-w-md mx-auto mt-6 flex gap-4">
            <Button
                onClick={onNewGame}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
            >
                🔄 New
            </Button>
            <Button
                onClick={onChangeMode}
                variant="outline"
                className="flex-1 bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
            >
                ⚙️ Mode
            </Button>
        </div>
    );
}
