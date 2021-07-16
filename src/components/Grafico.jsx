import React from 'react';
import { Bar } from "react-chartjs-2";
import { Box } from '@chakra-ui/react';

const Grafico = ({firstLevel, secondLevel, thirdLevel, titulo }) => {
    const config = {
        labels: ["info", "warning", "error"],
        datasets: [
          {
            label: titulo,
            data: [firstLevel, secondLevel, thirdLevel], // numero de ocorrencias
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(255, 99, 132, 0.2)",
            ],
            borderColor: [
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(255, 99, 132, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <Box w="1000px">
            <Bar data={config} />
        </Box>
    );
}

export default Grafico;
