import slideImage from "./images/media-img-3.jpg";

const MediaSlide3 = () => {
  return (
    <div class="slick-slider-slide slick-slide slick-cloned">
      <a href="/todo">
        <img src={slideImage} alt="" />
      </a>
    </div>
  );
};

export default MediaSlide3;
