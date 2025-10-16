import Hero from './pages/pageA/sections/hero';
import HowItWork from './pages/pageA/sections/hiw';
import Technology from './pages/pageA/sections/technology';
import BhdTechnology from './pages/pageA/sections/behindTeachonlgy';

function App() {
  return (
    <div className="mx-auto items-center-safe justify-center bg-black">
      <Hero />
      {/* <HowItWork /> */}
      <Technology />
      <BhdTechnology />
    </div>
  );
}

export default App;
