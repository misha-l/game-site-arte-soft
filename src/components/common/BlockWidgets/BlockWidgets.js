import BlockWidgetPlayers from "./BlockWidgetPlayers.js";
import BlockWidgetGuilds from "./BlockWidgetGuilds.js";
import BlockWidgetDiscussions from "./BlockWidgetDiscussions.js";

import "./BlockWidgets.css";

const BlockWidgets = () => {
  return (
    <div class="block-widget">
      <BlockWidgetPlayers></BlockWidgetPlayers>
      <BlockWidgetGuilds></BlockWidgetGuilds>
      <BlockWidgetDiscussions></BlockWidgetDiscussions>
    </div>
  );
};

export default BlockWidgets;
