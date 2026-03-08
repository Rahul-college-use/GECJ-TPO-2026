import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar/Navbar'; // Adjust path if needed
import Header from './pages/header/Header';
import Footer from './pages/footer/Footer';
import Home from './components/Home';
import About from './pages/About/AboutSection';
import PlacementPolicy from './pages/footer/PlacementPolicy';

const App = () => {
  return (
    <>
      <div id='home'><Header /></div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/placement-policy" element={<PlacementPolicy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;