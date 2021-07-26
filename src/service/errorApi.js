import axios from "axios";

const myToken = JSON.parse(localStorage.getItem("getToken"));

const api = axios.create({
  baseURL: "https://projeto-central-de-erros.herokuapp.com",
  headers: {
    Authorization: "Bearer " + myToken,
  },
});

const getAllErrorLevel = () => api.get("api/0/50");

const getErrorBySubject = (subject, value) =>
  api.get(`/api/filter/0/20?${subject}=${value}`);

const getErrorByCustomSrc = (level, description, origin, date) =>
  api.get(
    `/api/filter/0/20?level=${level}&description=${description}&origin=${origin}&date=${date}`
  );

const getErrorById = (id) => api.get(`/api/id/${id}`);

const endPoints = { getAllErrorLevel, getErrorBySubject, getErrorByCustomSrc, getErrorById }

export default endPoints;
