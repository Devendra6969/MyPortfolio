
import AboutCard from './components/card/AboutCard';
import FooterOne from './components/footer/FooterOne';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { Outlet } from 'react-router';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectCard from './components/card/ProjectCard';

function App() {
 
 
  return (
    <>
    <Navbar />
      <Outlet />
    <FooterOne />

    </>
  );
}

export default App
