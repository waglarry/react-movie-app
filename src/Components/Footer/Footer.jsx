import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footerContainer">
          <div className="containerBox">
            <div className="footerLogo">
              <h1 className="footerLogoH1">
                <span>🏚</span> Waga's<span>HUB</span>
              </h1>
              <p className="logoContent">
                Find all super exciting movies here on the Hub...
              </p>
            </div>
            <div className="pages">
              <h3 className="footerTitle">Pages</h3>
              <ul className="Links">
                <li>
                  <Link className="footerLinks" to="/movies">
                    Movies
                  </Link>
                </li>
                <li>
                  <Link className="footerLinks" to="/tvshows">
                    Tv Shows
                  </Link>
                </li>
                <li>
                  <Link className="footerLinks" to="/people">
                    People
                  </Link>
                </li>
              </ul>
            </div>
            <div className="howTo">
              <h3 className="footerTitle">How To...</h3>
              <ul className="Links">
                <li>
                  <Link className="footerLinks" to="/howToDownload">
                    Download
                  </Link>
                </li>
                <li>
                  <Link className="footerLinks" to="/howToWatchTrailer">
                    Watch Trailer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="contact">
              <h3 className="footerTitle">Contact Us</h3>
              <ul className="Links">
                <li>
                  <a
                    className="footerLinks"
                    target="_blank"
                    href="https://t.me/WaghubBot"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    className="footerLinks"
                    target="_blank"
                    href="https://instagram.com/iamkofi.emma?igshid=YmMyMTA2M2Y="
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="footerLinks"
                    target="_blank"
                    href="https://twitter.com/kofi_waga?s=21"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="footerLinks"
                    target="_blank"
                    href="https://www.youtube.com/channel/UCfv4d_WUwM0dLfrFJnLGYBg"
                    rel="noopener noreferrer"
                  >
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyRight">
            &copy; Copyright {new Date().getFullYear()}, All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
