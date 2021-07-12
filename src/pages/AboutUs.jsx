import { Flex } from '@chakra-ui/react';
import React from 'react';
import AboutPerson from '../components/AboutPerson';
import Header from '../components/Header';
import DanielePerse from '../images/DanielePerse.jpeg';
import JosiasViveiro from '../images/JosiasViveiro.jpg';

export default function AboutUs() {
  return (
    <div>
      <Header title="Quem Somos" />

      <Flex direction="row" wrap="wrap" justify="space-between" padding="20px">
        <AboutPerson
          name="Daniele Perse"
          link="https://www.linkedin.com/in/daniele-perse/"
          src={DanielePerse}
        />
        <AboutPerson name="Pessoa Um" src="" link="" />
        <AboutPerson name="Pessoa Dois" src="" link="" />
      </Flex>

      <Flex direction="row" wrap="wrap" justify="space-around" padding="20px">
        <AboutPerson name="Pessoa Três" src="" link="" />
        <AboutPerson
          name="Josias Danny de Viveiro"
          src={JosiasViveiro}
          link="https://www.linkedin.com/in/josias-danny-de-viveiro"
        />
      </Flex>
    </div>
  );
}
