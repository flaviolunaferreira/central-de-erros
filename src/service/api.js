import axios from "axios";
const grant_type = "password";
const client_id = "api_central_erros";
const client_secret = "big_secret_123";

async function loginUser(email, password) {
  const tokenurl = "https://projeto-central-de-erros.herokuapp.com/oauth/token";
  var bodyFormData = new FormData();
  bodyFormData.append("grant_type", grant_type);
  bodyFormData.append("username", email);
  bodyFormData.append("password", password);

  let headers = {
    headers: {
      Authorization: "Basic " + btoa(`${client_id}:${client_secret}`),
      "Content-Type": "multipart/form-data",
    },
  };
  return axios.post(tokenurl, bodyFormData, headers);
}

const registerUser = (name, email, password) =>
  axios.post("https://projeto-central-de-erros.herokuapp.com/user/", { name, email, password });

const endPoints = { loginUser, registerUser }

export default endPoints;
