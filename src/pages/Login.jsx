import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Container,
  Text
} from "@chakra-ui/react";
import { MenuSideBar } from '../components/MenuSideBar';
import LinkButton from '../components/LinkButton';
import api from '../service/api';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const history = useHistory();
  
  const handleLogin = () => {
    if (userName === '' || password === '') {
      setMessage('preencha todos os campos');
    } else {
      api.loginUser(userName, password).then(()=> 
      history.push("/centralerrors"))
    }
  }

  return (
    <div>
      <MenuSideBar />
      <Container>
        <form>
          <FormControl id="user">
            <FormLabel>Usuário</FormLabel>
            <Input type="user" value={userName} onChange={(e)=>setUserName(e.target.value)} />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </FormControl>
          <Text color="red">{message}</Text>
          <Button mt={5} mr={5} onClick={() => handleLogin()}>
            Login
          </Button>
          <Button mt={5}>
            <LinkButton title="Sign In" route="/register"/>
          </Button>
        </form>
        
      </Container>
    </div>
  )
}
