import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Flex, FormControl, FormLabel, Input, Textarea, Button, Heading } from '@chakra-ui/react';

const Contact = () => {
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
    <Heading size='md' paddingBottom={3} >Contact Me</Heading>
      <FormControl as="form" ref={form} onSubmit={sendEmail}>
        <Flex gap={4} mb={4}>
          <Flex direction="column" flex={1}>
            <Input type="text" name="user_name" id="user_name" FormLabel='Name' placeholder='Name' />
          </Flex>
          <Flex direction="column" flex={1}>
            <Input type="email" name="user_email" id="user_email" FormLabel='email' placeholder='Email' />
          </Flex>
        </Flex>
        <Textarea name="message" id="message" resize={'None'} placeholder='Message'/>
        <Flex justifyContent="center" mt={4}>
          <Button variant='outline' type="submit">Submit</Button>
        </Flex>
      </FormControl>
    </Card>
  );
};

export default Contact;
