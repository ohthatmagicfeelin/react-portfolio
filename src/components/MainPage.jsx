import About from './mainPage/About';
import Projects from './mainPage/Projects';
import Contact from './mainPage/Contact';

const mainPage = ({ projects }) => {
  return (
    <>
    <About />
    <Projects projects={projects} />
    <Contact />
    </>
  );
};

export default mainPage;