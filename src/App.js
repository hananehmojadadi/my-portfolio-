import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;

