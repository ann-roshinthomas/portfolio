import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import "./Footer.css";
function Footer({ socialLinks }) {
  return (
    <footer>
      <div className="footer">
        <div className="footer_icons">
          <IconContext.Provider
            value={{ className: "footer_icons-style", size: 50 }}
          >
            <a
              href={socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
            <a href={`mailto:${socialLinks.email}`} rel="noopener noreferrer">
              <TfiEmail />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
