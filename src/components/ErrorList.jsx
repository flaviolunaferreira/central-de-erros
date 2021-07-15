import React from "react";
import { Accordion } from "@chakra-ui/react";
import ErrorLabel from "./ErrorLabel";

export default function ErrorList({ response }) {
  return (
    <Accordion allowMultiple>
      {response.forEach(({ level, date, origin, description, log }) => {
        <ErrorLabel
          level={level}
          date={date}
          origin={origin}
          description={description}
          log={log}
        />;
      })}
    </Accordion>
  );
}
