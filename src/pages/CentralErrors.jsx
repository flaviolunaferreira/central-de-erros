import React from "react";
import { Box } from '@chakra-ui/layout';
import { CentralErrorsSideBar } from "../components/CentralErrorsSideBar";
import Header from "../components/Header";

export default function CentralErrors() {
  return (
    <div>
      <Header title="Perfil" />
      <Box ml={6} mt={2}>
        <CentralErrorsSideBar />
      </Box>
    </div>
  );
}
