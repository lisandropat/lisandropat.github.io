import React from "react";
import config from "../../../data/SiteConfig";
import { Link } from "gatsby";
import Plx from 'react-plx';

import {
  Image,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

import Profile from '../../images/clip.png';
//import Psy from '../../images/psy.gif';

const parallaxData = [
  {
    start: 'self',
    duration: 1000,
    properties: [
      {
        startValue: -200,
        endValue: 250,
        property: 'translateY',
      },
    ],
  },
];

const Footer = () => (
  <Box as="footer" 
    position="relative"
    zIndex="1"
    textAlign="center"
    backgroundColor="black"
    h="100vh"
    w="100vw"
    overflow="hidden"
  >
    <Plx parallaxData={ parallaxData }>
      <Box
        position="relative"
        maxWidth="1080px"
        padding="0 10px"
        margin="0 auto"
      >
        <Box
          textAlign={{ base: "center", lg: "left" }}
          color="white"
          fontSize={{ base: "32px", lg: "76px" }}
          marginBottom={{ base: "10vh", lg: "20vh" }}
        >
          <Text 
            marginBottom={{ lg: "-25px" }}
          >
            Let's build your ideas
          </Text>
          <Link href={`mailto:${config.authorMail}`} target="_blank">
            <Box
              background={`linear-gradient(rgba(255,255,255,.25), rgba(255,255,255,.25))`}
              backgroundSize="100% 1px"
              backgroundPosition="0 100%"
              backgroundRepeat="no-repeat"
              display="inline-block"
            >
              <Text 
                fontWeight="200"
                background={`linear-gradient(white, white)`}
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
        <Flex
          w="100%"
          display={{ lg: "flex" }}
          justifyContent="space-between"
          textAlign={{ base: "center", lg: "left" }}
        >
          <Box mb="40px" maxWidth="300px" margin={{ base: "0 auto", lg: "initial" }}>
            <Image src={Profile} alt="Lisandro" title="😎" w={{ base: "70px", lg: "70px" }} borderRadius="50%" margin={{ base: "0 auto", lg: "initial" }} />
            <Text
              fontSize="14px"
              marginTop="20px"
              color={config.grayColor}
              textAlign={{ base: "center", lg: "left" }}
            >
              Website design and <Link to={config.githubProfile} target="_blank" style={{ textDecoration: 'underline' }}>dev by me</Link>{/* — Currently doing magic for <Link to={`${config.currentlyAtLink}`} target="_blank" style={{ textDecoration: 'underline' }}>{`${config.currentlyAt}`}</Link>. */}
              <Text
                color={config.backgroundColor}
                marginTop="20px"
              >
                Last update in {(new Date().getFullYear())}
              </Text>
            </Text>
          </Box>
          <Flex 
            textAlign="left" 
            fontSize="20px"
            color="white"
            w={{ base: "100%", lg: "25vw" }}
            mt="60px"
            justifyContent={{ base: "space-around", lg: "space-between" }}
          >
            <Box>
              <Link to={config.linkedinProfile} target="_blank">
                <Text 
                  background={`linear-gradient(white, white)`}
                  backgroundSize="0 1px"
                  backgroundPosition="0 100%"
                  backgroundRepeat="no-repeat"
                  transition=".4s"
                  _hover={{
                      backgroundSize: '100% 1px'
                  }}
                >
                  LinkedIn
                </Text>
              </Link>
              <Link to={config.behanceProfile} target="_blank">
                <Text 
                  mt="30px"
                  background={`linear-gradient(white, white)`}
                  backgroundSize="0 1px"
                  backgroundPosition="0 100%"
                  backgroundRepeat="no-repeat"
                  transition=".4s"
                  _hover={{
                      backgroundSize: '100% 1px'
                  }}
                >
                  Behance
                </Text>
              </Link>
            </Box>
            <Box>
              <Link to={config.githubProfile} target="_blank">
                <Text 
                  background={`linear-gradient(white, white)`}
                  backgroundSize="0 1px"
                  backgroundPosition="0 100%"
                  backgroundRepeat="no-repeat"
                  transition=".4s"
                  mt="30px"
                  _hover={{
                      backgroundSize: '100% 1px'
                  }}
                >
                  GitHub
                </Text>
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Plx>
  </Box>
)

export default Footer
