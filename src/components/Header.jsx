import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import portrait from '../assets/portrait.png';
import '../styles/Header.css';

function Header() {
    return (
        <section id="about-me">
            <Container className="header">
                <Row className="header text-center">
                    <Col xs={6} md={6}>
                        <p className="about-me">hello, i’m jane! i’m a full stack web developer based in los angeles, ca.</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <Image className="portrait" src={portrait} alt="self portrait" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </section>


    );
  }
  
  export default Header;


  
 