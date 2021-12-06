import "./BlockWidgetDiscussions.css";

import avatar1 from "./images/icon_1.jpg";
import avatar2 from "./images/icon_2.jpg";
import avatar3 from "./images/icon_3.jpg";

const BlockWidgetDiscussions = () => {
  return (
    <div class="block-players widget-fon-discussions">
      <div class="block-widget-title">DISCUSSIONS</div>
      <div class="discussions-content-top">
        <ul class="discussions-content">
          <li class="discussions-content-block">
            <span class="discussions-icon" style={{ backgroundImage: `url(${avatar1})` }}></span>
            <span class="discussions-message">1</span>
            <span class="discussions-text">Welcome to our new site. There are...</span>
            <br />
            <br />
            <span class="discussions-text-bt">
              By <a href="/todo">Daniel_91</a> | 12.05.2019
            </span>
          </li>
        </ul>
        <ul class="discussions-content">
          <li class="discussions-content-block">
            <span class="discussions-icon" style={{ backgroundImage: `url(${avatar2})` }}></span>
            <span class="discussions-message">2</span>
            <span class="discussions-text">Welcome to our new site ...</span>
            <br />
            <br />
            <span class="discussions-text-bt">
              By <a href="/todo">Daniel_91</a> | 12.05.2019
            </span>
          </li>
        </ul>
        <ul class="discussions-content">
          <li class="discussions-content-block">
            <span class="discussions-icon" style={{ backgroundImage: `url(${avatar3})` }}></span>
            <span class="discussions-message">1</span>
            <span class="discussions-text">Welcome to our new site ...</span>
            <br />
            <br />
            <span class="discussions-text-bt">
              By <a href="/todo">Daniel_91</a> | 12.05.2019
            </span>
          </li>
        </ul>
        <ul class="discussions-content">
          <li class="discussions-content-block">
            <span class="discussions-icon" style={{ backgroundImage: `url(${avatar2})` }}></span>
            <span class="discussions-message">150</span>
            <span class="discussions-text">Welcome to our new site ...</span>
            <br />
            <br />
            <span class="discussions-text-bt">
              By <a href="/todo">Daniel_91</a> | 12.05.2019
            </span>
          </li>
        </ul>
        <ul class="discussions-content">
          <li class="discussions-content-block">
            <span class="discussions-icon" style={{ backgroundImage: `url(${avatar1})` }}></span>
            <span class="discussions-message">0</span>
            <span class="discussions-text">Welcome to our new site ...</span>
            <br />
            <br />
            <span class="discussions-text-bt">
              By <a href="/todo">Daniel_91</a> | 12.05.2019
            </span>
          </li>
        </ul>
      </div>
      <div class="buttons-small">
        <a href="/todo" class="button-small">
          Forum
        </a>
      </div>
    </div>
  );
};

export default BlockWidgetDiscussions;
