import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import resume from '../assets/Resume.pdf';
import '../styles/Navbar.css';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <section className="header-section">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand id="name" href="#home">Jane Adams</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mobile" />
          <Navbar.Collapse className=" " id="basic-navbar-nav">
            <Nav className="" id="navbar">
              <Nav.Link className="first" id="about-me-link" eventKey="link-1" href="#about-me">About Me</Nav.Link>
              <Nav.Link className="second" id="projects-link" eventKey="link-2" href="#projects">Portfolio</Nav.Link>
              <Nav.Link className="third" id="contact-link" eventKey="link-3" href="#contact" >Contact</Nav.Link>
              <Nav.Link  className="fourth" id="resume-link" eventKey="link-4" href={resume} target="_blank">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </section>
  );
}

export default BasicExample;