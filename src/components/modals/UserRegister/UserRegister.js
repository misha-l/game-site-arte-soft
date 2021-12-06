import "../modals.css";

import logo from "../images/logo-1-reg.png";

const UserRegister = () => {
  return (
    <div id="resister" class="modal_div">
      <span class="modal_close"></span>
      <div class="modal-content">
        <div class="logo-re">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <h2>
          <span>Registration</span>
        </h2>
        <form>
          <p>
            <input class="input-re" type="text" name="login" placeholder="USERNAME" />
          </p>
          <p>
            <input class="input-re" type="password" name="pass" placeholder="PASSWORD" />
          </p>
          <p>
            <input class="input-re" type="password" name="re-pass" placeholder="CONFIRM PASSWORD" />
          </p>
          <p>
            <input class="input-re" type="text" name="mail" placeholder="EMAIL" />
          </p>
          <div class="formButton">
            <button class="button">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;
