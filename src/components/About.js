import "./About.css";
import Skills from "./Skills";
function About({ resumeData }) {
  return (
    <section className="about" id="about">
      <div className="about_main">
        <div className="about_Me">
          <h1 className="about_label"> About Me </h1>
          <p className="about_text">{resumeData.aboutMe}</p>
        </div>

        <div className="about_skills">
          <h1 className="about_label"> Skills </h1>
          <Skills skills={resumeData.skills} />
        </div>
      </div>
    </section>
  );
}
export default About;
