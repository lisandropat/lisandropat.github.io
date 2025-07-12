import React from "react";

import {
  Image,
  Box,
  Text
} from '@chakra-ui/react';

const Shot = ({shotDescription, shotImage}) => (
    <Box>
        <Box
            padding={{ base: "12px", lg: "20px" }}
            borderRadius="36px"
            border="0.5px solid rgba(0,0,0,0.1)"
        >
            <Image 
                src={shotImage}
                borderRadius="24px"
                height={{ base: "60vh", lg: "80vh" }}
                width="auto"
            />
        </Box>
        <Text fontSize="14px" mt="21px">{shotDescription}</Text>
    </Box>
)

export default Shot
