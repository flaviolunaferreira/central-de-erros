import { Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import AboutPerson from "../components/AboutPerson";
import Header from "../components/Header";
import Coyote from "../images/Coyote.png";
import DanielMoura from "../images/DanielMoura.png";
import DanielePerse from "../images/DanielePerse.jpeg";
import JorgeOsiro from "../images/JorgeOsiro.jpeg";
import JosiasViveiro from "../images/JosiasViveiro.jpg";

export default function AboutUs() {
  return (
    <div>
      <Header title="Quem Somos" />
      <Center>
      <Box w="80%">
        <Flex
          direction="row"
          wrap="wrap"
          justify="space-between"
          p="20px"
        >
          <AboutPerson
            name="Daniele Perse"
            link="https://www.linkedin.com/in/daniele-perse/"
            src={DanielePerse}
          />
          <AboutPerson
            name="Flavio Luna Ferreira"
            src={Coyote}
            link="https://www.linkedin.com/in/flavio-luna-ferreira-9b4812165/"
          />
          <AboutPerson
            name="Daniel Moura"
            src={DanielMoura}
            link="https://www.linkedin.com/in/darthurmoura/"
          />
        </Flex>

        <Flex direction="row" wrap="wrap" justify="space-around" padding="20px">
          <AboutPerson
            name="Jorge Osiro"
            src={JorgeOsiro}
            link="https://www.linkedin.com/in/jorge-osiro/"
          />
          <AboutPerson
            name="Josias Danny de Viveiro"
            src={JosiasViveiro}
            link="https://www.linkedin.com/in/josias-danny-de-viveiro"
          />
        </Flex>
      </Box>
      </Center>
    </div>
  );
}
