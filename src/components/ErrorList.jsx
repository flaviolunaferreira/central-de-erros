import React, { useEffect } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from "@chakra-ui/react";
import InfoBox from '../components/InfoBox';

export default function ErrorList({ response }) {
  return (
    <Accordion allowMultiple>
      {response.map(({ id, level, date, origin, description, log }) => (
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {level}-{date}-{origin}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <InfoBox identity={id} />
            {/* <Box>Descrição:{description}</Box>
            <Box>Log:{log}</Box> */}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
