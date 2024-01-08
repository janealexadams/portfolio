import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import moodie from '../assets/moodie.png';
import moodieGif from '../assets/moodie.gif';
import weatherDashboard from '../assets/weather.png';
import weatherDashboardGif from '../assets/weather.gif';
import noteTaker from '../assets/note-taker.png';
import noteTakerGif from '../assets/note-taker.gif';
import codeQuiz from '../assets/code-quiz.png';
import codeQuizGif from '../assets/code-quiz.gif';
import techBlog from '../assets/tech-blog.png';
import techBlogGif from '../assets/tech-blog.gif';
import Tinywear from '../assets/tinywear.png';
import TinywearGif from '../assets/tinywear.gif';
import EcommBackend from '../assets/ecomm-backend.png';
import EcommBackendGif from '../assets/ecomm-backend.gif';
import '../styles/Projects.css';

function Projects() {
  return (
   <section id="projects">
      <h1 className="projects text-center">- Projects -</h1>
      <div id="projects" className="text-center">
        <Container>
          {/* TinyWear */}
          <Row className="tinywear colu">
            <Col className="img-col" xs={6} md={6}>
              <Image className="tinywear-img" src={Tinywear} onMouseOver={e => e.currentTarget.src = TinywearGif} onMouseOut={e => e.currentTarget.src = Tinywear} alt="Tinywear" rounded/>
            </Col>
            <Col xs={6} md={6}>
              <p className="desc title">TinyWear</p>
              <p className="desc"><b>Project Summary: </b>This application is an interactive MERN stack multi-page ecommerce platform for toddler clothing, called Tinywear. With a focus on data and user demand, users are able to filter through category products (shirts, pants, sets) and checkout using Stripe's payment platform integration.</p>
              <p className="desc"><b>Tools: </b>React, GraphQL API, MongoDB and the Mongoose ODM for the database, Node.js, Express.js, Authentication (JWT), Tailwind CSS, Stripe payment platform, Bcrypt, CSS.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/ecomm-website.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://boiling-headland-88153-b07abae91420.herokuapp.com/" target="_blank">Deployed Site</Button>{' '}
            </Col>
          </Row>
          {/* Tech Blog */}
          <Row className="tech-blog colu">
            <Col xs={6} md={6}>
              <p className="desc title">Tech Blog</p>
              <p className="desc"><b>Project Summary: </b>This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developer's posts. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.</p>
              <p className="desc"><b>Tools: </b>MySQL2, Express.js, Sequelize, Handlebars.js, JavaScript, CSS.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/tech-blog.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://dreadful-dungeon-10044-849ba164dcc5.herokuapp.com/" target="_blank">Deployed Site</Button>{' '}
            </Col>
            <Col className="img-col" xs={6} md={6}>
              <Image className="tech-blog-img" src={techBlog} onMouseOver={e => e.currentTarget.src = techBlogGif} onMouseOut={e => e.currentTarget.src = techBlog} alt="tech-blog" rounded />
            </Col>
          </Row>
          {/* Moodie */}
          <Row className="moodie colu">
            <Col className="img-col" xs={6} md={6}>
              <Image className="moodie-img " src={moodie} onMouseOver={e => e.currentTarget.src = moodieGif} onMouseOut={e => e.currentTarget.src = moodie} alt="Moodie" rounded />
            </Col>
            <Col xs={6} md={6}>
              <p className="desc title">Moodie</p>
              <p className="desc"><b>Project Summary: </b>Dinner and movie ideas are generated for the perfect night in. Third-party APIs are used to suggest movie titles based off of the user's response along with a dinner recipe.</p>
              <p className="desc"><b>Tools: </b>JavaScript, jQuery, Yummly API, OTT Details API, Bulma CSS Framework, HTML, CSS, Google Fonts.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/BrianPizz/caseCamels-Moodie.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://brianpizz.github.io/caseCamels-Moodie/" target="_blank">Deployed Site</Button>{' '}
            </Col>
          </Row>
          {/* E-comm Backend */}
          <Row className="ecomm-backend colu">
            <Col xs={6} md={6}>
              <p className="desc title">E-Commerce Backend</p>
              <p className="desc"><b>Project Summary: </b>This project is a built out backend for an e-commerce site. Using a working Express.js API, it's configured to use Sequelize to interact with a MySQL2 database. Insomnia Core is used to retrieve routes for categories, products, and tags displayed in a formatted JSON.</p>
              <p className="desc"><b>Tools: </b>Express.js, MySQL2, Node.js, Sequelize, dotenv.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/e-commerce-back-end.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://drive.google.com/file/d/1PH3Mapn-m99lcbMTa05YOtLRnA0rlc87/view?usp=sharing" target="_blank">Walkthrough Video</Button>{' '}
            </Col>
            <Col className="img-col" xs={6} md={6}>
              <Image className="ecomm-backend-img" src={EcommBackend} onMouseOver={e => e.currentTarget.src = EcommBackendGif} onMouseOut={e => e.currentTarget.src = EcommBackend} alt="E-Commerce Backend" rounded />
            </Col>
          </Row>
          {/* Weather Dashboard */}
          <Row className="weather-dashboard colu">
            <Col className="img-col" xs={6} md={6}>
              <Image className="weather-dashboard-img" src={weatherDashboard} onMouseOver={e => e.currentTarget.src = weatherDashboardGif} onMouseOut={e => e.currentTarget.src = weatherDashboard} alt="Weather Dashboard" rounded />
            </Col>
            <Col xs={6} md={6}>
              <p className="desc title">Weather Dashboard</p>
              <p className="desc"><b>Project Summary: </b>This application retrieves weather data from a 5 Day Weather Forecast API. Recent search results are stored in local storage and are accessible to the user.</p>
              <p className="desc"><b>Tools: </b>JavaScript, 5 day weather forecast API, Bootstrap Framework, CSS, HTML.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/weather-dashboard.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://janealexadams.github.io/weather-dashboard/" target="_blank">Deployed Site</Button>{' '}
            </Col>
          </Row>
          {/* Note Taker */}
          <Row className="note-taker colu">
            <Col xs={6} md={6}>
              <p className="desc title">Note Taker</p>
              <p className="desc"><b>Project Summary: </b>This application is used to write and save notes. Using an Express.js back end, this site will save and retrieve note data from a JSON file.</p>
              <p className="desc"><b>Tools: </b>Express.js, JavaScript, CSS, HTML.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/note-taker.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://fast-stream-88512-4a2f772d1858.herokuapp.com" target="_blank">Deployed Site</Button>{' '}
            </Col>
            <Col className="img-col" xs={6} md={6}>
              <Image className="note-taker-img" src={noteTaker} onMouseOver={e => e.currentTarget.src = noteTakerGif} onMouseOut={e => e.currentTarget.src = noteTaker} alt="Note Taker" rounded />
            </Col>
          </Row>
          {/* Code Quiz  */}
          <Row className="code-quiz colu">
            <Col className="img-col" xs={6} md={6}>
              <Image className="code-quiz-img" src={codeQuiz} onMouseOver={e => e.currentTarget.src = codeQuizGif} onMouseOut={e => e.currentTarget.src = codeQuiz} alt="Code Quiz" rounded />
            </Col>
            <Col xs={6} md={6}>
              <p className="desc title">Code Quiz</p>
              <p className="desc"><b>Project Summary: </b>This application is a timed coding quiz with multiple-choice questions. This app runs in the browser, and features dynamically updated JavaScript, CSS, HTML, and a responsive user interface. </p>
              <p className="desc"><b>Tools: </b>JavaScript, CSS, HTML, Google Fonts.</p>
              <Button variant="outline-light" id="project-button" href="https://github.com/janealexadams/code-quiz.git" target="_blank">GitHub Repo</Button> <Button variant="outline-light" id="project-button" href="https://janealexadams.github.io/code-quiz/" target="_blank">Deployed Site</Button>{' '}
            </Col>
          </Row> 
        </Container>
      </div>
    </section>
  );
}

export default Projects;