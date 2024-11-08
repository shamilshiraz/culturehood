import React, { useEffect } from 'react';
import './App.css';
import Tilt from './components/Tilt';
import Bloody from './components/Bloody';
import About from './components/About';
import Cult from './components/Cult';
import Track from './components/Track';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,         // duration of scroll animation
      easing: (t) => t,      // easing function for smooth scrolling
      smoothWheel: true,     // smooth scrolling with the wheel
      smoothTouch: false,    // smooth scrolling on touch devices
    });

    // Update function for Lenis to work with requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Clean up Lenis on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Tilt />
      <Bloody />
      <About />
      <Cult />
      <Track />
    </>
  );
}

export default App;

