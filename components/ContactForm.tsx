import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({isVisible, onClose}) => {
  if (!isVisible) {
    return null;
  }

  // Add form submission logic here
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
    // Optionally close the form upon submission
    onClose();
  };

  const formStyle: React.CSSProperties = {
    // position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'rgb(245,245,245)',
    border: '1px solid #e6e6e6', // Adjust the color to match your chat theme
    borderRadius: '8px', // Rounded corners, adjust as necessary
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Drop shadow, adjust as necessary
    padding: '16px', // Space inside the borders, adjust as necessary
    margin: '8px', // Space outside the borders, to separate from other chat elements
    width: 'calc(100% - 16px)', // Adjust the width as necessary, minus paddings
    boxSizing: 'border-box', // Ensures padding is included in width
    // zIndex: 1000 // Ensure it's above other elements
    fontSize: '1em',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', // Take up all available horizontal space
    marginBottom: '8px', // Space between form elements
    padding: '10px', // Inner spacing of input and textarea elements
    borderRadius: '4px', // Rounded corners for inputs
    border: '1px solid #e6e6e6', // Border color for inputs
    boxSizing: 'border-box', // Ensures padding is included in width
  };

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '250px',
      }}
    >
      <div className={styles.flex_container} style={formStyle}>
        {/* <div className="mb-2">
          <i className="bi bi-x-lg" onClick={onClose} style={{ cursor: 'pointer' }}></i>
        </div> */}
        <div onClick={onClose} style={{cursor: 'pointer'}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>

        <p>Leave us a message and we will reply as soon as possible</p>

        <form onSubmit={handleSubmit}>
          <div className={styles.margin_bottom_3}>
            <input
              type="email"
              name="email"
              style={inputStyle}
              className="form-control"
              placeholder="john.doe@example.com"
              required
              aria-required="true"
            />
          </div>
          <div className={styles.margin_bottom_3}>
            <textarea
              name="leaveAMessage"
              style={inputStyle}
              className="form-control"
              placeholder="Leave a message"
              required
              aria-required="true"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{...inputStyle, cursor: 'pointer', marginLeft: 'auto'}}
              className={styles.primary_button}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
