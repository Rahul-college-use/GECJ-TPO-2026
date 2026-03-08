import WelcomePage from '../pages/welcome/WellcomePage';
import Recruiters from '../pages/Recruiters/Recruiters';
import AboutSection from '../pages/About/AboutSection';
import ContactUs from '../pages/ContactUs/ContactUs';

const Home = () => {
  return (
    <main>
      <div id="home"><WelcomePage /></div>
      <div id="recruiters"><Recruiters /></div>
      <div id="about" className="scroll-mt-16"><AboutSection /></div>
      <div id="contact"><ContactUs /></div>
    </main>
  );
}

export default Home;