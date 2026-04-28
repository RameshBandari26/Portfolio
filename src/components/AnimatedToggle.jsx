import React, { useState, useEffect } from 'react';
import './AnimatedToggle.css';

const AnimatedToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set background color on body when toggle changes
    document.body.style.transition = 'background-color 2s';
    document.body.style.backgroundColor = isDark ? '#121212' : '#f4f4f5';
    document.body.style.color = isDark ? '#ffffff' : '#000000';
  }, [isDark]);

  return (
    <div
      id="switch"
      className={isDark ? 'off' : ''}
      onClick={() => setIsDark(!isDark)}
    >
      <div id="contentwrapper">
        <div id="circle"></div>

        <div id="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div id="shtngstarwrapper">
            <div id="shootingstar"></div>
          </div>
        </div>

        <div>
          <div className="cloud">
            <div className="cloudpart"></div>
            <div className="cloudpart"></div>
          </div>
          <div className="cloud">
            <div className="cloudpart"></div>
            <div className="cloudpart"></div>
          </div>
          <div className="cloud">
            <div className="cloudpart"></div>
            <div className="cloudpart"></div>
            <div className="cloudpart"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedToggle;
