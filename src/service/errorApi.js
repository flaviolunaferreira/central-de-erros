import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8080",
});

const getAllErrorLevel = () => api.get("api/0/50");

export default {getAllErrorLevel};
