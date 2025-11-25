'use client';

import { useState, useCallback, useEffect } from 'react';
import { Player, Board, Move, checkWinner, getAvailableCells, getBestMove } from '@/lib/game-logic';

export type GameMode = 'select' | '2-player' | 'vs-computer';

interface GameState {
    board: Board;
    currentPlayer: Player;
    playerXMoves: Move[];
    playerOMoves: Move[];
    winner: Player;
    winningLine: number[] | null;
    gameMode: GameMode;
}

const initialBoard: Board = Array(9).fill(null);

export function useInfiniteTicTacToe() {
    const [gameState, setGameState] = useState<GameState>({
        board: initialBoard,
        currentPlayer: 'X',
        playerXMoves: [],
        playerOMoves: [],
        winner: null,
        winningLine: null,
        gameMode: 'select',
    });

    const resetGame = useCallback(() => {
        setGameState({
            board: initialBoard,
            currentPlayer: 'X',
            playerXMoves: [],
            playerOMoves: [],
            winner: null,
            winningLine: null,
            gameMode: gameState.gameMode,
        });
    }, [gameState.gameMode]);

    const changeMode = useCallback(() => {
        setGameState({
            board: initialBoard,
            currentPlayer: 'X',
            playerXMoves: [],
            playerOMoves: [],
            winner: null,
            winningLine: null,
            gameMode: 'select',
        });
    }, []);

    const selectMode = useCallback((mode: GameMode) => {
        setGameState({
            board: initialBoard,
            currentPlayer: 'X',
            playerXMoves: [],
            playerOMoves: [],
            winner: null,
            winningLine: null,
            gameMode: mode,
        });
    }, []);

    const makeMove = useCallback((position: number) => {
        if (gameState.winner || gameState.board[position] !== null) {
            return;
        }

        setGameState(prevState => {
            const newBoard = [...prevState.board];
            const currentPlayer = prevState.currentPlayer;
            const isX = currentPlayer === 'X';
            const currentMoves = isX ? [...prevState.playerXMoves] : [...prevState.playerOMoves];

            // Calculate move number (1, 2, or 3) based on current moves
            const moveNumber = (currentMoves.length % 3) + 1;

            // If player already has 3 moves, remove the oldest one
            if (currentMoves.length >= 3) {
                const oldestMove = currentMoves[0];
                newBoard[oldestMove.position] = null;
                currentMoves.shift();

                // Update move numbers for remaining moves
                currentMoves.forEach((move, index) => {
                    move.moveNumber = index + 1;
                });
            }

            // Add new move
            newBoard[position] = currentPlayer;
            currentMoves.push({ position, player: currentPlayer, moveNumber });

            // Check for winner
            const winResult = checkWinner(newBoard);

            return {
                ...prevState,
                board: newBoard,
                currentPlayer: prevState.currentPlayer === 'X' ? 'O' : 'X',
                playerXMoves: isX ? currentMoves : prevState.playerXMoves,
                playerOMoves: isX ? prevState.playerOMoves : currentMoves,
                winner: winResult?.winner || null,
                winningLine: winResult?.winningLine || null,
            };
        });
    }, [gameState.winner, gameState.board]);

    // AI move effect for vs-computer mode
    useEffect(() => {
        if (
            gameState.gameMode === 'vs-computer' &&
            gameState.currentPlayer === 'O' &&
            !gameState.winner
        ) {
            // Add a small delay to make it feel more natural
            const timeout = setTimeout(() => {
                const availableCells = getAvailableCells(gameState.board);
                if (availableCells.length > 0) {
                    const bestMove = getBestMove(gameState.board, 'O');
                    makeMove(bestMove);
                }
            }, 500);

            return () => clearTimeout(timeout);
        }
    }, [gameState.currentPlayer, gameState.gameMode, gameState.winner, gameState.board, makeMove]);

    return {
        ...gameState,
        makeMove,
        resetGame,
        changeMode,
        selectMode,
    };
}
