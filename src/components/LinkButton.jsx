import React from 'react';
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function LinkButton({title, route, onClose}) {
  return (
    <div>
      <Link as={RouterLink} to={route} variant="outline" fontSize="xl" mr={3} onClick={onClose}>
        {title}
      </Link>
    </div>
  )
}
