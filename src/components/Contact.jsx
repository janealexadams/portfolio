import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/contact.css';
import { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

   // Based on the input type, we set the state of either name, email, and message
   if (name === 'name') {
    setName(value);
  } else if (name === 'email') {
    setEmail(value);
  } else {
    setMessage(value);
  }
};

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();


      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
      }
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
      setName('');
      setEmail('');
      setMessage('');
    };

  return (
    <section>
        <h1 id="contact" className="contact text-center">contact me</h1>
        <div className="form">
        <Form onSubmit={handleFormSubmit}>
        <Row className="mb-3 w-50 p-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>name</Form.Label>
            <Form.Control 
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
             />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>email</Form.Label>
            <Form.Control 
              value={email}
              name="email"
              onChange={handleInputChange}
              type="text"
              placeholder="email"/>
            </Form.Group>
        </Row>
        <Form.Group className="mb-3 w-50 p-3" controlId="formGridAddress1">
            <Form.Label>message</Form.Label>
            <Form.Control 
              as="textarea" 
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="message"/>
        </Form.Group>

        <Button variant="primary" type="submit">
            get in touch
        </Button>
    </Form>
        </div>
    </section>
  );
}

export default Contact;


