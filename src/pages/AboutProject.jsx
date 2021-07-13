import { Box, Center, Text, Heading, Image, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "../components/Header";
import Java from '../images/javaLogo.svg';
import Spring from '../images/springLogo.svg';
import Maven from '../images/mavenLogo.svg';
import Oauth from '../images/oauthLogo.svg';
import Mysql from '../images/mysqlLogo.svg';

// colocar tecnologias do front!!!

export default function AboutProject() {
  return (
    <div>
      <Header title="Sobre o Projeto" />
      <Center>
        <Box width="8xl" bg="#0C9FA6" padding="38" mt={22} borderRadius="3xl" boxShadow= "5px 5px 5px black">
          <Heading size="xl" color="white">
            Introdução
          </Heading>
          <Text mt={5} color="white" fontFamily="Montserrat" fontSize={24}>
            Este projeto foi feito como conclusão final da aceleração Java -
            CI&T oferecida pela Codenation.
          </Text>
          <Heading mt={10} size="xl" color="white">
            Objetivos
          </Heading>
          <Text mt={5} color="white" fontFamily="Montserrat" fontSize={24}>
            Em projetos modernos é cada vez mais comum o uso de arquiteturas
            baseadas em serviços ou microsserviços. Nestes ambientes complexos,
            erros podem surgir em diferentes camadas da aplicação (backend,
            frontend, mobile, desktop) e mesmo em serviços distintos. Desta
            forma, é muito importante que os desenvolvedores possam centralizar
            todos os registros de erros em um local, de onde podem monitorar e
            tomar decisões mais acertadas. Neste projeto vamos implementar uma
            API Rest para centralizar registros de erros de aplicações
            utilizando Java.
          </Text>
          <Heading mt={10} size="xl" color="white">
            Tecnologias
          </Heading>
          <Flex flexFlow="wrap">
            <Image width={50} mr={10} src={Java} />
            <Image width={100} mr={10} src={Spring} />
            <Image width={100} mr={10} src={Maven} />
            <Image width={90} mr={10} src={Oauth} />
            <Image width={100} mr={10} src={Mysql} />
          </Flex>
        </Box>
      </Center>
    </div>
  );
}
