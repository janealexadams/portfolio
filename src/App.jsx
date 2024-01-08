import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Navbar/>
      <Header/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
