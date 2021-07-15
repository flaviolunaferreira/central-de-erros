import React, { useEffect, useState } from "react";
import { Center, Box } from "@chakra-ui/layout";
import { Accordion, CircularProgress } from "@chakra-ui/react";

import api from "../service/errorApi";
import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import Grafico from "../components/Grafico";
import ErrorList from "../components/ErrorList";
import ErrorLabel from "../components/ErrorLabel";

export default function Level() {
  const [infoLevel, setInfoLevel] = useState([]);
  const [warningLevel, setWarningLevel] = useState([]);
  const [errorLevel, setErrorLevel] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    api.getAllErrorLevel().then((response) => {
      response.data.content.map((item) => {
        if (item.level === "INFO") {
          return setInfoLevel(infoLevel.push(item));
        } else if (item.level === "ERROR") {
          return setErrorLevel(errorLevel.push(item));
        } else {
          return setWarningLevel(warningLevel.push(item));
        }
      });
      setAllData(response.data.content);
    });
  }, []);

  return (
    <div>
      <Header title="Perfil" />
      <CentralErrorsSideBar />
      <Center>
        <Grafico
          firstLevel={infoLevel}
          secondLevel={warningLevel}
          thirdLevel={errorLevel}
          titulo="# de levels/niveis"
        />
      </Center>
      {
        // fazer toggle
        // verificar porque nao esta aparecendo o Accordion!!
      }
      <Box>
        {allData ? (
          <Accordion allowMultiple>
            {allData.map(({ level, date, origin, description, log }) => {
              <ErrorLabel
                level={level}
                date={date}
                origin={origin}
                description={description}
                log={log}
              />;
            })}
          </Accordion>
        ) : (
          <CircularProgress isIndeterminate color="blue.300" />
        )}

        {/* <ErrorList response={allData} /> */}
      </Box>
    </div>
  );
}
