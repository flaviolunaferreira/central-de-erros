import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Text,
  storageKey,
} from "@chakra-ui/react";
import { MenuSideBar } from "../components/MenuSideBar";
import LinkButton from "../components/LinkButton";
import api from "../service/api";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [email, setGetEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setMessage("preencha todos os campos");
    } else {
      api.loginUser(email, password).then((event) => {
        localStorage.setItem("getToken", JSON.stringify(event.data));
        history.push("/centralerrors");
      });
    }
  };

  return (
    <div>
      <MenuSideBar />
      <Container>
          <form>
            <FormControl id="user">
              <FormLabel>E-mail</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setGetEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Text color="red">{message}</Text>
            <Button mt={5} mr={5} onClick={() => handleLogin()}>
              Login
            </Button>
            <Button mt={5}>
              <LinkButton title="Sign In" route="/register" />
            </Button>
          </form>
      </Container>
    </div>
  );
}
