import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Projects.css';
import codeMingle from '../assets/codeMingle.png';
import moodie from '../assets/moodie.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import noteTaker from '../assets/note-taker.png';
import codeQuiz from '../assets/code-quiz.png';

function Projects() {
  return (
   <section>
    <h1 className="projects">projects</h1>
    <Container>
      <Row>
        <Col xs={6} md={6}>
          <Image className="moodie" src={moodie} alt="Moodie" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">first project description</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          <p className="desc">second project description</p>
        </Col>
        <Col xs={6} md={6}>
        <Image className="codeMingle" src={codeMingle} alt="codeMingle" rounded />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          <Image className="weather-dashboard" src={weatherDashboard} alt="Weather Dashboard" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">third project description</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          <p className="desc">fourth project description</p>
        </Col>
        <Col xs={6} md={6}>
          <Image className="note-taker" src={noteTaker} alt="Note Taker" rounded />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={6}>
          <Image className="code-quiz" src={codeQuiz} alt="Code Quiz" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">fifth project description</p>
        </Col>
      </Row>
    </Container>
   </section>
  );
}

export default Projects;


