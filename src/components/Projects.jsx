import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Projects.css';
import moodie from '../assets/moodie.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import noteTaker from '../assets/note-taker.png';
import codeQuiz from '../assets/code-quiz.png';
import techBlog from '../assets/tech-blog.png';

function Projects() {
  return (
   <section>
      <h1 className="projects text-center">projects</h1>
      <div id="projects" className="text-center">
      <Container>
      <Row className="moodie">
        <Col xs={6} md={6}>
          <Image className="moodie-img" src={moodie} alt="Moodie" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">moodie project description</p>
        </Col>
      </Row>
      <Row className="tech-blog">
        <Col xs={6} md={6}>
          <p className="desc">techBlog project description</p>
        </Col>
        <Col xs={6} md={6}>
        <Image className="tech-blog-img" src={techBlog} alt="tech-blog" rounded />
        </Col>
      </Row>
      <Row className="weather-dashboard">
        <Col xs={6} md={6}>
          <Image className="weather-dashboard-img" src={weatherDashboard} alt="Weather Dashboard" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">weather dashbord project description</p>
        </Col>
      </Row>
      <Row className="note-taker">
        <Col xs={6} md={6}>
          <p className="desc">note taker project description</p>
        </Col>
        <Col xs={6} md={6}>
          <Image className="note-taker-img" src={noteTaker} alt="Note Taker" rounded />
        </Col>
      </Row>
      <Row className="code-quiz">
        <Col xs={6} md={6}>
          <Image className="code-quiz-img" src={codeQuiz} alt="Code Quiz" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">code quiz project description</p>
        </Col>
      </Row>
    </Container>
      </div>
   </section>
  );
}

export default Projects;


