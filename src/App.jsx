import './App.css';
import Projects from './components/Projects/Projects';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import About from "./components/About/About";
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <main>
        <Projects />
        <About  />
      </main>
      
    </>
  );
}

export default App;
