import guildIcon1 from "./images/guild-icon-1.png";
import guildIcon2 from "./images/guild-icon-2.png";
import guildIcon3 from "./images/guild-icon-3.png";
import guildIcon4 from "./images/guild-icon-4.png";
import guildIcon5 from "./images/guild-icon-5.png";

const BlockWidgetPlayers = () => {
  return (
    <div class="block-players widget-fon-guilds">
      <div class="block-widget-title">
        TOP <span class="widget-title-text">GUILDS</span>
      </div>
      <ul class="top-block guild">
        <li class="top-title">
          <span class="top-number">#</span> <span class="top-name">Name</span> <span class="score">Score</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            1. <img src={guildIcon1} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              AvengerS
            </a>
          </span>{" "}
          <span class="score">8919</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            2. <img src={guildIcon2} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              KINGman
            </a>
          </span>{" "}
          <span class="score">7249</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            3. <img src={guildIcon3} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              DOntCry
            </a>
          </span>{" "}
          <span class="score">1789</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            4. <img src={guildIcon2} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              KINGman
            </a>
          </span>{" "}
          <span class="score">7249</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            5. <img src={guildIcon3} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              DOntCry
            </a>
          </span>{" "}
          <span class="score">1789</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            6. <img src={guildIcon4} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              Fame
            </a>
          </span>{" "}
          <span class="score">439</span>
        </li>
        <li class="top-list">
          <span class="top-number">
            7. <img src={guildIcon5} alt="" />
          </span>{" "}
          <span class="top-name">
            <a href="/todo" title="nickname">
              Smit
            </a>
          </span>{" "}
          <span class="score">0</span>
        </li>
      </ul>
      <div class="buttons-small">
        <a href="/todo" class="button-small">
          All guilds
        </a>
      </div>
    </div>
  );
};

export default BlockWidgetPlayers;
