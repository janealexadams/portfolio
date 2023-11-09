import Figure from 'react-bootstrap/Figure';
// import Col from 'react-bootstrap/Col';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Projects.css';

function Projects() {
  return (
   <section>
    <h1 className="projects">projects</h1>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
   </section>
  );
}

export default Projects;

