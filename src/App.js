import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './App.css';

function App() {

  const bolts = useRef(null)
  const bolts2 = useRef(null)
  const star1 = useRef(null)

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
  useEffect(() => {
      lottie.loadAnimation({
        container: star1.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./star.json')
      })
  }, [])

  return (
    <div className="App">
      <h1>Animation Demo</h1>
      <h2>Bolts</h2>
      <div className="boltContainer">
        <div className="bolt2" ref={bolts2}></div>
        <span className="warning"> WARNING!!!</span>
        <div className="bolt" ref={bolts}></div>
      </div>
      <div className="starContainer">
        <h2>Stars</h2>
        <div className="star1" ref={star1}></div>
      </div>
    </div>
  );
}

export default App;
