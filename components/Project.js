import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Image, Heading, Stack, Text, Button, Divider, ButtonGroup, Icon } from '@chakra-ui/react';
import { TbBrandNextjs } from "react-icons/tb";
import { useRouter } from 'next/router';

const Project = ({ projectTitle, image, projectDescription }) => {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push('/projects/projectDetails');
  };

  return (
    <Card size={'lg'}>
      {/* Image fills the top of the card and has border radius */}
      <Image
        src={image}
        alt={projectTitle}
        objectFit="cover"
        width="100%"
        borderTopRadius="lg" // Apply border radius to the top
      />
      <CardBody>
        <Stack mt="8" mb="8" spacing="2">
          <Heading size="md">{projectTitle}</Heading>
          <Text>{projectDescription}</Text>
          <Text color="blue.600" fontSize="2xl">
            <Icon boxSize={20} as={TbBrandNextjs} />
          </Text>
          <Divider variant="solid" />
          <ButtonGroup spacing="3">
            <Button variant="solid" colorScheme="blue">
              Visit
            </Button>
            <Button variant="solid" colorScheme="purple" onClick={handleLearnMoreClick}>
              Learn
            </Button>
            <Button variant="solid" colorScheme="green">
              GitHub
            </Button>
          </ButtonGroup>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Project;
