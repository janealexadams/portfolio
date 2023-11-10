import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import resume from '../assets/resume.pdf';


function Navbar() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="link-1" >about me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link eventKey="link-4" href={resume} target="_blank">resume</Nav.Link>
    </Nav.Item>
  </Nav>
  );
}

export default Navbar;

