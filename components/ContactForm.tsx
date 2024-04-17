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
  clickedSubmit: boolean;
};

type FormErrors = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};
type State = {
  textAreaRows: number;
  errors: FormErrors;
};
class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      textAreaRows: 15, // Default rows count
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
    let height = 704;
    const widgetContainer = document.getElementById('widgetContainer');
    if (widgetContainer !== null) {
      height = widgetContainer.offsetHeight;
    }

    // const screenHeight = window.innerHeight;
    // const containerheight=Math.min(screenHeight*0.6,704)
    let rows = Number((height - 300) / 29) - 1;
    // console.log("containerheight",height)
    // console.log("rows",rows)
    // rows=2;
    // if (screenHeight > 900) {
    //   rows = 30;
    // } else if (screenHeight > 600) {
    //   rows = 20;
    // } else {
    //   rows = 2;
    // }

    this.setState({textAreaRows: rows});
    this.adjustTextAreaRows = this.adjustTextAreaRows.bind(this);
  };
  render() {
    const {
      handleChange,
      handleSubmit,
      firstName,
      lastName,
      email,
      message,
      clickedSubmit,
    } = this.props;
    const {textAreaRows, errors} = this.state;

    return (
      <Box
        as="form"
        // py={2}
        sx={{
          height: '100%',
          width: '100%',
        }}
      >
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
        <Flex
          sx={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            className="on-focus"
            name="firstName"
            id="firstName"
            mb={3}
            mr={3}
            p={1}
            sx={{
              borderStyle: !firstName && clickedSubmit ? 'solid' : 'none',
              borderRadius: '4px',
              bg: 'white',
              borderWidth: '1.5px',
              borderColor: !firstName && clickedSubmit ? 'red' : 'normal',
            }}
            value={firstName}
            placeholder="First Name"
            onChange={handleChange}
          />

          <Input
            className="on-focus"
            sx={{
              borderStyle: !lastName && clickedSubmit ? 'solid' : 'none',
              borderRadius: '4px',
              bg: 'white',
              borderWidth: '1.5px',
              borderColor: !lastName && clickedSubmit ? 'red' : 'normal',
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
          className="on-focus"
          sx={{
            borderStyle: !email && clickedSubmit ? 'solid' : 'none',
            borderRadius: '4px',
            bg: 'white',
            borderWidth: '1.5px',
            borderColor: !email && clickedSubmit ? 'red' : 'normal',
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
            borderStyle: !message && clickedSubmit ? 'solid' : 'none',
            borderRadius: '4px',
            bg: 'white',
            borderWidth: '1.5px',
            borderColor: !message && clickedSubmit ? 'red' : 'normal',
            resize: 'none',
          }}
          p={1}
          name="message"
          id="message"
          rows={textAreaRows}
          mb={0}
          value={message}
          placeholder="Message"
          onChange={handleChange}
        />
      </Box>
    );
  }
}

export default ContactForm;
