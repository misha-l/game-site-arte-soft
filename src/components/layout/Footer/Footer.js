import { Link } from "react-router-dom";
import logoFooter from "./images/logo-footer.png";

import socF from "./images/soc-icons_f.png";
import socT from "./images/soc-icons_t.png";
import socY from "./images/soc-icons_y.png";
import templLogo from "./images/templ-logo.png";


import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="toTop-fon">
        <div className="toTop" id="toTop"></div>
      </div>
      <div className="footer-block-t">
        <ul className="f-menu">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Registration</Link>
          </li>
          <li>
            <Link to="">players</Link>
          </li>
          <li>
            <Link to="">guilds</Link>
          </li>
          <li>
            <Link to="">discussions</Link>
          </li>
          <li>
            <Link to="">forum</Link>
          </li>
          <li>
            <Link to="">About us</Link>
          </li>
        </ul>
      </div>

      <div className="footer-end flex-s-c">
        <div className="footer-block-coperite">
          <span>
            Copyright 2019 © <Link to="/">koleos.com</Link>
          </span>
          <br />
          <br />
          <span>
            This site is in no way associated with <br />
            or endorsed by Webzen Inc.
          </span>
        </div>
        <div className="footer-logo">
          <Link to="/">
            <img src={logoFooter} alt="" />
          </Link>
        </div>
        <div className="footer-block-r">
          <div className="soc-block">
            <Link to="" className="facebook">
              <img src={socF} alt="" />
            </Link>
            <Link to="" className="twitter">
              <img src={socT} alt="" />
            </Link>
            <Link to="" className="youtube">
              <img src={socY} alt="" />
            </Link>
          </div>
          <div className="templstock">
          <a href="https://templstock.com/" title="Game Site Templates - High quality PSD Templates, WordPress themes, HTML templates and Free game templates." className="templstock a">
          <img src={templLogo} alt="" />
          </a>
					</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
