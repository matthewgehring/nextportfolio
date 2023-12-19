import React from 'react';
import {
    Button,
    Container,
    Flex,
    HStack,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react'

const SocialMedia = ({ imageUrl, linkUrl }) => {
  const containerStyle = {
    position: 'center',
    width: '100%%', // Adjust the size of the square as needed
    height: '100%',
  };

  const floatingCircleStyle = {
    position: 'absolute',
    bottom: '10px',
    left: '10px',
    width: '40px',
    height: '40px',
    backgroundColor: 'gray',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
          <Image
            alt={'Login Image'}
            fit={'cover'}
            w="100%"
            h="100%"
            src={
                imageUrl
            }
          /><a href={linkUrl} style={floatingCircleStyle}>
        →
      </a>
    </div>
  );
};

export default SocialMedia;