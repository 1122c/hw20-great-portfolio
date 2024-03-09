import { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name': // This case handles changes to the name input
        setName(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
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
            name="name"
            value={name}
            onChange={handleInputChange}
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
            value={message}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
