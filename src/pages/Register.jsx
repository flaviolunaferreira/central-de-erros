import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
import { MenuSideBar } from "../components/MenuSideBar";
import { useHistory } from "react-router-dom";
import api from "../service/api";

const Register = () => {
  const [required, setRequired] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    if (userName === "" || email === "" || password === "") {
      setRequired("Campo obrigatório!");
    } else {
      api
        .registerUser(userName, email, password)
        .then(() => history.push("login"));
    }
  };

  return (
    <div>
      <MenuSideBar />

      <Container>
        <form>
          <FormControl id="name" mb={5} isRequired>
            <FormLabel>Nome</FormLabel>
            <Input
              type="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Text color="red">{required}</Text>
          </FormControl>

          <FormControl id="user" mb={5} isRequired>
            <FormLabel>Usuário</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text color="red">{required}</Text>
          </FormControl>

          <FormControl id="password" mb={5} isRequired>
            <FormLabel>Senha</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text color="red">{required}</Text>
          </FormControl>

          <Button mt={5} onClick={() => handleSubmit()}>
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
