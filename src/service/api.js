import axios from 'axios';
const grant_type = "password";
const client_id = "api_central_erros";
const client_secret = "big_secret_123";


const api = axios.create({
    baseURL: "http://localhost:8080",
});

const loginUser = (email, password) =>
  api.post("/oauth/token", { email, password, grant_type, client_id, client_secret });

const registerUser = (name, email, password) => api.post('/user', {name, email, password});

export default {registerUser, loginUser};
