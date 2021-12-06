import "../modals.css";

import logo from "../images/logo-1-reg.png";

const UserLogin = () => {
  return (
    <div id="login-login" class="modal_div">
      <span class="modal_close"></span>
      <div class="modal-content">
        <div class="logo-re">
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
        <h2>
          <span>Login</span>
        </h2>
        <form>
          <p>
            <input class="input-re" type="text" name="login" placeholder="USERNAME" />
          </p>
          <p>
            <input class="input-re" type="password" name="pass" placeholder="PASSWORD" />
          </p>
          <div class="formButton">
            <button class="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
