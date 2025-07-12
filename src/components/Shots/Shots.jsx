import React from "react";

import {
  Image,
  Box,
  Flex,
  Text
} from '@chakra-ui/react';

import Shot from './Shot';

import Shot01 from '../../images/shots/Shot-01.jpg';
import Shot02 from '../../images/shots/Shot-02.jpg';
import Shot03 from '../../images/shots/Shot-03.jpg';
import Shot04 from '../../images/shots/Shot-04.jpg';
import Shot05 from '../../images/shots/Shot-05.jpg';
import Shot06 from '../../images/shots/Shot-06.jpg';
import Shot07 from '../../images/shots/Shot-07.jpg';
import Shot09 from '../../images/shots/Shot-09.jpg';
import Shot10 from '../../images/shots/Shot-10.jpg';
import Shot11 from '../../images/shots/Shot-11.jpg';
import Shot12 from '../../images/shots/Shot-12.jpg';
import Shot13 from '../../images/shots/Shot-13.jpg';

const Shots = () => (
    <Box overflowX="scroll" padding={{ base: "0 5vw", lg: "0 12vw"}} className="hide-scrollbar">
        <Flex 
            gap={{ base: "24px", lg: "64px" }}
            width="max-content"
        >
            <Shot
                shotImage={Shot01}
                shotDescription="AR integration to renting app"
            />
            <Shot
                shotImage={Shot02}
                shotDescription="Renting app concept"
            />
            <Shot
                shotImage={Shot03}
                shotDescription="Eco-friendly bottles product page"
            />

            <Shot
                shotImage={Shot04}
                shotDescription="Car renting homepage"
            />

            <Shot
                shotImage={Shot05}
                shotDescription="Hasselblad homepage proposal"
            />

            <Shot
                shotImage={Shot06}
                shotDescription="Rental/Resale B2B homepage"
            />

            <Shot
                shotImage={Shot07}
                shotDescription="Rehearsal Room renting map"
            />

            <Shot
                shotImage={Shot09}
                shotDescription="Search component app integration"
            />

            <Shot
                shotImage={Shot10}
                shotDescription="Extended map search app integration"
            />

            <Shot
                shotImage={Shot11}
                shotDescription="Filters component app integration"
            />

            <Shot
                shotImage={Shot12}
                shotDescription="Rehearsal Room administration web app"
            />

            <Shot
                shotImage={Shot13}
                shotDescription="Responsive adaptation for dashboard"
            />
        </Flex>
    </Box>
)

export default Shots
