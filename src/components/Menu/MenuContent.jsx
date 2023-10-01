import React from "react";
import { Link } from "gatsby";
import config from "../../../data/SiteConfig";

import {
    Box, 
    Text, 
    Flex
} from '@chakra-ui/react';

const MenuItem = ({ marginTop, mt, to, children }) => (
    <Link 
        to={to} 
        activeStyle={{ 
            display: 'block',
            width: 'max-content',
            background: `linear-gradient(black, black)`,
            backgroundSize: "100% 1px",
            backgroundPosition: "0 100%",
            backgroundRepeat: "no-repeat",
            height: '70px',
            paddingBottom: '10px',
            marginBottom: '16px'
        }}
    >
        <Text 
            fontSize="56px" 
            mt={mt} 
            marginTop={marginTop}
            background={`linear-gradient(black, black)`}
            backgroundSize="0 1px"
            backgroundPosition="0 100%"
            backgroundRepeat="no-repeat"
            transition=".4s"
            color="black"
            width="max-content"
            h="70px"
            pb="10px"
            mb="16px"
            _hover={{
                backgroundSize: '100% 1px'
            }}
        >
            {children}
        </Text>
    </Link>
)

const SocialMenuItem = ({ marginTop, mt, to, children }) => (
    <Link 
        to={to} 
        target="_blank"
    >
        <Text  
            fontSize="16px"
            marginTop={marginTop}
            mt={mt}
            background={`linear-gradient(black, black)`}
            backgroundSize="0 1px"
            backgroundPosition="0 100%"
            backgroundRepeat="no-repeat"
            transition=".4s"
            color="black"
            width="max-content"
            _hover={{
                backgroundSize: '100% 1px'
            }}
        >
            {children}
        </Text>
    </Link>
)

const MenuContent = () => (
    <>
        <Flex
            position="absolute"
            top="50%"
            left={{ base: "20px", md: "6vw" }}
            transform="translateY(-70%)"
            display={{ lg: "flex" }}
        >
            <Box display={{ base: "none", lg: "initial" }}>
                <Text color="#B2B2B2" marginBottom="30px">Social</Text>
                <SocialMenuItem to={config.linkedinProfile}>
                    LinkedIn
                </SocialMenuItem>
                <SocialMenuItem marginTop="20px" to={config.behanceProfile}>
                    Behance
                </SocialMenuItem>
                <SocialMenuItem marginTop="20px" to={config.dribbbleProfile}>
                    Dribbble
                </SocialMenuItem>
            </Box>
            <Box marginLeft={{ lg: "110px" }}>
                <Text color="#B2B2B2" fontSize="16px" marginBottom="14px">Menu</Text>
                <MenuItem to="/">
                    Work
                </MenuItem>
                <MenuItem to="/about" mt="-14px">
                    About
                </MenuItem>
                <Link href={`mailto:${config.authorMail}`} target="_blank">
                    <Text 
                        fontSize="56px" 
                        marginTop="-14px"
                        background={`linear-gradient(black, black)`}
                        backgroundSize="0 1px"
                        backgroundPosition="0 100%"
                        backgroundRepeat="no-repeat"
                        transition=".4s"
                        color="black"
                        width="max-content"
                        h="70px"
                        pb="10px"
                        mb="16px"
                        _hover={{
                            backgroundSize: '100% 1px'
                        }}
                    >
                        Contact
                    </Text>
                </Link>
            </Box>
        </Flex>
        <Box
            position="absolute"
            bottom="60px"
            left="6vw"
        >
            <Text color="#B2B2B2" fontSize="16px" marginBottom="6px">Get in touch</Text>
            <Link href={`mailto:${config.authorMail}`} target="_blank">
                <Box
                    background={`linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.25))`}
                    backgroundSize="100% 1px"
                    backgroundPosition="0 100%"
                    backgroundRepeat="no-repeat"
                    display="inline-block"
                >
                    <Text 
                        fontSize="16px"
                        background={`linear-gradient(black, black)`}
                        backgroundSize="0 1px"
                        backgroundPosition="0 100%"
                        backgroundRepeat="no-repeat"
                        transition=".4s"
                        _hover={{
                            backgroundSize: '100% 1px'
                        }}
                    >
                        {config.authorMail}
                    </Text>
                </Box>
            </Link>
        </Box>
    </>
)

export default MenuContent;
