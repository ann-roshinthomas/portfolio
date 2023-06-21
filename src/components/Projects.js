import ImageCarousal from "./ImageCarousal";
import "./Projects.css";

function Projects({ projects }) {
  return (
    <section id="projects" className="projects">
      <div className="projects_main_div">
        <h1 className="projects_label">Projects</h1>
        {projects &&
          projects.map((proj) => {
            return (
              <div className="projects_sub_div">
                <ImageCarousal images={proj.images} />
                <div className="project_details">
                  <h3 className="project_details-title">{proj.title}</h3>
                  <p className="project_details-description">
                    {proj.projectDescription}
                  </p>
                  <p>
                    See more:{" "}
                    <a
                      href="https://www.cognizant.com/us/en/industries/insurance-digital-transformation/risk-profile-gateway-life-insurance"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Risk Profile Gateway
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
export default Projects;
