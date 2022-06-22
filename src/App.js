import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Contents from './components/Contents';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Opentype from './components/Opentype';
import MissingPage from './components/MissingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div id='App'>
        <Navbar />
        <Routes>
          <Route path='/' 
            element={
              <div>
                <Header />
                <Features />
                <Contents />
                <Gallery />
                <Partners />
                <Testimonials />
                <Opentype />
                <Footer />
              </div>
            } />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
