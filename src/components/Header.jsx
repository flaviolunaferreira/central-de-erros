import React from 'react';
import { Box, Flex, Text } from "@chakra-ui/react";

export default function Header({title}) {

  return (
    <Box bg="">
      <Flex justify="space-around">
      <Text>{title}</Text>
      </Flex>
    </Box>
  )
}
