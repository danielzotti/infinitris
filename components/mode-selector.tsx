'use client';

import { Card } from '@/components/ui/card';
import { GameMode } from '@/hooks/use-infinite-tic-tac-toe';

interface ModeSelectorProps {
    onSelectMode: (mode: GameMode) => void;
}

export function ModeSelector({ onSelectMode }: ModeSelectorProps) {
    return (
        <div className="w-full max-w-2xl mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Infinite Tic-Tac-Toe
                </h1>
                <p className="text-lg text-white/70 max-w-md mx-auto">
                    A strategic twist on the classic: when you make your 4th move, the first one disappears!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* 2 Players Mode */}
                <Card
                    onClick={() => onSelectMode('2-player')}
                    className="group cursor-pointer p-8 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                >
                    <div className="text-center space-y-4">
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            👥
                        </div>
                        <h3 className="text-2xl font-bold text-blue-400">2 Players</h3>
                        <p className="text-white/60">
                            Challenge a friend in local mode. Take turns on the same device.
                        </p>
                        <div className="pt-4">
                            <div className="inline-flex items-center gap-2 text-blue-400/80 text-sm">
                                <span>Click to start</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* vs Computer Mode */}
                <Card
                    onClick={() => onSelectMode('vs-computer')}
                    className="group cursor-pointer p-8 bg-gradient-to-br from-pink-500/10 to-pink-600/5 border-pink-400/20 hover:border-pink-400/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
                >
                    <div className="text-center space-y-4">
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                            🤖
                        </div>
                        <h3 className="text-2xl font-bold text-pink-400">vs Computer</h3>
                        <p className="text-white/60">
                            Test your skills against a strategic artificial intelligence.
                        </p>
                        <div className="pt-4">
                            <div className="inline-flex items-center gap-2 text-pink-400/80 text-sm">
                                <span>Click to start</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>

            {/* Game Rules */}
            <div className="mt-12 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                <h4 className="text-lg font-bold text-white/90 mb-3">📜 Game Rules</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>Each player can have <strong className="text-white/90">a maximum of 3 moves</strong> on the grid</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>When you make your <strong className="text-white/90">4th move</strong>, your <strong className="text-white/90">first move disappears</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>Win by aligning <strong className="text-white/90">3 symbols</strong> horizontally, vertically, or diagonally</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-emerald-400 mt-0.5">✓</span>
                        <span>The game continues <strong className="text-white/90">indefinitely</strong> until someone wins!</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
