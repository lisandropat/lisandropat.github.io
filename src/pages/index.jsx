/* eslint-disable */

import React from "react";
import { Link, graphql } from "gatsby";
import config from "../../data/SiteConfig";
import Plx from 'react-plx';

import {
  Box,
  Heading,
  Text,
  Image
} from "@chakra-ui/react";

import Button from "../components/Button/Button";

import { DribbbleShots } from "../components/Dribbble/Dribbble";
import VideoMouse from "../components/VideoMouse/VideoMouse";

import Layout from "../components/Layout/Layout";
import SEO from "../components/SEO/SEO";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import FirstProject from "../images/burton.jpg";
import SecondProject from "../images/elatamtv.jpg";

const parallaxData = [
  {
    start: 'self',
    duration: 3000,
    properties: [
      {
        startValue: -100,
        endValue: 800,
        property: 'translateY',
      },
    ],
  },
];

const Index = ({ data: { allDribbbleShot } }) => {
  return(
    <Layout 
      pageName="landing"
    >
      {/* eslint-disable-next-line */}
      <SEO 
        title={`${config.siteTitle} — Designer`}
        description={config.siteDescription}
      />
      <Header />
      <Box 
        textAlign="center"
        position="relative"
        zIndex="2"
        background="white"
      >
        <Box 
          height={{ lg: "100vh" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          m={{ base: "120px 20px 80px 20px", md: "initial" }}
        >
          <Heading as="h2"
            fontSize={{ base: "3rem", md: '4rem', lg: "6rem" }}
            userSelect="none"
            fontWeight={500}
            textAlign="left"
          >
            <Text as="span" className="masked-entrance">Hi,</Text> <Text as="span" className="masked-entrance d1">I'm</Text> <Text as="span" className="masked-entrance d2"><Box as="span" className="video-hover" data-video-src="lichi"><span /><Link to="/about">Lichi</Link></Box>,</Text><br/>
            <Text as="span" className="masked-entrance d3">I create</Text> <Text as="span" className="masked-entrance d4">value</Text> <Text as="span" className="masked-entrance d5">through</Text> <Text as="span" className="masked-entrance d6"><Box as="span" className="video-hover" data-video-src="design"><span /><Link to="https://www.behance.net/lisandropat" target="_blank">design</Link></Box>.</Text>
          </Heading>
          <VideoMouse />
        </Box>
        <Box 
          maxWidth={{ md: "700px", lg: "1100px" }}
          padding={{ base: "0 20px", xl: '0' }} 
          margin="0 auto" 
          position="relative"
          textAlign="left"
        >
          <Heading as="h4" 
            fontSize={{ base: "16px", lg: "21px" }}
            fontWeight="400"
            mb={{ base: "48px", lg: "10vh" }}
          >
            Featured projects
          </Heading>
          <Link to="https://www.behance.net/gallery/165910833/Burton-Rentals-Ecommerce-UIUX-Design" target="_blank">
            <Box
              position="relative"
              height={{ lg: "100vh" }}
              role="group"
            >
              <Box
                position={{ lg: "absolute" }}
                h={{ base: "60vh", lg: "94vh" }}
                w={{ base: "110vw", md: "100%", lg: "42%" }}
                ml={{ base: '-10vw', md: 'initial' }}
                right={{ lg: '0' }}
                overflow="hidden"
              >
                <Plx parallaxData={ parallaxData }>
                  <Image src={FirstProject} transform="scale(1.5)" />
                </Plx>
              </Box>
              <Box
                position={{ lg: "absolute" }}
                top={{ lg: "50%" }}
                transform={{ lg: "translateY(-90%)" }}
                mt={{ base: "40px", lg: 'initial' }}
              >
                <Text 
                  fontWeight={{ base: "700", lg: "400" }} 
                  fontSize="21px"
                  background={`linear-gradient(black, black)`}
                  backgroundSize="0 1px"
                  backgroundPosition="0 100%"
                  backgroundRepeat="no-repeat"
                  transition=".4s"
                  display="inline-block"
                  _groupHover={{
                      backgroundSize: '100% 1px'
                  }}
                >
                  Burton Rentals
                </Text>
                <Text 
                  fontSize={{ base: "21px", lg: "36px" }} 
                  lineHeight={{ lg: "133%" }} 
                  mt={{ base: "14px", lg: "30px"}}
                >
                  Get premium gear <br/>at a fraction of the price
                </Text>
                <Text fontSize="16px" mt="21px">Read case study ⎯</Text>
              </Box>
            </Box>
          </Link>
          <Link to="https://www.behance.net/gallery/125267739/eLatamTV-UXUI-Esports-Gaming-Platform" target="_blank">
            <Box
              position="relative"
              height={{ lg: "100vh" }}
              mt="80px"
              role="group"
            >
              <Box
                position={{ lg: "absolute" }}
                h={{ base: "60vh", lg: "94%" }}
                w={{ base: "110vw", md: "100%", lg: "42%" }}
                ml={{ base: '-10vw', md: 'initial' }}
                overflow="hidden"
              >
                <Plx parallaxData={ parallaxData }>
                  <Image src={SecondProject} transform="scale(1.5)" />
                </Plx>
              </Box>
              <Box
                position={{ lg: "absolute" }}
                top={{ lg: "50%" }}
                right={{ lg: "6.5%" }}
                transform={{ lg: "translateY(-90%)" }}
                mt={{ base: "40px", lg: 'initial' }}
              >
                <Text 
                  fontWeight={{ base: "700", lg: "400" }} 
                  fontSize="21px"
                  background={`linear-gradient(black, black)`}
                  backgroundSize="0 1px"
                  backgroundPosition="0 100%"
                  backgroundRepeat="no-repeat"
                  transition=".4s"
                  display="inline-block"
                  _groupHover={{
                      backgroundSize: '100% 1px'
                  }}
                >
                  eLatamTV
                </Text>
                <Text 
                  fontSize={{ base: "21px", lg: "36px" }} 
                  lineHeight={{ lg: "133%" }} 
                  mt={{ base: "14px", lg: "30px"}}
                >
                  Tracking all Esports <br/>in a single platform
                </Text>
                <Text fontSize="16px" mt="21px">Read case study ⎯</Text>
              </Box>
            </Box>
          </Link>
          <Box textAlign="center" mt="60px" mb={{ base: "60px", lg: "0" }}>
              <Button to="https://www.behance.net/collection/199566213/UXUI-Portfolio" target="_blank">
                  View more projects
              </Button>
          </Box>
        </Box>
        <Box 
          maxWidth={{ md: "700px", lg: "1100px" }}
          padding={{ base: "20px 20px 220px 20px", xl: '220px 0' }} 
          margin="0 auto" 
          position="relative"
          textAlign="left"
        >
          <Heading as="h3" fontSize={{ base: "42px", lg: "80px" }} fontWeight="400">
            Dribbble Shots
          </Heading>
          <Text fontSize="21px" mt="60px" maxWidth={{ lg: "60vw" }}>
            I love crafting new ideas, devoting myself to development and design. It’s my way of creating products that your users will love. Dribbble is where I share all my sketches and sneak-peeks of my projects.
          </Text>
          <Box mt="100px">
            <DribbbleShots nodes={allDribbbleShot} />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query DribbbleQuery {
    allDribbbleShot(sort: {order: DESC, fields: published}, limit: 6) {
      edges {
        node {
          url
          id
          title
          localCover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Index
