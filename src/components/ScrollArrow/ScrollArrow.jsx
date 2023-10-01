import React, { useState } from 'react';

import { Text } from "@chakra-ui/react";

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isBrowser = () => typeof window !== "undefined"

  if (isBrowser()) {
    window.addEventListener('scroll', checkScrollTop)
  }

  return (
        <Text 
          className="ri-arrow-up-line" 
          onClick={ scrollTop } 
          position="fixed"
          w="100%"
          bottom="20px"
          left="93vw"
          opacity={ showScroll ? '1' : '0' }
          transition=".2s"
          zIndex="1000"
          cursor="pointer"
          fontSize="24px"
          color="black"
        />
  );
}

export default ScrollArrow;