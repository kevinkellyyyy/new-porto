import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Skill from "./components/Skill";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    let samt = 0;
      window.addEventListener('scroll', function() {
      samt <= 10 ? samt++ : Aos.refresh();
    });
  })

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
