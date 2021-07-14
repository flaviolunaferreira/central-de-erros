import axios from 'axios';

const api = axios. create({
    baseURL: "http://localhost:8080",
});

// const loginUser = (email, password) =>
//   api.post("/user", { email, password });

const registerUser = (name, email, password) => api.post('/user', {name, email, password});

export default {registerUser};
