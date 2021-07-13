import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container,
} from "@chakra-ui/react";
import { MenuSideBar } from "../components/MenuSideBar";
import LinkButton from "../components/LinkButton";

const Register = () => {
  return (
    <div>
      <MenuSideBar />

      <Container>
        <form>
          <FormControl id="name">
            <FormLabel>Nome</FormLabel>
            <Input type="name" />
          </FormControl>

          <FormControl id="user">
            <FormLabel>Usuário</FormLabel>
            <Input type="user" />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button mt={5}>
            <LinkButton title="Login" route="/login" />
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
