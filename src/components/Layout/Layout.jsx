import React from "react";

import { Box } from '@chakra-ui/react';

import ScrollArrow from "../ScrollArrow/ScrollArrow";

import '../../styles/index.css';
import '../../styles/anim.css';

const Layout = ({ children, pageName }) => (
  <Box id={pageName}>
    {children}
    <ScrollArrow />
  </Box>
)

export default Layout