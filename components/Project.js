import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Spacer } from '@chakra-ui/react'
import { Img, Heading, Stack, Text, Button, Divider, ButtonGroup} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Icon } from '@chakra-ui/react'
import { TbBrandNextjs } from "react-icons/tb";
import Image from 'next/image'

const Project = ({projectTitle, image, projectDescription}) => {

  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/projects/projectDetails');

  };
    return (
    <Card size={'lg'}>
      <CardBody>
        <Image
          src={image}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='8' mb='8' spacing='2'>
          <Heading size='md'>{projectTitle}</Heading>
          <Text>
            {projectDescription}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
          <Icon  boxSize={20} as={TbBrandNextjs} />
          </Text>
          <Divider variant='solid'/>

          <ButtonGroup spacing='3'>
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
        </Stack>
      </CardBody>

    </Card>
    )

}

export default Project;
