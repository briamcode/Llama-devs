import React from 'react'
import homeImage from './../assest/home.jpg'; // Ajusta la ruta si está en otra ubicación

const Home = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative z-10 text-center p-6 max-w-screen-md bg-white bg-opacity-80 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-yellow-500 mb-6">
          ¡Descubre tu forma de aprender!
        </h1>
        <p className="text-lg text-gray-900 mb-6">
          Elige una actividad para comenzar.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="bg-yellow-400 text-gray-800 font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-yellow-500">
            🧩 Rompecabezas Visual
          </button>
          <button className="bg-yellow-400  text-gray-800 font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-yellow-500 text-shadow-sm">
            🎵 Escucha
          </button>
          <button className="bg-yellow-400  text-gray-800 font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-yellow-500 text-shadow-sm">
            ✋ Arrastra y Suelta
          </button>
          <button className="bg-yellow-400  text-gray-800 font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-yellow-500 text-shadow-sm">
            🔢 Encuentra
          </button>
          <button className="bg-yellow-400  text-gray-800 font-semibold py-3 px-5 rounded-lg shadow-md hover:bg-yellow-500 text-shadow-sm">
            🌟 Explora
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home
