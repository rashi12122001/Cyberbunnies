
import React, { useEffect } from 'react';
import './Intro.css';
import { Application } from '@splinetool/runtime';

function Intro() {
  useEffect(() => {
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/NC92hRP77yfvmAQy/scene.splinecode');
    // Optionally, you might want to clean up when the component unmounts
    return () => {
      // Perform cleanup actions here, if needed
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount

  return (
    <div className='intro'>
      <div className="i-left">
        <div className="i-name">
          <span>Welcome to </span>
          <span>CYBER BUNNIES!</span>
          <span>A place where Bunnies meet Cybersecurity!
          </span>
        </div>
        <button className="button i-button">explore</button>
        {/* <button className="button i-button">explore</button> */}
      </div>
      <div className="i-right">
      <div className='blur bunny-blur'></div>
        {/* A placeholder element for the canvas, assuming you have a canvas3d element in your HTML */}
        <canvas id="canvas3d"></canvas>
      </div>
    </div>
  );
}

export default Intro;
