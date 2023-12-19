import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Box, AbsoluteCenter, Heading, Container, Card } from '@chakra-ui/react';

const Blog = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Card 
    overflow='hidden'
    borderRadius='25'
    padding={3}
    style={{ height: '100%' }}
    >
    <Box position='relative' h='100px'>
    <AbsoluteCenter >
        <Heading size='md' paddingBottom={3}>Blog</Heading>
    </AbsoluteCenter>
    </Box>
        <Card>Hello</Card>
    </Card>
  );
};

export default Blog;
