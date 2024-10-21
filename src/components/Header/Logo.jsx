import React from "react";
import { Link } from "gatsby";

import {
  Heading,
  Box
} from '@chakra-ui/react';

import '../../styles/index.scss';

const Logo = () => (
    <Link to="/">
        <Heading as="h1"
          position="absolute"
          zIndex={10}
          top={{ base: "21px", lg: "60px" }}
          left={{ base: "20px", xl: '64px' }}
          fontSize="21px"
          fontWeight="800"
          className="fadeIn"
        >
          Lisandro ⎯ Pat
        </Heading>
    </Link>
)

export default Logo
