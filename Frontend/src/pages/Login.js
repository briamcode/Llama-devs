import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import iconGoogle from '../assest/logodegoogle.svg';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario de login enviado");
    navigate(`/login?email=${data.email}&password=${data.password}&rememberMe=${data.rememberMe}`);
  };

  return (
    <div className="flex flex-col bg-gray-100"> 
      <div className="relative flex flex-col m-3 space-y-4 bg-white shadow-xl rounded-2xl md:flex-row md:space-y-0 w-full max-w-md p-6 mx-auto flex-1"> {/* Ajustado para encajar en la pantalla */}
        <div className="flex flex-col justify-center w-full">
          <span className="mb-2 text-3xl font-bold text-center md:text-left">Bienvenido de vuelta</span>
          <span className="font-light text-gray-400 mb-4 text-center md:text-left">
            Inicia sesión para continuar
          </span>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <span className="mb-1 text-sm">Email</span>
                <input
                  type="text"
                  name="email"
                  placeholder="Ingrese su email"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md placeholder:text-xs placeholder:font-light placeholder:text-gray-500"
                  value={data.email}
                  onChange={handleOnChange}
                />
              </div>

              <div>
                <span className="mb-1 text-sm">Contraseña</span>
                <input
                  type="password"
                  name="password"
                  placeholder="Ingrese su contraseña"
                  className="w-full p-2 text-sm border border-gray-300 rounded-md placeholder:text-xs placeholder:font-light placeholder:text-gray-500"
                  value={data.password}
                  onChange={handleOnChange}
                />
              </div>

              <div className="flex justify-between items-center py-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="mr-2"
                    checked={data.rememberMe}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="rememberMe" className="text-sm cursor-pointer">
                    Recordar cuenta
                  </label>
                </div>
                <span className="font-bold hover:underline text-sm">
                  <Link to="/forgot-password">Contraseña olvidada</Link>
                </span>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white p-2 border border-transparent rounded-lg mb-4 hover:bg-yellow-500 hover:text-black hover:border-gray-300 transition-all duration-200"
              >
                Iniciar sesión
              </button>

              <button 
                className="w-full border border-gray-300 text-md p-2 rounded-lg mb-4 hover:bg-black hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <img src={iconGoogle} alt="img" className="w-6 h-6 inline mr-2" />
                Iniciar sesión con Google
              </button>

              <div className="text-center text-gray-400">
                ¿No tienes una cuenta?
                <span className="font-bold text-black ml-2 hover:underline">
                  <Link to="/sign-up">Regístrate</Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


