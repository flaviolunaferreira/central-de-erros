import React from 'react';
import { Avatar, Flex, Link, Text } from '@chakra-ui/react';

export default function AboutPerson({ name, src, link }) {
  return (
    <Link href={link} isExternal>
      <Flex direction="column" align="center">
        <Avatar size="2xl" name={name} src={src} boxShadow="5px 5px 5px black" />
        <Text paddingTop="10px">{name}</Text>
      </Flex>
    </Link>
  );
}
