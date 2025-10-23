import Navbar from './components/navbar/navBar';
import Hero from './pages/pageA/sections/hero';
import HowItWork from './pages/pageA/sections/hiw';
import Technology from './pages/pageA/sections/technology';
import BhdTechnology from './pages/pageA/sections/behindTeachonlgy';
import Services from './pages/pageA/sections/services';
import Question from './pages/pageA/sections/question';
import Footer from './components/footer/footer';
import ScreenSize from "./components/screenSize"

function App() {
  return (
    <div className="mx-auto items-center-safe justify-center bg-black">
      <Navbar />
      <Hero />
      <HowItWork />
      <Technology />
      <BhdTechnology />
      <Services />
      <Question />
      <Footer />
      <ScreenSize/>
    </div>
  );
}

export default App;
