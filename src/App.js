import Header from "./components/Header";
import Footer from "./components/Footer";
import resumeData from "./resumeData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header resumeData={resumeData} />
      <Footer socialLinks={resumeData.socialLinks} />
    </div>
  );
}

export default App;
