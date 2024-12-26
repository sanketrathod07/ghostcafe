import React, { useEffect } from 'react';
import './style.css';
import bat1 from '../../images/cafe img/bat-4-running.gif';

const GhostWalking = () => {
  useEffect(() => {
    const img = document.querySelector('.ghostwalking-animation');
    const showDuration = 2600; // 2 seconds
    const hideDuration = 10000; // 10 seconds

    const showImage = () => {
      img.style.display = 'block';
      setTimeout(hideImage, showDuration);
    };

    const hideImage = () => {
      img.style.display = 'none';
      setTimeout(showImage, hideDuration);
    };

    showImage(); // Initial call to start the cycle

    return () => {
      clearTimeout(hideImage);
      clearTimeout(showImage);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className='ghostwalkingMainContainer'>
      <img src={bat1} alt="" className="ghostwalking-animation" />
    </div>
  );
};

export default GhostWalking;
