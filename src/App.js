import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import './App.css';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';
import AnimatedBg from "react-animated-bg";

function App() {

  const bolts = useRef(null)
  const bolts2 = useRef(null)
  const star1 = useRef(null)
  const [isExploding, setIsExploding] = React.useState(true);



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
      <div className="confetti">
      {/* tried using this https://www.npmjs.com/package/@reonomy/react-confetti-explosion */}
        <>
          {isExploding && <ConfettiExplosion />}
        </>
      </div>
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
      <div className="stripesContainer">
        <h2>Stripes</h2>
        <div>
        <AnimatedBg
          colors={["#FBE04F", "#DDFB51", "#8AFAB4", "#71F6FC","#D4F97D","#74E545","#E939C2","#88ACF8", ]}
          duration={0.5}
          delay={1}
          timingFunction="linear"
          className="stripes"
        >
          <h2>Color Changing Background</h2>
        </AnimatedBg>
      </div>
      </div>

    </div>
  );
}

export default App;
