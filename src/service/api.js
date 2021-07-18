import axios from "axios";
const grant_type = "password";
const client_id = "api_central_erros";
const client_secret = "big_secret_123";

async function loginUser(email, password) {
  const tokenurl = "http://localhost:8080/oauth/token";
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
  axios.post("http://localhost:8080/user/", { name, email, password });

export default { loginUser, registerUser };
