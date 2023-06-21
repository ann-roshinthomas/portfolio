import "./Home.css";

function Home({ resumeData }) {
  return (
    <section id="home" className="home">
      <div className="home_main">
        <h1 className="home_main-salute">Hello 👋 I'm</h1>
        <h1 className="home_main-name">{resumeData.fullName}</h1>
        <h4 className="home_main-description">{resumeData.description}</h4>
      </div>
    </section>
  );
}
export default Home;
