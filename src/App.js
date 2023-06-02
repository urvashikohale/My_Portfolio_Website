import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Projects />
      <Skills />

      <Contact />
    </>
  );
};

export default App;
