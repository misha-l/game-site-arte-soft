import MediaSlide1 from "./MediaSlide1.js";
import MediaSlide2 from "./MediaSlide2.js";
import MediaSlide3 from "./MediaSlide3.js";

import "./MediaSlider.css";
import "./slick.css";

const MediaSlider = () => {
  return (
    <div class="content-last-news">
      <div class="last-news-top">
        MEDIA
        <a href="/todo">all media</a>
      </div>
      <div class="media-fon">
        <section class="center slick-slider slick-initialized">
          <MediaSlide1></MediaSlide1>
          <MediaSlide2></MediaSlide2>
          <MediaSlide3></MediaSlide3>
          <MediaSlide1></MediaSlide1>
        </section>
      </div>
    </div>
  );
};

export default MediaSlider;
