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
import Button from 'react-bootstrap/Button';

function Projects() {
  return (
   <section id="projects">
      <h1 className="projects text-center">projects</h1>
      <div id="projects" className="text-center">
      <Container>
      <Row className="moodie">
        <Col className="img-col" xs={6} md={6}>
          <Image className="moodie-img " src={moodie} alt="Moodie" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">moodie project description</p>
          <Button href="https://github.com/BrianPizz/caseCamels-Moodie.git">github repo</Button> <Button href="https://brianpizz.github.io/caseCamels-Moodie/">deployed site</Button>{' '}
        </Col>
      </Row>
      <Row className="tech-blog">
        <Col xs={6} md={6}>
          <p className="desc">techBlog project description</p>
          <Button href="https://github.com/janealexadams/tech-blog.git">github repo</Button> <Button href="https://dreadful-dungeon-10044-849ba164dcc5.herokuapp.com/">deployed site</Button>{' '}
        </Col>
        <Col className="img-col" xs={6} md={6}>
        <Image className="tech-blog-img" src={techBlog} alt="tech-blog" rounded />
        </Col>
      </Row>
      <Row className="weather-dashboard">
        <Col className="img-col" xs={6} md={6}>
          <Image className="weather-dashboard-img" src={weatherDashboard} alt="Weather Dashboard" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">weather dashbord project description</p>
          <Button href="https://github.com/janealexadams/weather-dashboard.git">github repo</Button> <Button href="https://janealexadams.github.io/weather-dashboard/">deployed site</Button>{' '}
        </Col>
      </Row>
      <Row className="note-taker">
        <Col xs={6} md={6}>
          <p className="desc">note taker project description</p>
          <Button href="https://github.com/janealexadams/note-taker.git">github repo</Button> <Button href="https://janealexadams.github.io/note-taker/">deployed site</Button>{' '}
        </Col>
        <Col className="img-col" xs={6} md={6}>
          <Image className="note-taker-img" src={noteTaker} alt="Note Taker" rounded />
        </Col>
      </Row>
      <Row className="code-quiz">
        <Col className="img-col" xs={6} md={6}>
          <Image className="code-quiz-img" src={codeQuiz} alt="Code Quiz" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc">code quiz project description</p>
          <Button href="https://github.com/janealexadams/code-quiz.git">github repo</Button> <Button href="https://janealexadams.github.io/code-quiz/">deployed site</Button>{' '}
        </Col>
      </Row>
    </Container>
      </div>
   </section>
  );
}

export default Projects;


