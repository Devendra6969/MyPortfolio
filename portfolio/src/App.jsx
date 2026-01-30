
import AboutCard from './components/card/AboutCard';
import FooterOne from './components/footer/FooterOne';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import { Outlet } from 'react-router';
import About from './pages/About';

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
