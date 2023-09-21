import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero_Section/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Clients from './Components/Clients/Clients';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';
import Rating from './Components/Rating/Rating';

function App() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Clients/>
     <Services/>
     <Team/>
     <Work/>
     <Rating/>
     <Contact/>
     <Footer/>
    </>
  );
}

export default App;
