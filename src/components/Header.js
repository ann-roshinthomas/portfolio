import { Fragment, useState } from "react";
import { HashLink } from "react-router-hash-link";
import About from "./About";
import Home from "./Home";
import Experience from "./Experience";
import Testimonials from "./Testimonials";
import Projects from "./Projects";
import Hamburger from "./Hamburger";

import imgIcon from "../images/roshin.jpg";
import "./Header.css";

function Header({ resumeData }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };
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

        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger hamburgerOpen={hamburgerOpen} />
        </div>
        <div
          className={`header__sm-menu ${
            hamburgerOpen ? "header__sm-menu--active" : ""
          }`}
        >
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links" onClick={toggleHamburger}>
              <li className="header__sm-menu-link">
                <a href="./#home"> Home </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="./#about"> About </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="./#experience"> Experience </a>
              </li>
              <li className="header__sm-menu-link">
                <a href="./#projects"> Projects </a>
              </li>

              <li className="header__sm-menu-link">
                <a href="./#testimonials"> Testimonials </a>
              </li>
            </ul>
          </div>
        </div>
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
