import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Container
} from "@chakra-ui/react";
import { MenuSideBar } from '../components/MenuSideBar';
import LinkButton from '../components/LinkButton';

export default function Login() {
  return (
    <div>
      <MenuSideBar />

      <Container>
        <form>
          <FormControl id="user">
            <FormLabel>Usuário</FormLabel>
            <Input type="user" />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button mt={5} mr={5} >
            <LinkButton title="Login" route="/centralerrors"/>
          </Button>
          <Button mt={5}>
            <LinkButton title="Sign In" route="/register"/>
          </Button>
        </form>
        
      </Container>
    </div>
  )
}
