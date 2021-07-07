import React from 'react';
import { Heading } from '@chakra-ui/react';
import { MenuSideBar } from '../components/MenuSideBar';


export default function Home() {
  return (
    <div>
      <MenuSideBar></MenuSideBar>
      <Heading>Projeto Central de Erros - Home</Heading>
    </div>
  )
}
