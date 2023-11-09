import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styles/contact.css';

function Contact() {
  return (
    <section>
        <h1 className="contact">contact me</h1>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>name</Form.Label>
            <Form.Control type="email" placeholder="enter name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>email</Form.Label>
            <Form.Control type="password" placeholder="enter password" />
            </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>message</Form.Label>
            <Form.Control placeholder="hello!" />
        </Form.Group>

        <Button variant="primary" type="submit">
            get in touch
        </Button>
    </Form>
    </section>
  );
}

export default Contact;