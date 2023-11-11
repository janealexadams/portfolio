import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import moodie from '../assets/moodie.png';
import weatherDashboard from '../assets/weather-dashboard.png';
import noteTaker from '../assets/note-taker.png';
import codeQuiz from '../assets/code-quiz.png';
import techBlog from '../assets/tech-blog.png';
import Button from 'react-bootstrap/Button';
import '../styles/Projects.css';

function Projects() {
  return (
   <section id="projects">
      <h1 className="projects text-center">projects ~</h1>
      <div id="projects" className="text-center">
      <Container>
      <Row className="moodie">
        <Col className="img-col" xs={6} md={6}>
          <Image className="moodie-img " src={moodie} alt="Moodie" rounded />
        </Col>
        <Col xs={6} md={6}>
          <p className="desc"><b>project summary: </b>dinner and movie ideas are generated for the perfect night in. third-party apis are used to suggest movie titles based off of the user's response along with a dinner recipe.</p>
          <p className="desc"><b>tools: </b>javascript, jquery, bulma framework, yummly api, ott details api, html, css, google fonts.</p>
          <Button variant="outline-light" id="project-button" href="https://github.com/BrianPizz/caseCamels-Moodie.git">github repo</Button> <Button variant="outline-light" id="project-button" href="https://brianpizz.github.io/caseCamels-Moodie/">deployed site</Button>{' '}
        </Col>
      </Row>
      <Row className="tech-blog">
        <Col xs={6} md={6}>
          <p className="desc"><b>project summary: </b>this is a cms-style blog site similar to a wordpress site, where developers can publish their blog posts and comment on other developers’ posts. the app follows the mvc paradigm in its architectural structure, using handlebars.js as the templating language, sequelize as the ORM, and the express-session npm package for authentication.</p>
          <p className="desc"><b>tools: </b>mysql, express.js, sequalize, handlebars.js, javascript, css.</p>
          <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/tech-blog.git">github repo</Button> <Button variant="outline-light" id="project-button" href="https://dreadful-dungeon-10044-849ba164dcc5.herokuapp.com/">deployed site</Button>{' '}
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
          <p className="desc"><b>project summary: </b>this application retrieved weather data from a 5 day weather forecast application api. this weather dashboard runs in the browser and features dynamically updated html and css.</p>
          <p className="desc"><b>tools: </b>javascript, 5 day weather forecast api, bootstrap framework, html, css.</p>
          <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/weather-dashboard.git">github repo</Button> <Button variant="outline-light" id="project-button" href="https://janealexadams.github.io/weather-dashboard/">deployed site</Button>{' '}
        </Col>
      </Row>
      <Row className="note-taker">
        <Col xs={6} md={6}>
          <p className="desc"><b>project summary: </b>this application is used to write and save notes. using an express.js back end, this site will save and retrieve note data from a JSON file.</p>
          <p className="desc"><b>tools: </b>express.js, javascript, html, css.</p>
          <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/note-taker.git">github repo</Button> <Button variant="outline-light" id="project-button" href="https://janealexadams.github.io/note-taker/">deployed site</Button>{' '}
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
          <p className="desc"><b>project summary: </b>a timed coding quiz with multiple-choice questions. this app runs in the browser, and features dynamically updated html, css, javascript, and a responsive user interface. </p>
          <p className="desc"><b>tools: </b>javascript, css, html, google fonts.</p>
          <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/code-quiz.git">github repo</Button> <Button variant="outline-light" id="project-button" href="https://janealexadams.github.io/code-quiz/">deployed site</Button>{' '}
        </Col>
      </Row>
    </Container>
      </div>
   </section>
  );
}

export default Projects;


