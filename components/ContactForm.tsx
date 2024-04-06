// ContactForm.tsx
import React from 'react';
import {Box, Input, Label, Textarea, Button, Flex, Heading} from 'theme-ui';
import DiscardIcon from './DiscardIcon';

type Props = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

class ContactForm extends React.Component<Props> {
  render() {
    const {
      handleChange,
      handleSubmit,
      firstName,
      lastName,
      email,
      message,
    } = this.props;

    return (
      <Box
        as="form"
        p={2}
        sx={{
          minHeight: '490px',
          minWidth: '376px',
        }}
      >
        <Heading
          mt={2}
          mb={3}
          sx={{
            fontFamily: 'body',
            color: 'rgba(148, 148, 156, 1.0)',
            fontWeight: 400,
          }}
        >
          Contact Us
        </Heading>
        <Flex
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            name="firstName"
            id="firstName"
            mb={3}
            mr={2}
            p={1}
            sx={{
              borderStyle: 'none',
              borderRadius: '0px',
              bg: 'white',
            }}
            value={firstName}
            placeholder="First Name"
            onChange={handleChange}
          />

          <Input
            sx={{
              borderStyle: 'none',
              borderRadius: '0px',
              bg: 'white',
            }}
            p={1}
            name="lastName"
            id="lastName"
            mb={3}
            value={lastName}
            placeholder="Last Name"
            onChange={handleChange}
          />
        </Flex>

        <Input
          sx={{
            borderStyle: 'none',
            borderRadius: '0px',
            bg: 'white',
          }}
          p={1}
          name="email"
          id="email"
          mb={3}
          type="email"
          value={email}
          placeholder="Email"
          onChange={handleChange}
        />

        {/* <Label htmlFor="message">Message</Label> */}
        <Textarea
          sx={{
            borderStyle: 'none',
            borderRadius: '0px',
            bg: 'white',
          }}
          p={1}
          name="message"
          id="message"
          rows={15}
          mb={2}
          value={message}
          placeholder="Message"
          onChange={handleChange}
        />
      </Box>
    );
  }
}

export default ContactForm;
