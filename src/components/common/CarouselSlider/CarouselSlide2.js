import sliderImage from "./images/slider-img-1.jpg";

const CarouselSlide2 = () => {
  return (
    <div class="swiper-slide" style={{ backgroundImage: `url(${sliderImage})` }}>
      <h2>THE COUNTRY EXPERIENCED</h2>
      <div class="slider-info">
        <p>A long time ago there was only a single empire that existed on the continent. The country experienced tranquility.</p>
        <a href="/todo" class="slider-button-more button button-small">
          more
        </a>
      </div>
    </div>
  );
};

export default CarouselSlide2;
