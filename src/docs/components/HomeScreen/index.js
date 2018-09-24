import React from 'react'
import Text from './../Text';
import { Flex, Box } from 'rebass'
import { Link } from "react-router-dom";

const demos = [
  {
    id: 1,
    label: 'API Demo',
    description: 'Play around with the available props to see if <LaneLayout/> fits your needs.',
    link: '/api-demo'
  },
  {
    id: 2,
    label: 'Minimal Example',
    description: 'A minimal example with no ItemRenderer, just plain items with ratios, debug outlines and endless scroll.',
    link: '/minimal-example'
  },
  {
    id: 3,
    label: 'Photo Stream',
    description: 'And endless stream of photos. Uses react-motion to add an entrance-animation. For performance reason images are sampled and repeated.',
    link: '/photo-stream'
  },
  {
    id: 4,
    label: 'Brand Stormer',
    description: 'Uses Google Fonts and randomness to generate fancy "logos".',
    link: '/brand-stormer'
  }
];


const Home = () => (
  <div>

    <Flex is='ul' flexDirection={"column"} m={4}>
      <Box mb={5}>
        <Text fontWeight="bold" block fontSize={5} is='h2'>Demos</Text>
        <p>These are the available demos. The source-code is available in the <Text fontWeight="bold">/src/docs/demos</Text> folder of the repository.</p>
      </Box>
      {demos.map(demo=>(
        <Box is={"li"} mb={4}>
          <Link to={demo.link}>
          <Text fontWeight="bold" block fontSize={3} is='h3'>{demo.label}</Text>
          </Link>
          <Text is='p'>{demo.description}</Text>
        </Box>
      ))}
    </Flex>
  </div>
);

export default Home;