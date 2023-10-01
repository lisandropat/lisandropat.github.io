import React from "react";

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    //DrawerCloseButton,
    useDisclosure,
    Box
  } from '@chakra-ui/react';

import MenuContent from './MenuContent';

function Menu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Box
                position="relative"
                h="80px"
                w="130px"
                top={{ base: "-2px", lg: "40px" }}
                right={{ base: "4px", lg: "40px" }}
                onClick={ isOpen ? onClose : onOpen }
                className={ isOpen ? 'claseAbierta' : 'claseCerrada' }
                ref={btnRef}
                cursor="pointer"
                role="group"
            >
                <Box as="span" 
                    position="absolute"
                    zIndex="2"
                    right="24px"
                    w="26px"
                    h="2px"
                    backgroundColor="black"
                    transition=".2s"
                    _groupHover={{ backgroundColor: { lg: 'white' } }}
                />
                <Box as="span" 
                    position="absolute"
                    zIndex="2"
                    right="24px"
                    w="26px"
                    h="2px"
                    backgroundColor="black"
                    transition=".2s"
                    _groupHover={{ backgroundColor: { lg: 'white' } }}
                />
                <Box as="span" 
                    position="absolute"
                    zIndex="1"
                    top="49%"
                    transform="translateY(-50%)"
                    backgroundColor="white"
                    right="7px"
                    w="60px"
                    h="60px"
                    borderRadius="50%"
                >
                    <Box
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%) scale(0)"
                        h="100%"
                        w="100%"
                        bg="black"
                        borderRadius="50%"
                        transition=".2s"
                        _groupHover={{
                            transform: { lg: "translate(-50%, -50%) scale(1.1)" }
                        }}
                    />
                </Box>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size="lg"
            >
                <DrawerOverlay backgroundColor="rgba(238,238,238,.7)" />
                <DrawerContent boxShadow="none">
                    <DrawerBody
                        position="relative"
                    >
                        <MenuContent />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Menu