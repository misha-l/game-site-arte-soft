import FastButtons from "../../common/FastButtons/FastButtons.js";
import TopContent from "../../common/TopContent/TopContent.js";
import MediaSlider from "../../common/MediaSlider/MediaSlider.js";
import BlockWidgets from "../../common/BlockWidgets/BlockWidgets.js";

const Home = () => {
  return (
    <main class="content">
      <FastButtons></FastButtons>
      <TopContent></TopContent>
      <BlockWidgets></BlockWidgets>
      <MediaSlider></MediaSlider>
    </main>
  );
};

export default Home;
