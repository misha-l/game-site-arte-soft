import slideImage from "./images/media-img-1.jpg";

const MediaSlide1 = () => {
  return (
    <div class="slick-slider-slide slick-slide slick-cloned">
      <a href="/todo">
        <img src={slideImage} alt="" />
      </a>
    </div>
  );
};

export default MediaSlide1;
