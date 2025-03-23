
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import LogosSection from './components/LogosSection';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="App">
            <Navbar />
            <Banner />
            <MainSection />
            <LogosSection />
            <Footer />
            <CookieConsent />
    </div>
  );
}

export default App;
