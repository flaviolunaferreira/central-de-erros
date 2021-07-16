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
import { Center, Box } from "@chakra-ui/layout";

import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import Grafico from "../components/Grafico";
import ErrorList from "../components/ErrorList";
import api from "../service/errorApi";

export default function Custom() {
  const [infoLevel, setInfoLevel] = useState([]);
  const [warningLevel, setWarningLevel] = useState([]);
  const [errorLevel, setErrorLevel] = useState([]);
  const [allData, setAllData] = useState([]);
  const [level, setLevel] = useState("");
  const [desc, setDesc] = useState("");
  const [origin, setOrigin] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    allData && setInfoLevel([]);
    setWarningLevel([]);
    setErrorLevel([]);
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
    api.getErrorByCustomSrc(level, desc, origin, date).then((response) => {
      setAllData(response.data.content);
    });
  };

  return (
    <div>
      <Header title="Perfil" />
      <CentralErrorsSideBar />
      <Box>
        <FormLabel>Level</FormLabel>
        <Select
          placeholder="Selecione um nivel"
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="INFO">INFO</option>
          <option value="WARNING">WARNING</option>
          <option value="ERROR">ERROR</option>
        </Select>
        <FormLabel>Descrição</FormLabel>
        <Input
          type="text"
          placeholder="descrição"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <FormLabel>Origem</FormLabel>
        <Input
          type="text"
          placeholder="origem"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
        />
        <FormLabel>Data</FormLabel>
        <Input
          type="text"
          placeholder="2021-10-30"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Button onClick={() => handleRequisition()}> Send</Button>
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
