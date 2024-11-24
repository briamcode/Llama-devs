import React, { useState, useEffect } from "react";

const Game = () => {
    const emojis = ["🍎", "🐶", "🚗", "🌟", "🎈", "🍩", "🦋", "🎨"];
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [disableClick, setDisableClick] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [maxAttempts, setMaxAttempts] = useState(20);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        initializeGame();
    }, []);

    useEffect(() => {
        if (matchedCards.length === cards.length && cards.length > 0) {
            setGameWon(true);
        }
    }, [matchedCards]);

    useEffect(() => {
        if (attempts >= maxAttempts && !gameWon) {
            setGameOver(true);
        }
    }, [attempts]);

    const initializeGame = () => {
        const shuffledCards = [...emojis, ...emojis]
            .sort(() => Math.random() - 0.5)
            .map((emoji, index) => ({ id: index, emoji, flipped: false }));

        const totalCards = shuffledCards.length;
        const columns = 4;
        const emptySlots = (Math.ceil(totalCards / columns) * columns) - totalCards;

        const emptyCards = new Array(emptySlots).fill({ id: -1, emoji: "", flipped: false });
        const allCards = [...shuffledCards, ...emptyCards];

        setCards(allCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setAttempts(0);
        setGameOver(false);
        setGameWon(false);
    };

    const getBackgroundColor = (emoji) => {
        const colorMap = {
            "🍎": "bg-red-400",
            "🐶": "bg-blue-400",
            "🚗": "bg-green-400",
            "🌟": "bg-yellow-400",
            "🎈": "bg-pink-400",
            "🍩": "bg-purple-400",
            "🦋": "bg-cyan-400",
            "🎨": "bg-orange-400",
        };
        return colorMap[emoji] || "bg-gray-400";
    };

    const handleCardClick = (id) => {
        if (disableClick || flippedCards.length === 2 || gameOver || gameWon) return;

        const newFlippedCards = [...flippedCards, id];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setDisableClick(true);
            const [firstCard, secondCard] = newFlippedCards;
            const isMatch = cards[firstCard].emoji === cards[secondCard].emoji;

            if (isMatch) {
                setMatchedCards([...matchedCards, firstCard, secondCard]);
            }

            setAttempts(attempts + 1);

            setTimeout(() => {
                setFlippedCards([]);
                setDisableClick(false);
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Juego de Memoria 🎮
            </h1>
            <div className="grid grid-cols-4 gap-5 w-full max-w-2xl">
                {cards.map((card, index) => (
                    <button
                        key={index}
                        onClick={() => handleCardClick(index)}
                        className={`w-32 h-32 flex items-center justify-center text-4xl font-bold rounded-lg shadow-lg
                            ${flippedCards.includes(index) || matchedCards.includes(index)
                                ? `${getBackgroundColor(card.emoji)} text-white`
                                : "bg-white text-gray-700"
                            } transition-transform transform hover:scale-105`}
                        disabled={flippedCards.includes(index) || matchedCards.includes(index)}
                    >
                        {flippedCards.includes(index) || matchedCards.includes(index)
                            ? card.emoji
                            : "?"}
                    </button>
                ))}
            </div>
            <div className="mt-6 text-lg font-semibold text-gray-800">
                Intentos: {attempts}/{maxAttempts}
            </div>
            <button
                onClick={initializeGame}
                className="mt-6 bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 shadow-md transition-all"
            >
                Reiniciar Juego 🔄
            </button>
            {gameOver && (
                <div className="mt-6 text-red-600 font-bold text-2xl">
                    ¡Has perdido! 😢
                </div>
            )}
            {gameWon && (
                <div className="mt-6 text-green-600 font-bold text-2xl">
                    ¡Ganaste! 🎉
                </div>
            )}
        </div>
    );
};

export default Game;
