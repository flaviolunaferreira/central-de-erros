import React, { useEffect, useState } from 'react';
import {Text, Box} from '@chakra-ui/react'
import api from '../service/errorApi';

export default function InfoBox({identity}) {
    const [info, setInfo] = useState([]);
    useEffect(() => {
        api.getErrorById(identity).then((response)=> setInfo(response.data));
    }, [identity])
    return (
        <Box>
          <Text>Descrição: {info.description}</Text>  
          <Text>Log: {info.log}</Text>  
        </Box>
    );
}
