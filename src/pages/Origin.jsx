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
  Button,
} from "@chakra-ui/react";
import { Center, Box } from "@chakra-ui/layout";

import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import Grafico from "../components/Grafico";
import ErrorList from "../components/ErrorList";
import api from "../service/errorApi";

export default function Origin() {
  const [infoLevel, setInfoLevel] = useState([]);
  const [warningLevel, setWarningLevel] = useState([]);
  const [errorLevel, setErrorLevel] = useState([]);
  const [allData, setAllData] = useState([]);
  const [origin, setOrigin] = useState("Gordinho");

  useEffect(() => {
    setInfoLevel(new Array());
    setWarningLevel(new Array());
    setErrorLevel(new Array());

    allData.map((item) => {
      if (item.level === "INFO") {
        return setInfoLevel(infoLevel.push(item));
      } else if (item.level === "ERROR") {
        return setErrorLevel(errorLevel.push(item));
      } else {
        return setWarningLevel(warningLevel.push(item));
      }
    });
  }, [allData]);

  const handleRequisition = async () => {
    api.getErrorBySubject("origin", origin).then((response) => {
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
          <FormLabel>Filtro por origem</FormLabel>
          <Input
            type="text"
            placeholder="2021-10-30"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
          <Button onClick={() => handleRequisition()} mb={5}>
            Send
          </Button>
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
