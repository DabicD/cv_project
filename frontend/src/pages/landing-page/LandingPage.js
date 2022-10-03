import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Skills from '../../components/skills/Skills';
import Technologies from '../../components/technologies/Technologies';

const LandingPage = () => {
  return (
    <>
      <Header/>
      <main>
        <Intro id="aboutme" className="pt-10"/>
        <Skills id="skills" className="pt-0"/>
        <Technologies id="technologies" className="pt-10"/>
      </main>
    </>
  );
};

export default LandingPage;
