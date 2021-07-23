import React from "react";
import { Box, Flex, Heading, Center } from "@chakra-ui/react";
import { MenuSideBar } from "./MenuSideBar";

export default function Header({ title }) {
  return (
    <Box padding={5} bg="black">
      <Flex justify="flex-start">
        <Box width="10%">
          <Center>
            <MenuSideBar />
          </Center>
        </Box>
        <Box width="90%">
          <Center>
            <Heading fontWeight="100" fontFamily="Montserrat" color="white">{title}</Heading>
          </Center>
        </Box>
      </Flex>
    </Box>
  );
}
