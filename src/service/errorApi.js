import axios from "axios";

const myToken = JSON.parse(localStorage.getItem("getToken"));

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: "Bearer " + myToken.access_token,
  },
});

const getAllErrorLevel = () => api.get("api/0/50");

export default { getAllErrorLevel };
