import React from 'react';
import LeftArrow from '../../icons/leftArrow';
import RightArrow from '../../icons/rightArrow';
import '../slider.css';

interface IBtnSlider {
  direction: string,
  moveSlide: () => void
}

export function BtnSlider({direction, moveSlide} : IBtnSlider) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      {/* <img src={direction === "next" ? rightArrow : leftArrow} /> */}
      {
        direction === "next" ? <RightArrow /> : <LeftArrow />
       }
    </button>
  );
}
