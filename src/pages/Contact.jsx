import { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

function Contact() { 
  const [email, setEmail] = useState(''); //hook to manage email field's state
  const [name, setName] = useState(''); //manage name field's state
  const [message, setMessage] = useState(''); // manage message field's state
  const [errorMessage, setErrorMessage] = useState(''); //manage error message's state

  //function managing form's input field
  const handleInputChange = (e) => {
    //destructuring to get name and value from event target (input fields)
    const { name, value } = e.target;
    //switch statement handle different input fields based on name
    switch (name) {
      case 'email':
        setEmail(value); //updates email state with new value
        break;
      case 'name': // This case handles changes to the name input
        setName(value); //updates name state
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break; //does nothing?
    }
  };

  //function to handle form submission event
  const handleFormSubmit = (e) => {
    e.preventDefault(); //prevents page reload

    if (!validateEmail(email) || !name) { //validates email checks if name is not empty
      setErrorMessage('Email or name is invalid');
      return; //exits function
    }

    // Clear the form fields and reset the error message after successful validation
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');

    // add further actions, such as sending the form data to a server
    // For demonstration purposes, an alert to confirm the form submission
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <h2>Contact Us</h2>
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleFormSubmit}> 
        <label>
          Name:
          <input
            type="text"
            name="name" //name atrribute used in switch statement
            value={name} //binds input value to name state
            onChange={handleInputChange} //assigns change event handler
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={message} //binds text area content to message state
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
