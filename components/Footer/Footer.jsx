import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faGithub,
  faLinkedin,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { fas, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div className="aboutMe">
      <div id="aboutMe" className="aboutMe-content">
        <h1 className="aboutMe-content_title">About Me</h1>
        <p className="aboutMe-content_text">
          Iam A Mechatronics Engineer graduated from An najah university firstly
          previously i have specialized in smart homes then industrial
          Automation but since the market is not developed in palestine i have
          decided to turn into software engineering
        </p>
        <p className="aboutMe-content_text">
          though the past months i have self-learned web development and I am
          aiming for a career in this field
        </p>
      </div>
      <div className="contactMe">
        <div className="contactMe-content">
          <h1 className="contactMe-content_title"> Contact Me</h1>
          <div id="contactMe" className="contacts">
            <a href="https://github.com/sharlq">
              <FontAwesomeIcon className="icon" icon={fab, faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/shehab-ali-alkhader-3aa496202/">
              <FontAwesomeIcon className="icon" icon={fab, faLinkedin} />
            </a>
            <a href="https://www.facebook.com/djrjsn/">
              <FontAwesomeIcon
                className="icon"
                icon={fab, faFacebookSquare}
              />
            </a>
            <div className="email">
              <FontAwesomeIcon className="icon" icon={fas, faEnvelope} />
              <p>Shehabakhader@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
