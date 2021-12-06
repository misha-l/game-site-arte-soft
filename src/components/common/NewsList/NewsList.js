import NewsItem1 from "./NewsItem1.js";
import NewsItem2 from "./NewsItem2.js";

import "./NewsList.css";

const NewsList = () => {
  return (
    <div class="news-top">
      <div class="news-top-title">
        <a href="/todo" class="tab-more bright">
          +
        </a>
        <span class="tab-button active">Last News</span>
      </div>
      <div class="news-top-text">
        <NewsItem1></NewsItem1>
        <NewsItem1></NewsItem1>
        <NewsItem2></NewsItem2>
        <NewsItem1></NewsItem1>
        <NewsItem2></NewsItem2>
        <NewsItem1></NewsItem1>
      </div>
    </div>
  );
};

export default NewsList;
