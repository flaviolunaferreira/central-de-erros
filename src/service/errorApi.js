import axios from "axios";

const myToken = JSON.parse(localStorage.getItem("getToken"));

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: "Bearer " + myToken.access_token,
  },
});

const getAllErrorLevel = () => api.get("api/0/50");

const getErrorBySubject = (subject, value) =>
  api.get(`/api/filter/0/20?${subject}=${value}`);

  const getErrorByCustomSrc = (level, description, origin, date) =>
  api.get(`/api/filter/0/20?level=${level}&description=${description}&origin=${origin}&date=${date}`);

export default { getAllErrorLevel, getErrorBySubject, getErrorByCustomSrc };
