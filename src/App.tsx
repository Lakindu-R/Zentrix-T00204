import Hero from './pages/pageA/sections/hero';
import HowItWork from './pages/pageA/sections/hiw';
import Technology from './pages/pageA/sections/technology';
function App() {
  return (
    <div className="mx-auto items-center-safe justify-center bg-black">
      <Hero />
      {/* <HowItWork /> */}
      <Technology />
    </div>
  );
}

export default App;
