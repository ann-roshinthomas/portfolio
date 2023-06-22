import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

import "./Home.css";

function Home({ resumeData }) {
  return (
    <section id="home" className="home">
      <div className="home_main">
        <h1 className="home_main-salute">Hello 👋 I'm</h1>
        <h1 className="home_main-name">{resumeData.fullName}</h1>
        <h4 className="home_main-description">{resumeData.description}</h4>
        <div className="social_icons">
          <IconContext.Provider
            value={{ className: "social_icons-style", size: 50 }}
          >
            <a
              href={resumeData.socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="social_link"
            >
              <BsLinkedin />
            </a>
            <a
              href={resumeData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social_link"
            >
              <BsGithub />
            </a>
            <a
              href={`mailto:${resumeData.socialLinks.email}`}
              rel="noopener noreferrer"
              className="social_link"
            >
              <TfiEmail />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </section>
  );
}
export default Home;
