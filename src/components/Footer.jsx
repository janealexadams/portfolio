import 'bootstrap/dist/css/bootstrap.min.css';
import GitHub from '../assets/GitHub-Logo.png'
import LinkedIn from '../assets/LinkedIn-Logo.png'
import '../styles/Footer.css';

// Footer with GitHub and LinkedIn links
function Footer() {
    return (
        <div>
            <section className="footer">
                <a href='https://github.com/janealexadams'
                target="_blank"
                rel="noreferrer">
                <img className="img" src={GitHub} ></img></a>
                <a href='https://www.linkedin.com/in/jane-adams-bb8870158/'
                target="_blank"
                rel="noreferrer">
                <img className="img" src={LinkedIn} ></img></a>
            </section>
            <div id="closing">
                <br id="br"></br>
                <a href='janealexadams@gmail.com' id="email">janealexadams@gmail.com</a>
                <h1 id="closing">Created by Jane Adams 2023</h1>
            </div>
        </div>
    );
}
  
export default Footer;