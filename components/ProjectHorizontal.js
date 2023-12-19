import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Spacer, Center } from '@chakra-ui/react'
import { Image, Heading, Stack, Text, Button, Divider, ButtonGroup} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react'
import { TbBrandNextjs } from "react-icons/tb";

const ProjectHorizontal = ({imageSrc, projectDescription}) => {

  const router = useRouter();
  const handleLearnMoreClick = () => {
    router.push('/projects/projectDetails');

  };
    return (
<Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  size={'lg'}
  borderRadius='25'
  style={{ height: '100%' }}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack p={0}>
    <CardBody>
      <Heading size='lg'>My Portfolio</Heading>

      <Text py='2'>
        Learn how I made this portfolio site.
      </Text>
      <Icon  boxSize={20} as={TbBrandNextjs} />
      <Divider variant='solid' color={'red.100'} w={'xl'}  />

      <ButtonGroup paddingTop={3} spacing='3'>
          <Button variant='solid' colorScheme='blue'>
            Visit
          </Button>
          <Button variant='solid' colorScheme='purple' onClick={handleLearnMoreClick}>
            Learn
          </Button>
          <Button variant='solid' colorScheme='green'>
            GitHub
          </Button>
        </ButtonGroup>

    </CardBody>

  </Stack>
</Card>
    )

}

export default ProjectHorizontal;
