import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Project from './components/Project';
import Skills from './components/Skills';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
