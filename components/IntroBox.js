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
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'} >
            I'm <Text color={'blue.200'} as={'span'} fontSize={{ base: 'xl', lg: 'xl' }}>
              Matthew
            </Text>, a SF based full stack developer. I excel at creating user-friendly, efficient, and innovative React, NextJS, and NodeJS applications. 
            Outside of coding, my interests extend to music production and language learning. Let's build something impactful together.
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