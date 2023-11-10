
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHub from '../assets/GitHub-Logo.png'
import LinkedIn from '../assets/LinkedIn-Logo.png'
import '../styles/Footer.css';

function Footer() {
    return (
        <section className="footer">
            <a href='https://github.com/janealexadams'
            target="_blank"
            rel="noreferrer">
                <img src={GitHub} ></img></a>
            <a href='https://www.linkedin.com/in/jane-adams-bb8870158/'
            target="_blank"
            rel="noreferrer">
                <img src={LinkedIn} ></img></a>
        </section>
    );
  }
  
  export default Footer;