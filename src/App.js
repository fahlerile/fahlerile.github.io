import Navbar from './components/Navbar/Navbar.js';
import Hero from './components/Hero/Hero.js';
import Projects from './components/Projects/Projects.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Projects/>
    </div>
  );
}

export default App;
