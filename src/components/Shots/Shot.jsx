import React from "react";

import {
  Image,
  Box,
  Text
} from '@chakra-ui/react';

const Shot = ({shotDescription, shotImage}) => (
    <Box>
        <Image 
            src={shotImage}
            borderRadius="24px"
            height="60vh"
            width="auto"
        />
        <Text fontSize="14px" mt="21px">{shotDescription}</Text>
    </Box>
)

export default Shot
