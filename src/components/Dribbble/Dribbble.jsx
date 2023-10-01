import React from "react";

import { GatsbyImage } from "gatsby-plugin-image";

import Button from "../Button/Button";

import {
  SimpleGrid,
  Link,
  Text,
  Box
} from '@chakra-ui/react';

import '../../styles/index.scss';

const Node = ({ node }) => (
    <Link
        href={node.url}
        target="_blank"
        overflow="hidden"
        mb="60px"
        role="group"
        _hover={{ textDecoration: 'none' }}
    >
        <Box
            maxHeight="300px"
            className="fadeIn"
            transition=".4s cubic-bezier(.5,0,.6,1)"
            overflow="hidden"
            _groupHover={{
                transform: 'scale(.975)'
            }}
        >
            <GatsbyImage 
                image={node.localCover.childImageSharp.gatsbyImageData} 
                //imgStyle={{ objectFit: 'cover' }} 
                style={{ minHeight: '100%' }}
            />
        </Box>
        <Box
            mt="30px"
        >
            <Text as="span" className="ri-dribbble-line" />
            <Text
                display="inline-block"
                ml="10px"
                position="relative"
                top="-2px"
            >
                {node.title}
            </Text>
        </Box>
    </Link>
)

export const DribbbleShots = ({ nodes }) => {
    return (
        <>
            <SimpleGrid  
                w="100%"
                spacing={{ base: '12px', lg: '24px' }}
                columns={{ base: '1', lg: '3' }}
            >
                {nodes.edges.map(dribbble => (
                    <Node key={dribbble.node.id} node={dribbble.node} />
                ))}
            </SimpleGrid>
            <Box textAlign="center" mt="60px">
                <Button to="https://dribbble.com/lisandropat" target="_blank">
                    View more Dribbble shots
                </Button>
            </Box>
        </>
    )
}