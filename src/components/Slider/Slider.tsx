import React, { useState } from 'react';
import './slider.css';
import { BtnSlider } from './BtnSlider';
import banner from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'

const data = [
  banner,
  banner2
]

interface ISlider {
  sliderData?: any[],
  dots?: boolean
}

export function Slider({sliderData = data, dots = true} : ISlider) {
  const [slideIndex, setSlideIndex] = useState(1)
  const nextSlide = () => {
    if(slideIndex !== sliderData.length){
      setSlideIndex(slideIndex + 1)
    } 
    else if (slideIndex === sliderData.length){
        setSlideIndex(1)
    }
  }
  
  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1){
        setSlideIndex(sliderData.length)
    }
  }
  const moveDot = (index: number) => {
    setSlideIndex(index)
  }
  return (
    <div className="container-slider">
      {
        sliderData.map((d, index) => {
          return (
            <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"} >
              <img src={d} key={index} alt="slider images" />
            </div>
          )
        })
      }
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
      {dots && <div className="container-dots">
          {Array.from({length: sliderData.length}).map((item, index) => (
              <div 
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
              ></div>
          ))}
      </div>}
    </div>
  );
}
