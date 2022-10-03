import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';
import Skills from '../../components/skills/Skills';
import Technologies from '../../components/technologies/Technologies';
import Footer from '../../components/footer/Footer';

const LandingPage = () => {
  return (
    <>
      <Header/>
      <main>
        <Intro id="aboutme" className="pt-10"/>
        <Skills id="skills" className="pt-10"/>
        <Technologies id="technologies" className="pt-10"/>
      </main>
      <Footer id="footer" className="mt-10"/>
    </>
  );
};

export default LandingPage;
