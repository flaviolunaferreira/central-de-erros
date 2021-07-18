import React from "react";
import {
  Image,
  Box,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";

const CommentsCard = ({ myImage, text }) => {

  return (
    <Box>
      <Center>
          <Flex direction="row">
            <Image
              borderRadius="full"
              boxSize="200px"
              src={myImage}
              alt="Segun Adebayo"
              mt={10}
              boxShadow= "5px 5px 5px black"
            />

            <Box
              alignSelf="center"
              borderRadius="3xl"
              bg="#0C9FA6"
              mt={10}
              ml={5}
              boxShadow= "5px 5px 5px black"
            >
              <Text
                width="3xl"
                padding="10"
                color="black"
                fontFamily="Montserrat"
                fontSize={20}
                overflow="hidden"
              >
                {text}
              </Text>
            </Box>
          </Flex>
      </Center>
    </Box>
  );
};

export default CommentsCard;
