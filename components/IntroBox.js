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

export default function Hero() {
  return (
    
<Stack maxH={'100%'} maxW={'100%'} zIndex={-5} direction={{ base: 'column', md: 'row' }}>
  <Container variant={'colorful'} maxH={'100%'} maxW={'100%'} zIndex={-5} direction={{ base: 'column', md: 'row' }} p={0} m={0}>
    <Flex p={0} m={0} flex={1} align={'center'} justify={'center'} w="100%">
      <HStack spacing={2} w="100%" p={0} m={0}>
        <Stack spacing={2} w={{ base: 'full', md: '50%' }} p={4} m={0}>
          <Heading justify={'center'} align={'center'} fontSize={{ base: '1xl', md: '2xl', lg: '1xl' }}>
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
            Outside of coding, my interests extend to music production and language learning. Let's collaborate to build something impactful.
          </Text>
        </Stack>
        <Flex flex={1} p={0} m={0} w="100%">
          <Image
            alt={'Login Image'}
            fit={'cover'}
            w="100%"
            h="100%"
            src={
              'https://i.imgur.com/XCLF3lf.jpg'
            }
          />
        </Flex>
      </HStack>
    </Flex>
  </Container>
</Stack>


      
  )
}