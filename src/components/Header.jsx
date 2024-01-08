import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import portrait from '../assets/portrait.png';
import '../styles/Header.css';

// Header with About Me section
function Header() {
    return (
        <section id="about-me">
            <Container className="header">
                <Row className="header text-center">
                    <Col className="text slide-in-left" xs={6} md={6}>
                        <p className="title ">Hello, I’m Jane!</p>
                        <p classname="blurb">I’m a full-stack web developer based in Los Angeles, CA. I have a passion for all things technology and design - I enjoy creating applications that make a difference with a functional user experience.</p>
                    </Col>
                    <Col xs={6} md={6}>
                        <Image className="portrait slide-in-right" src={portrait} alt="self portrait" roundedCircle />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
  
export default Header;


  
 