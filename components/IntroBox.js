import React from 'react';
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function Hero() {
  return (
    
    <Stack maxH={'100%'} maxW={'100%'}  zIndex={-5} direction={{ base: 'column', md: 'row' }}>
    <Container variant={'bold'} maxH={'100%'} maxW={'100%'}  zIndex={-5} direction={{ base: 'column', md: 'row' }}>
    
      <Flex p={4} flex={1} align={'center'} justify={'rioght'}>
        <Stack spacing={4} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '1xl', md: '2xl', lg: '1xl' }}>
            <Text color={'blue.500'} as={'span'}>
              Matthew Gehring
            </Text>{' '}

            <br />{' '}
            <Text color={'blue.300'} as={'span'}>
              Web Developer
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'sm' }} color={'gray.500'}>
          I'm a full stack developer living in San Francisco. My expertise is in building user-friendly, efficient, and innovative React, NextJS, and NodeJS applications. 
          Outside of coding, my interests extend to Music Production and Language Learning. Let's collaborate to build something impactful.</Text>
        </Stack>
      <Flex flex={1} align={'right'}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          maxH={'100%'}
          maxW={'100%'}
          src={
            'https://i.imgur.com/XCLF3lf.jpg'
          }
        />
      </Flex>
      </Flex>
    </Container>
    </Stack>
      
  )
}