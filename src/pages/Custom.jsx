import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { Center, Box, Flex } from "@chakra-ui/layout";

import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import Grafico from "../components/Grafico";
import ErrorList from "../components/ErrorList";
import api from "../service/errorApi";
import { filterError } from "../util/filterError";

export default function Custom() {
  const [infoLevel, setInfoLevel] = useState(0);
  const [warningLevel, setWarningLevel] = useState(0);
  const [errorLevel, setErrorLevel] = useState(0);
  const [allData, setAllData] = useState([]);
  const [level, setLevel] = useState("");
  const [desc, setDesc] = useState("");
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setInfoLevel(0);
    setErrorLevel(0);
    setWarningLevel(0);
    filterError(allData, setInfoLevel, setErrorLevel, setWarningLevel);
  }, [allData]);

  const handleRequisition = async () => {
    api.getErrorByCustomSrc(level, desc, origin, date).then((response) => {
      setAllData(response.data.content);
    });
  };

  return (
    <div>
      <Header title="Perfil" />
      <Box>
        <CentralErrorsSideBar />
      </Box>
      <Box ml={16}>
        <Flex>
          <Box mt={2}>
            <FormLabel>Level</FormLabel>
            <Select
              mb={4}
              w="300px"
              placeholder="Selecione um nivel"
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="INFO">INFO</option>
              <option value="WARNING">WARNING</option>
              <option value="ERROR">ERROR</option>
            </Select>
            <FormLabel>Descrição</FormLabel>
            <Input
              mb={4}
              w="300px"
              type="text"
              placeholder="Ex.: cpf"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <FormLabel>Origem</FormLabel>
            <Input
              mb={4}
              w="300px"
              type="text"
              placeholder="Ex.: gordinho"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
            <FormLabel>Data</FormLabel>
            <Input
              mb={4}
              w="300px"
              type="text"
              placeholder="Ex.: 2021-07-09"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Box mt={6} color="#0C9FA6">
              <Button onClick={() => handleRequisition()}> Send</Button>
            </Box>
          </Box>
          <Box ml={100}>
            <Center>
              <Tabs isFitted variant="enclosed">
                <TabList mb="1em">
                  <Tab>Grafico</Tab>
                  <Tab>Lista</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Center>
                      <Grafico
                        firstLevel={infoLevel}
                        secondLevel={warningLevel}
                        thirdLevel={errorLevel}
                        titulo="# de levels/niveis"
                      />
                    </Center>
                  </TabPanel>
                  <TabPanel>
                    <Box w="1000px">
                      {allData ? (
                        <ErrorList response={allData} />
                      ) : (
                        <CircularProgress isIndeterminate color="blue.300" />
                      )}
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Center>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}
