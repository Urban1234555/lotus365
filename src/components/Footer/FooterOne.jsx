import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/logo.png";
import { scrollToTop } from "../../lib/helpers";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Lotus365 &copy; 2023. All Rights Reserved Lotus365</p>
                </div>
              </div>
              <div className="col-lg-6 d-sm-block">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <Link to="/terms-conditions">Terms and conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy policy</Link>
                    </li>
                    <li>
                      <Link to="/responsible-gaming">Responsible Gaming</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
