// ContactForm.tsx
import React from 'react';
import {Box, Input, Textarea, Button, Flex, Heading} from 'theme-ui';

type Props = {
  handleSubmit: (formData: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }) => void;
};

type FormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type State = {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  };
  textAreaRows: number;
  errors: FormErrors;
};

class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
      textAreaRows: 15,
      errors: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    };
  }

  componentDidMount() {
    this.adjustTextAreaRows();
    window.addEventListener('resize', this.adjustTextAreaRows);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustTextAreaRows);
  }

  adjustTextAreaRows = () => {
    const widgetContainer = document.getElementById('widgetContainer');
    const height = widgetContainer ? widgetContainer.offsetHeight : 704;
    const rows = Math.max((height - 300) / 30 - 1, 2);
    this.setState({textAreaRows: rows});
  };

  validateInput = (name: string, value: string): string => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value.trim()) return 'This field cannot be empty.';
        break;
      case 'email':
        if (!value) return 'Email is required.';
        if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid.';
        break;
      case 'message':
        if (!value.trim()) return 'Message cannot be empty.';
        break;
      default:
        return '';
    }
    return '';
  };

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {name, value} = event.target;
    const error = this.validateInput(name, value);
    this.setState((prevState) => ({
      formData: {...prevState.formData, [name]: value},
      errors: {...prevState.errors, [name]: error},
    }));
  };

  render() {
    const {
      formData: {firstName, lastName, email, message},
      textAreaRows,
      errors,
    } = this.state;

    return (
      <Box as="form" sx={{height: '100%', width: '100%'}}>
        <Heading
          mt={3}
          mb={3}
          sx={{
            fontFamily: 'body',
            color: 'rgba(148, 148, 156, 1.0)',
            fontWeight: 400,
            fontSize: '18px',
          }}
        >
          Contact Us
        </Heading>
        <Flex sx={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Input
            className="on-focus"
            name="firstName"
            id="firstName"
            mb={3}
            mr={3}
            p={1}
            sx={{
              borderStyle: errors.firstName ? 'solid' : 'none',
              borderRadius: '4px',
              bg: 'white',
              borderWidth: '1.5px',
              borderColor: errors.firstName ? 'red' : 'normal',
            }}
            value={firstName}
            placeholder="First Name"
            onChange={this.handleChange}
            required
          />

          <Input
            className="on-focus"
            sx={{
              borderStyle: errors.lastName ? 'solid' : 'none',
              borderRadius: '4px',
              bg: 'white',
              borderWidth: '1.5px',
              borderColor: errors.lastName ? 'red' : 'normal',
            }}
            p={1}
            name="lastName"
            id="lastName"
            mb={3}
            value={lastName}
            placeholder="Last Name"
            onChange={this.handleChange}
          />
        </Flex>

        <Input
          className="on-focus"
          sx={{
            borderStyle: errors.email ? 'solid' : 'none',
            borderRadius: '4px',
            bg: 'white',
            borderWidth: '1.5px',
            borderColor: errors.email ? 'red' : 'normal',
          }}
          p={1}
          name="email"
          id="email"
          mb={3}
          type="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        />

        <Textarea
          className="on-focus"
          sx={{
            borderStyle: errors.message ? 'solid' : 'none',
            borderRadius: '4px',
            bg: 'white',
            borderWidth: '1.5px',
            borderColor: errors.message ? 'red' : 'normal',
          }}
          p={1}
          name="message"
          id="message"
          rows={textAreaRows}
          mb={3}
          value={message}
          placeholder="Message"
          onChange={this.handleChange}
        />
      </Box>
    );
  }
}

export default ContactForm;
