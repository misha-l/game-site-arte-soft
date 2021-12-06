import DownloadBlock from "./DownloadBlock.js";
import StatusBlock1 from "./StatusBlock1.js";
import StatusBlock2 from "./StatusBlock2.js";

import "./FastButton.css";

const FastButtons = () => {
  return (
    <div class="fast-button">
      <DownloadBlock></DownloadBlock>
      <StatusBlock1></StatusBlock1>
      <StatusBlock2></StatusBlock2>
    </div>
  );
};

export default FastButtons;
