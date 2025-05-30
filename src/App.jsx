import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Counter from './Components/counter';
import Something from './Components/something';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/About';

function App() {
  return (
   <>
   <Navbar />
   <div className="container my-3">
    <TextForm heading="Enter the text to analyze" />
    <Counter />
    <Something />
    <About />
   </div>
   </>
  );
}

export default App;

