// Definir el dominio base para el backend
const backendDomin = 'http://localhost:8080';

// Configuración de las rutas de la API para el registro y login
const SummaryApi = {
  signUP : {
    url : `${backendDomin}/api/signup`,  // URL para la creación de cuenta
    method: 'POST'
  },
  login : {
    url : `${backendDomin}/api/login`,  // URL para el login de usuarios
    method  : 'POST'
  },
  current_user : {
    url: `${backendDomin}/api/user-details`,
    method  : 'get'
  }
};

export default SummaryApi;
