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
  measureSingleRowHeight() {
    // Create a temporary div element to measure the text height
    const tempDiv = document.createElement('div');
    const tempText = document.createTextNode('A'); // Single line of text

    tempDiv.appendChild(tempText);
    document.body.appendChild(tempDiv);

    // Apply styles to mimic those of the Textarea
    tempDiv.style.position = 'absolute';
    tempDiv.style.visibility = 'hidden'; // Make sure it doesn't show on screen
    tempDiv.style.borderStyle = 'solid';
    tempDiv.style.borderWidth = '1.5px';
    tempDiv.style.borderColor = 'red'; // Assume clickedSubmit is true for example
    tempDiv.style.borderRadius = '4px';
    tempDiv.style.background = 'white';
    tempDiv.style.padding = '1'; // Same as padding 'p' value in sx
    tempDiv.style.fontSize = '16px'; // Assume default browser font size, adjust as needed
    tempDiv.style.fontFamily = 'sans-serif'; // Use a generic font family, adjust as needed
    tempDiv.style.whiteSpace = 'nowrap'; // Single line

    // Measure the height
    const height = tempDiv.offsetHeight;

    // Clean up by removing the element from the DOM
    document.body.removeChild(tempDiv);

    return height;
  }
  adjustTextAreaRows = () => {
    let height = 704;
    const widgetContainer = document.getElementById('widgetContainer');
    if (widgetContainer !== null) {
      height = widgetContainer.offsetHeight;
    }

    // const screenHeight = window.innerHeight;
    // const containerheight=Math.min(screenHeight*0.6,704)

    // Use the function to log the height of a single text row
    console.log('Height of a single text row:', this.measureSingleRowHeight());
    console.log('Height:', height);
    let row_static = 0;
    let rows_calculated = 0;
    if (height > 700) {
      row_static = 15;
    } else if (height > 650) {
      row_static = 12;
    } else if (height > 600) {
      row_static = 11;
    }
    rows_calculated = Math.floor((height - 300) / 27);
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
    console.log('rows_calculated', rows_calculated);
    console.log('row_static', row_static);
    this.setState({textAreaRows: Math.max(rows_calculated, row_static)});
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
