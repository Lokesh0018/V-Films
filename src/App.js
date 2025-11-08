import './App.css';
import Navigation from './Nav/Navigation';
import Hero from './Hero/Hero';
import AboutTeam from './About/AboutTeam';
import AboutUs from './About/AboutUs';
import Services from './Services/Services';
import FilmProduction from './Services/FilmProduction';
import Branding from './Services/Branding';
import ArtCuration from './Services/ArtCuration';
import Porotofolio from './Portofolio/Porotofolio';
import Contact from './Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-team" element={<AboutTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/film-production" element={<FilmProduction />} />
          <Route path="/services/branding" element={<Branding />} />
          <Route path="/services/art-curation" element={<ArtCuration />} />
          <Route path="/portofolio" element={<Porotofolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
