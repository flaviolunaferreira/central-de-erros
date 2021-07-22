import React, { useEffect, useState } from "react";
import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import {
  CircularProgress,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Center, Box, Flex } from "@chakra-ui/layout";
import Grafico from "../components/Grafico";
import ErrorList from "../components/ErrorList";
import api from "../service/errorApi";
import { filterError } from "../util/filterError";

export default function SearchDate() {
  const [initialDate, setInitialDate] = useState("");
  const [infoLevel, setInfoLevel] = useState([]);
  const [warningLevel, setWarningLevel] = useState([]);
  const [errorLevel, setErrorLevel] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setInfoLevel(0)
    setErrorLevel(0)
    setWarningLevel(0)
    filterError(allData, setInfoLevel, setErrorLevel, setWarningLevel);
  }, [allData]);

  const handleDate = () => {
    api.getErrorBySubject("date", initialDate).then((response) => {
      setAllData(response.data.content);
    });
  };

  return (
    <div>
      <Header title="Perfil" />
      <Box ml={6} mt={2}>
        <CentralErrorsSideBar />
      </Box>
      <Center>
        <Box w="1000px">
          
            <FormLabel>Filtro por data</FormLabel>
            <Input
              type="text"
              placeholder="Ex.: 2021-07-09"
              value={initialDate}
              onChange={(e) => setInitialDate(e.target.value)}
            />
            <Button onClick={() => handleDate()}>Send</Button>
          </Box>
      </Center>
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
    </div>
  );
}
