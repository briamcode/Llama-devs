import React, { useState } from "react";

const Chart = () => {
    const [messages, setMessages] = useState([
        { text: "¡Hola! ¿Cómo estás?", sender: "John" },
        { text: "¡Hola! Todo bien, ¿y tú?", sender: "You" },
        { text: "Genial, trabajando en un proyecto React.", sender: "John" },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: "You" }]);
            setNewMessage("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Chat en Vivo
            </h1>

            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg flex flex-col p-4 overflow-y-auto h-96">
                {messages.length === 0 ? (
                    <p className="text-gray-500 text-center">No hay mensajes aún</p>
                ) : (
                    messages.map((message, index) => (
                        <div
                            key={index}
                            className={`p-3 my-2 rounded-2xl max-w-xs ${message.sender === "You"
                                ? "bg-yellow-400 text-black text-right ml-auto"
                                : "bg-gray-200 text-black text-left mr-auto"
                                }`}
                        >
                            <span className="block font-semibold mb-1">
                                {message.sender}
                            </span>
                            <span>{message.text}</span>
                        </div>
                    ))
                )}
            </div>

            <div className="w-full max-w-3xl flex mt-4">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Escribe tu mensaje..."
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-yellow-400 text-gray-800 font-semibold p-3 rounded-r-lg hover:bg-yellow-500 transition transform"
                >
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default Chart;
