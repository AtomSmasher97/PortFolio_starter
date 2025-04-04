import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import BackgroundVideo from './Components/BackgroundVideo';
import PatternLinks from './Components/PatternLinks';

function App() {
  return (
    <div className="App">
      <BackgroundVideo/>
      <Header/>
      <div className="main-container">
      <Hero/>
      <PatternLinks/>
      </div>
    </div>
  );
}

export default App;
