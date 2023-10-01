import React from "react";

import { Box } from '@chakra-ui/react';

import ScrollArrow from "../ScrollArrow/ScrollArrow";

import '../../styles/index.scss';

const Layout = ({ children, pageName }) => (
  <Box id={pageName}>
    {children}
    <ScrollArrow />
  </Box>
)

export default Layout