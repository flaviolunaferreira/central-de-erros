import React from "react";

import { Center } from '@chakra-ui/layout';
import Header from "../components/Header";
import { Image } from "@chakra-ui/react";
import image from "../images/homeImg.svg";

export default function Home() {
  return (
    <div>
      <Header title="Projeto Central de Erros" />
      <Center>
        <Image w="500px" src={image} />
      </Center>
    </div>
  );
}
