import slideImage from "./images/media-img-2.jpg";

const MediaSlide2 = () => {
  return (
    <div class="slick-slider-slide slick-slide slick-cloned">
      <a href="/todo">
        <img src={slideImage} alt="" />
      </a>
    </div>
  );
};

export default MediaSlide2;
