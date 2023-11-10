import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import resume from '../assets/resume.pdf';


function Navbar() {
  return (
    <section className="header-section">
      <h1 id="name">jane adams</h1>
    <Nav id="navbar">
    <Nav.Item>
      <Nav.Link id="about-me" eventKey="link-1" href="#about-me">about me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link id="projects" eventKey="link-2" href="#projects">portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link id="contact" eventKey="link-3" href="#contact" >contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link id="resume" eventKey="link-4" href={resume} target="_blank">resume</Nav.Link>
    </Nav.Item>
  </Nav>
    </section>
  );
}

export default Navbar;

