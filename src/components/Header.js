import { Fragment } from "react";
import { HashLink } from "react-router-hash-link";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Projects from "./Projects";

import imgIcon from "../images/roshin.JPG";
import "./Header.css";

function Header({ resumeData }) {
  return (
    <Fragment>
      <header className="header">
        <div className="row banner">
          <div className="banner-text">
            <img
              src={imgIcon}
              alt={resumeData.fullName}
              className="banner_img-icon"
            ></img>
            <h3 className="banner-name">{resumeData.fullName}</h3>
          </div>
        </div>

        <nav className="header_nav">
          <ul className="header_links">
            <li className="header_links-li">
              <HashLink smooth to={"/#home"} className="header_links-title">
                Home
              </HashLink>
            </li>
            <li className="header_links-li">
              <HashLink smooth to={"/#about"} className="header_links-title">
                About
              </HashLink>
            </li>
            <li className="header_links-li">
              <HashLink
                smooth
                to={"/#experience"}
                className="header_links-title"
              >
                Experience
              </HashLink>
            </li>
            <li className="header_links-li">
              <HashLink smooth to={"/#projects"} className="header_links-title">
                Projects
              </HashLink>
            </li>
            <li className="header_links-li">
              <HashLink
                smooth
                to={"/#testimonials"}
                className="header_links-title"
              >
                Testimonials
              </HashLink>
            </li>
          </ul>
        </nav>
      </header>
      <Home resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Experience
        experience={resumeData.experience}
        education={resumeData.education}
      ></Experience>
      <Projects projects={resumeData.projects}></Projects>
      <Testimonials testimonials={resumeData.testimonials}></Testimonials>
    </Fragment>
  );
}

export default Header;
