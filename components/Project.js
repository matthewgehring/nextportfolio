import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Spacer } from '@chakra-ui/react'
import { Image, Heading, Stack, Text, Button, Divider, ButtonGroup} from '@chakra-ui/react';
const Project = ({imageSrc, projectDescription}) => {
    return (
    <Card size={'lg'}>
      <CardBody>
        <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='8' mb='8' spacing='2'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            Tools here
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='3'>
          <Button variant='solid' colorScheme='blue'>
            Visit
          </Button>
          <Button variant='solid' colorScheme='purple'>
            Learn
          </Button>
          <Button variant='solid' colorScheme='green'>
            GitHub
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    )

}

export default Project;
