import React, { useEffect } from 'react';

const PointerEffect = () => {
  useEffect(() => {
    const crosshair = document.createElement('div');
    crosshair.className = `
      fixed w-6 h-6 rounded-full border-2 border-pink-500 
      pointer-events-none z-[9999] 
      transform -translate-x-1/2 -translate-y-1/2 
      shadow-[0_0_10px_rgba(236,72,153,0.7)]
      transition-all duration-75 ease-out
    `;
    document.body.appendChild(crosshair);

    const move = (e) => {
      crosshair.style.left = `${e.clientX}px`;
      crosshair.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.body.removeChild(crosshair);
    };
  }, []);

  return null;
};

export default PointerEffect;
