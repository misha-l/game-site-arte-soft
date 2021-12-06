/*
import CarouselSlide1 from "./CarouselSlide1.js";
import CarouselSlide2 from "./CarouselSlide2.js";
*/
import CarouselSlide3 from "./CarouselSlide3.js";

import "./CarouselSlider.css";

const CarouselSlider = () => {
  return (
    <div class="swiper-container">
      <div class="swiper-slider swiper-container-initialized swiper-container-horizontal">
        <div class="swiper-wrapper">
          <CarouselSlide3></CarouselSlide3>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
          <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
          <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span>
        </div>
        <div class="swiper-button-next slider-button" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"></div>
        <div class="swiper-button-prev slider-button swiper-button-disabled" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"></div>
        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  );
};

export default CarouselSlider;
