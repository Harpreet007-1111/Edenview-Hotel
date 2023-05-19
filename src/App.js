import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Gallary from './components/Gallary';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <>
          <section id="home">
            <Home />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="test">
          <Testimonials />
          </section>

          <section id="menu">
            <Menu />
          </section>

          <section id="gallery">
            <Gallary />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </>
        <Footer />
      </Router>
    </>
  );
}

export default App;
