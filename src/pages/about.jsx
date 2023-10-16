import React from "react";
import config from "../../data/SiteConfig";
import Plx from 'react-plx';

import Button from "../components/Button/Button";

import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  HStack
} from "@chakra-ui/react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import Vertical1 from "../images/lisandro.jpeg";
import Vertical2 from "../images/Vertical-About-2.jpg";
//import Horizontal from "../images/Horizontal-About.jpg";

import EddieBauer from "../images/Eddie Bauer.png";
import Burton from "../images/Burton.png";
import YETI from "../images/YETI.png";
import DSG from "../images/DSG.png";

const parallaxData = [
  {
    start: 'self',
    duration: 3000,
    properties: [
      {
        startValue: -200,
        endValue: 800,
        property: 'translateY',
      },
    ],
  },
];

const About = () => (
  <Layout 
    pageName="about"
  >
    {/* eslint-disable-next-line */}
    <SEO 
      title={`About me — ${config.siteTitle}`}
      description="Lisandro graduated as a multimedia designer and became a self-taught frontend developer, finding his passion in the middle of both fields: the product design."
    />
    <Header />
    <Box 
      textAlign="center"
      position="relative"
      zIndex="2"
      background="white"
    >
      <Box 
        maxWidth={{ md: "700px", lg: "1100px" }}
        padding={{ base: "0 20px", xl: '0' }} 
        margin="0 auto" 
        position="relative"
        pt={{ base: "100px", lg: "initial" }}
      >
        <Heading as="h2"
          fontSize={{ base: "32px", md: "48px", lg: "5.5vw"}}
          fontWeight="500"
          textAlign="left"
          maxWidth="90%"
          mt="20%"
          className="fadeIn d2"
        >
          “Every great design begins with an even better story”
        </Heading>
        <HStack mt={{ base: "30px", lg: "60px" }} spacing={{ base: "12px", lg: "30px" }} opacity=".25">
          <Image src={Burton} w={{ base: "90px", lg: "110px" }} className="fadeIn d3" />
          <Image src={YETI} w={{ base: "40px", lg: "60px" }} className="fadeIn d4" />
          <Image src={DSG} w={{ base: "50px", lg: "70px" }} className="fadeIn d5" />
          <Image src={EddieBauer} w={{ base: "90px", lg: "110px" }} className="fadeIn d6" />
        </HStack>
      </Box>
      <Box 
        maxWidth={{ md: "700px", lg: "1100px" }}
        padding={{ base: "0 20px", xl: '0' }} 
        margin="0 auto" 
        position="relative"
      >
        <Box
          textAlign="left"
          position="relative"
          mt={{ base: "60px", lg: "200px" }}
        >
          <Heading as="h4"
            fontSize="20px"
            position={{ lg: "absolute" }}
            top="10px"
          >
            Who am I
          </Heading>
          <Text
            maxWidth={{ lg: "50vw" }}
            fontSize={{ base: "21px", lg: "28px" }}
            lineHeight="150%"
            ml={{ lg: "28%" }}
            mt={{ base: "14px", lg: '0' }}
          >
            Lisandro Pat: that's me, also called Lichi <span role="img" aria-label="hi">👋</span>. I'm an argentinian designer working remotely on innovative projects focused on UX/UI and visual experiences using multiple creative disciplines which adapt to clients proposals.
          </Text>
          <Box ml={{ lg: "28%" }} mt="30px">
            <Button to="https://drive.google.com/file/d/1GFkQO7BbbGiattK61VyehXmk9D1RtdcF/view?usp=sharing" target="_blank">
              Download my resume <Text as="i" className="ri-download-2-line" position="relative" top="2px" marginLeft="10px" />
            </Button>
          </Box>
        </Box>
        <Flex justifyContent="space-between" mt="260px" display={{ base: 'none', lg: 'flex' }}>
          <Box
            h={{ base: "60vh", lg: "70vh" }}
            w={{ base: "110vw", lg: "48%" }}
            ml={{ base: '-10vw', lg: 'initial' }}
            overflow="hidden"
          >
            <Plx parallaxData={ parallaxData }>
              <Image src={Vertical1} transform="scale(1.5)" />
            </Plx>
          </Box>
          <Box
            h={{ base: "60vh", lg: "70vh" }}
            w={{ base: "110vw", lg: "48%" }}
            ml={{ base: '-10vw', lg: 'initial' }}
            overflow="hidden"
            position={{ lg: "relative" }}
            top={{ lg: "160px" }}
          >
            <Plx parallaxData={ parallaxData }>
              <Image src={Vertical2} transform="scale(1.5)" />
            </Plx>
          </Box>
        </Flex>
        <Box 
          mt={{ base: '100px', lg: "400px" }}
          mb={{ base: "150px", lg: "300px" }}
          ml={{ lg: '10vw' }}
          textAlign="left"
        >
          <Heading as="h3" fontSize={{ base: "36px", lg: "42px" }} fontWeight="400">
            The type of designer who's obsessed with making things harmonic, simple and obvious
          </Heading>
          <Text fontSize="21px" mt="60px" maxWidth={{ lg: "60vw" }}>
            I like to keep my workflow clean and organized, approaching design in a systematic and minimalistic way, emphasizing the maintenance and scalability of every visual language I develop. I pay careful attention to the smallest details, making sure that each element harmonizes with the overall visual identity.
          </Text>
        </Box>
      </Box>
    </Box>
    <Footer />
  </Layout>
)

export default About
