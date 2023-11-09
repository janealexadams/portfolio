import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import samplePDF1 from "./SamplePDF.pdf";


function Navbar() {
  return (
    <Nav className="justify-content-end" activeKey="/home">
    <Nav.Item>
      <Nav.Link eventKey="link-1">about me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">portfolio</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-3">contact</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link eventKey="link-4">resume</Nav.Link>
      <a href={samplePDF1} target="_blank"
            rel="noreferrer">
            Open First PDF
          </a>
    </Nav.Item>
  </Nav>
  );
}

export default Navbar;

