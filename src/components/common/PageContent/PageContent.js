import "./PageContent.css";

import pageImage from "./images/page-text-img.jpg";

const PageContent = () => {
  return (
    <div class="page-content">
      <div class="page-top">News</div>
      <div class="page-title flex-s-c">
        <span class="page-title-news">NEWS title - title ror the new page!</span>
        <span class="page-title-time">12.10.2019</span>
      </div>
      <div class="page-text">
        <div class="page-text-img" style={{ backgroundImage: `url(${pageImage})` }}></div>
        War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between
        kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between kingdoms. Wild
        animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the...
        <br />
        <br />
        War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to <a href="todo">protect</a> the...
        <br />
        <br />
        War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between
        kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the... War broke out between kingdoms. Wild
        animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your weapons to protect the...
        <br />
        <br />
        War broke out between kingdoms. Wild animals turn into raging animals and the dead return to life, craving for blood. Fight with the dark influence of the Metin Stones as one of the allies of the Dragon. Collect all your strengths and take your <a href="todo">weapons</a> to{" "}
        <a href="todo">protect</a> the...
        <br />
        <br />
        <ul>
          <li>War broke out between kingdoms. Wild animals</li>
          <li>War broke out between kingdoms. Wild animals</li>
          <li>War broke out between kingdoms. Wild animals</li>
          <li>War broke out between kingdoms. Wild animals</li>
        </ul>
        <br />
        <table>
          <tbody>
            <tr>
              <td>Table #1</td> <td>Table #2</td> <td>Table #3</td> <td>Table #4</td>
            </tr>
            <tr>
              <td>1</td> <td>2</td> <td>3</td> <td>4</td>
            </tr>
            <tr>
              <td>Server1</td> <td>Table #2</td> <td>Table #3</td> <td>Table #4</td>
            </tr>
            <tr>
              <td>1</td> <td>2</td> <td>3</td> <td>4</td>
            </tr>
            <tr>
              <td>Server1</td> <td>Table #2</td> <td>Table #3</td> <td>Table #4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PageContent;
