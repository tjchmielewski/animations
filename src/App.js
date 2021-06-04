import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './App.css';

function App() {

  const bolts = useRef(null)
  const bolts2 = useRef(null)

  useEffect(() => {
      lottie.loadAnimation({
        container: bolts.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./bolt-1.json')
      })
  }, [])
  useEffect(() => {
      lottie.loadAnimation({
        container: bolts2.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./bolt-1.json')
      })
  }, [])

  return (
    <div className="App">
      <h1>Animation Demo</h1>
      <h2>Bolts</h2>
      <div className="bolt" ref={bolts}></div>
      <div className="bolt2" ref={bolts2}></div>
      <h2>Stars</h2>
      <div>Placeholder</div>
    </div>
  );
}

export default App;
