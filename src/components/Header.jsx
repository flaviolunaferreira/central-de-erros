import React from "react";
import { Box, Flex, Heading, Center } from "@chakra-ui/react";
import { MenuSideBar } from "./MenuSideBar";

export default function Header({ title }) {
  return (
    <Box padding={5} bg="black">
      <Flex justify="space-between">
        <Box>
          <Center>
            <MenuSideBar />
          </Center>
        </Box>
        <Box>
            <Heading fontWeight="100" fontFamily="Montserrat" color="white">{title}</Heading>
        </Box>
        <Box></Box>
      </Flex>
    </Box>
  );
}
