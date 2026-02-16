import Navbar from '../src/Components/Navbar/Navbar';
import About from '../src/Components/About/About';
import Skills from '../src/Components/Skills/Skills';
import Projects from '../src/Components/Projects/Projects';
import Experience from '../src/Components/Experience/Experience';
import Education from '../src/Components/Education/Education';
import Footer from '../src/Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

export default App;
