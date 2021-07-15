import React, { useEffect, useState } from "react";
import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";
import Grafico from "../components/Grafico";
import { Center } from "@chakra-ui/layout";
import api from "../service/errorApi";

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
      })
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
    </div>
  );
}
