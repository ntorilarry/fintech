
import './App.css';
import Churches from './components/churches';
import Hero from './components/hero';
import Manilla from './components/manilla';
import Payments from './components/payments';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Payments/>
     <Manilla/>
     <Churches/>
    </div>
  );
}

export default App;
