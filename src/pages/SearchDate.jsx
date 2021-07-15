import React, { useEffect, useState } from "react";
import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import { Box, Center, Flex, Input, Button, FormLabel } from "@chakra-ui/react";
import Grafico from "../components/Grafico";

export default function SearchDate() {
  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinallDate] = useState("");
  const [infoLevel, setInfoLevel] = useState(0);
  const [warningLevel, setWarningLevel] = useState(0);
  const [errorLevel, setErrorLevel] = useState(0);
  //PATH TESTE http://localhost:8080/api/filter/0/3?level=2021-07-09
  useEffect(() => {
    setInfoLevel(10);
    setWarningLevel(12);
    setErrorLevel(5);
  }, []);

  const handleDate = () => {
    console.log(initialDate);
    console.log(finalDate);
  };

  return (
    <div>
      <Header title="Perfil" />
      <CentralErrorsSideBar />
      <Center>
        <Flex direction="column">
          <Box>
            <FormLabel>Data de Início</FormLabel>
            <Input
              type="text"
              placeholder="2021-10-30"
              value={initialDate}
              onChange={(e) => setInitialDate(e.target.value)}
            />
            <FormLabel>Data Final</FormLabel>
            <Input
              type="text"
              placeholder="2021-10-30"
              value={finalDate}
              onChange={(e) => setFinallDate(e.target.value)}
            />
            <Button onClick={() => handleDate()}>Send</Button>
          </Box>

          <Grafico
            firstLevel={infoLevel}
            secondLevel={warningLevel}
            thirdLevel={errorLevel}
            titulo="# de levels por data"
          />
        </Flex>
      </Center>
    </div>
  );
}
