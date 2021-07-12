import React from 'react';
import { Avatar, Flex, Link, Text } from '@chakra-ui/react';

export default function AboutPerson({ name, src, link }) {
  return (
    <Link href={link} isExternal>
      <Flex direction="column" align="center">
        <Avatar size="2xl" name={name} src={src} />
        <Text>{name}</Text>
      </Flex>
    </Link>
  );
}
