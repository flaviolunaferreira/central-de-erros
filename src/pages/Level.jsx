import React, { useEffect, useState } from "react";
import { Center, Box } from "@chakra-ui/layout";
import {
  CircularProgress,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

import api from "../service/errorApi";
import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import Grafico from "../components/Grafico";
import ErrorList from "../components/ErrorList";
import { filterError } from "../util/filterError";

export default function Level() {
  const [infoLevel, setInfoLevel] = useState(0);
  const [warningLevel, setWarningLevel] = useState(0);
  const [errorLevel, setErrorLevel] = useState(0);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    api.getAllErrorLevel().then((response) => {
      setAllData(response.data.content);
      filterError(
        response.data.content,
        setInfoLevel,
        setErrorLevel,
        setWarningLevel
      );
    });
  }, []);

  return (
    <div>
      <Header title="Perfil" />
      <Box ml={6} mt={2}>
        <CentralErrorsSideBar />
      </Box>
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
