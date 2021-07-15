import axios from 'axios';
const grant_type = "password";
const client_id = "api_central_erros";
const client_secret = "big_secret_123";


const api = axios.create({
    baseURL: "http://localhost:8080",
});

async function loginUser(credentials) {
  return fetch('http://localhost:8080/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

// const loginUser = (email, password) =>
//   api.post("/oauth/token", { email, password, grant_type, client_id, client_secret });

const registerUser = (name, email, password) => api.post('/user', {name, email, password});

export default {registerUser, loginUser};
