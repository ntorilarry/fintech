
import './App.css';
import Api from './components/api';
import Churches from './components/churches';
import Footer from './components/footer';
import Hero from './components/hero';
import Manilla from './components/manilla';
import Payments from './components/payments';
import Testimonial from './components/testimonial';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Payments/>
     <Manilla/>
     <Churches/>
     <Api/>
     <Testimonial/>
     <Footer/>
    </div>
  );
}

export default App;
