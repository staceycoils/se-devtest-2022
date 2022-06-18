import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Contents from './components/Contents';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Opentype from './components/Opentype';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Features />
      <Contents />
      <Gallery />
      <Partners />
      <Testimonials />
      <Opentype />
      <Footer />
    </div>
  );
}

export default App;
