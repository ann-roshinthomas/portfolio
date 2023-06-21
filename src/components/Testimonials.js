import { IconContext } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import "./Testimonials.css";
import img1 from "../images/ajeya.jpg";
import img2 from "../images/chetan.jpg";

function Testimonials({ testimonials }) {
  return (
    <section id="testimonials" className="testimonial">
      <div className="testimonial_div">
        <h1 className="testimonial_label">Testimonials</h1>
        <div className="testimonial_list">
          {testimonials.map((testimonial, i) => {
            let img = i === 0 ? img1 : img2;
            return (
              <div className="testimonial_card">
                <div className="testimonial_card-title">
                  <img
                    src={img}
                    alt={testimonial.fullName}
                    className="testimonial_img"
                  />

                  <div className="testimonial_title">
                    <h2 style={{ margin: 0 }}>{testimonial.fullName}</h2>
                    {testimonial.title}
                    <br />
                    {testimonial.relationship}
                  </div>
                </div>
                <p className="testimonial_recommendation">
                  {testimonial.recommendation}
                </p>
                <span>
                  Source:
                  <IconContext.Provider
                    value={{ className: "source_icon", size: 20 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/annroshinthomas/details/recommendations/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsLinkedin />
                    </a>
                  </IconContext.Provider>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
