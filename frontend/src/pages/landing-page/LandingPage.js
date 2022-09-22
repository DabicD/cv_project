import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';

const LandingPage = () => {
  return (
    <>
      <Header/>
      <main>
        <Intro id="aboutme" className="pt-10"/>
      </main>
    </>
  );
};

export default LandingPage;
