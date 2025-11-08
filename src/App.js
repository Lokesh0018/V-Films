import './App.css';
import Navigation from './Nav/Navigation';
import Hero from './Hero/Hero';
import AboutTeam from './About/AboutTeam';
import AboutUs from './About/AboutUs';
import Services from './Services/Services';
import FilmProduction from './Services/FilmProduction';
import Branding from './Services/Branding';
import ArtCuration from './Services/ArtCuration';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ArtCuration />
    </div>
  );
}

export default App;
