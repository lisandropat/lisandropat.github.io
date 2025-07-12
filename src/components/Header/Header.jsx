import React from "react";

import {
  Box,
  Text
} from '@chakra-ui/react';

import Menu from "../Menu/Menu";

import Logo from './Logo';

import '../../styles/index.css';
import '../../styles/anim.css';

const Header = () => (
  <Box 
    as="nav" 
  >
    <Logo />
    <Box
      position="absolute"
      zIndex="4"
      top={{ base: "20px", lg: "62px"}}
      right={{ base: "80px", lg: "118px" }}
      className="fadeIn"
    >
      <Text fontSize="20px">
        menu
      </Text>
    </Box>
    <Box
      position="fixed"
      zIndex="41"
      right="0"
      top="0"
      className="fadeIn"
    >
      <Menu />
    </Box>
  </Box>
)

export default Header
