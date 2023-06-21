import { IconContext } from "react-icons";
import { BsCircleFill } from "react-icons/bs";
import "./Experience.css";
function Experience({ experience, education }) {
  return (
    <section id="experience" className="experience">
      <div className="experience_div">
        <div className="experience_main">
          <h1 className="experience_label"> Experience </h1>
          {experience.map((exp, i) => {
            return (
              <div className="exp_list_item">
                <details key={i}>
                  <summary className="experience_details">
                    <></>
                    <div className="experience_details_main">
                      <div className="exp_icon">
                        <IconContext.Provider value={{ color: "#fada5e" }}>
                          <div>
                            <BsCircleFill />
                          </div>
                        </IconContext.Provider>

                        <div className="exp_icon_line"></div>
                      </div>
                      <div className="experience_details-title">
                        <span className="details_company">{exp.company}</span>
                        <span className="details_role"> {exp.role}</span>
                        <span className="details_date"> {exp.date}</span>{" "}
                      </div>
                    </div>
                  </summary>

                  <p className="experience_details-work">{exp.details}</p>
                </details>
              </div>
            );
          })}
        </div>
        {/* <div className="experience_main">
          <h1 className="experience_label"> Education </h1>
          {education.map((edu, i) => {
            return (
              <details key={i}>
                <summary className="experience_details">
                  <></>
                  <div className="experience_details_main">
                    <div className="exp_icon">
                      <IconContext.Provider value={{ color: "#fada5e" }}>
                        <div>
                          <BsCircleFill />
                        </div>
                      </IconContext.Provider>

                      <div className="exp_icon_line"></div>
                    </div>
                    <div className="experience_details-title">
                      <span className="details_company">{edu.institution}</span>
                      <span className="details_role"> {edu.degree}</span>
                      <span className="details_date"> {edu.date}</span>{" "}
                    </div>
                  </div>
                </summary>
              </details>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
export default Experience;
