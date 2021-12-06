import CarouselSlider from "../CarouselSlider/CarouselSlider.js";
import NewsList from "../NewsList/NewsList.js";

import "./TopContent.css";

const TopContent = () => {
  return (
    <div class="top-content">
      <CarouselSlider></CarouselSlider>
      <NewsList></NewsList>
    </div>
  );
};

export default TopContent;
