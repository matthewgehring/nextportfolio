import React from 'react';
import {
  Container,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';

export default function Hero() {
  return (
    <Stack maxH={'100%'} maxW={'100%'} zIndex={-5} direction={{ base: 'row', md: 'row' }}>
      <Container variant={'colorful'} maxH={'100%'} maxW={'100%'} zIndex={-5} p={0} m={0}>
        <Flex p={0} m={0} flex={1} align={'center'} justify={'center'} w="100%">
          <HStack spacing={2} w="100%" p={0} m={0} align="stretch">
            {/* Text section */}
            <Stack
              spacing={2}
              w={{ base: '50%', md: '50%' }}
              p={4}
              flexShrink={1} // Allow the text to shrink
              maxW={{ base: '50%', md: '50%' }} // Ensure it fills only half
            >
              <Text fontSize={{ base: 'sm', lg: 'lg' }} color={'gray.500'}>
                I'm{' '}
                <Text
                  color={'blue.200'}
                  as={'span'}
                  fontSize={{ base: 'lg', lg: 'xl' }}
                >
                  Matthew
                </Text>
                , a SF-based full stack developer. I excel at creating
                user-friendly, efficient, and innovative React, NextJS, and
                NodeJS applications. Outside of coding, my interests extend to
                music production and language learning. Let's build something
                impactful together.
              </Text>
            </Stack>
            {/* Image section */}
            <Flex
              flex={1}
              p={0}
              m={0}
              w="100%"
              maxW={{ base: '50%', md: '50%' }} // Keep the image half-width
            >
              <Image
                alt={'Profile Image'}
                fit={'cover'}
                w="100%"
                h="auto" // Allow height to adjust automatically
                src={'https://i.imgur.com/XCLF3lf.jpg'}
              />
            </Flex>
          </HStack>
        </Flex>
      </Container>
    </Stack>
  );
}
