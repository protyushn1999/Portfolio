import './App.css';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import Skills from './containers/Skills/Skills';
import Testimonial from './containers/Testimonial/Testimonial';
import Projects from './containers/Projects/Projects';
import About from './containers/About/About';
import Navbar  from './components/Navbar/Navbar';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}
// #ffcf2a

export default App;
