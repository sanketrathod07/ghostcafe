import React, { useEffect } from 'react';
import './thunder.css';
import gif1 from '../../images/cafe img/thunder-2.gif';

const Thunder = () => {
  useEffect(() => {
    const img = document.querySelector('.gifImage');
    const showDuration = 2000; // 2 seconds
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
    <div className='gifContainerMain'>
      <img src={gif1} alt="" className='gifImage' />
    </div>
  );
};

export default Thunder;
