import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import BackgroundVideo from './Components/BackgroundVideo';
import PatternLinks from './Components/PatternLinks';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
      <div className="App">
        <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  // innerStyle={{
  //   backgroundColor: 'var(--cursor-color)'
  // }}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
/>
      {/* <BackgroundVideo/> */}
      <Header/>
      <div className="main-container">
      <Hero/>
      <PatternLinks/>
      </div>
    </div>
  );
}

export default App;
