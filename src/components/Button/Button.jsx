import React from "react";
import { Link } from "gatsby";

import {
  Box,
  Text
} from '@chakra-ui/react';

const Button = ({ to, target, mt, marginTop, mb, marginBottom, children }) => (
    <Link to={to} target={target} role="group">
        <Box 
            position="relative"
            overflow="hidden"
            fontWeight="600" 
            fontSize="18px"
            border="1px solid #DDE3EA"
            minWidth="170px"
            height="72px"
            padding="0 40px"
            borderRadius="60px"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            ml="auto"
            mr="auto"
            mt={mt}
            marginTop={marginTop}
            mb={mb}
            marginBottom={marginBottom}
        >
            <Text 
                position="relative"
                zIndex={3}
                transition=".3s cubic-bezier(.5,0,.6,1)"
                color="black"
                top="-1px"
                _groupHover={{
                    color: 'white'
                }}
            >
                {children}
            </Text>
            <Box
                position="absolute"
                bottom="-200%"
                h="200%"
                w="100%"
                bg="black"
                borderRadius="50%"
                transition=".6s"
                _groupHover={{
                    bottom: '0',
                    borderRadius: '0'
                }}
            />
        </Box>
    </Link>
)

export default Button
