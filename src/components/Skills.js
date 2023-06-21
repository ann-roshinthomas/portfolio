import "./About.css";
function Skills({ skills }) {
  return (
    <div className="skills">
      {skills.map((skill) => {
        return <div className="skills_skill">{skill}</div>;
      })}
    </div>
  );
}
export default Skills;
