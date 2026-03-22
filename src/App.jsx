import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';  
import Experience from './pages/Experience';
import './App.css';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </Layout>
  );
}

export default App;
