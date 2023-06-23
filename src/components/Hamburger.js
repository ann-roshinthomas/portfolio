import "./Hamburger.css";
export default function Hamburger({ hamburgerOpen }) {
  console.log(hamburgerOpen);
  return (
    <div className="hamburger_div">
      <div className={`burger ${hamburgerOpen ? "burger1" : ""}`}></div>
      <div className={`burger ${hamburgerOpen ? "burger2" : ""}`}></div>
      <div className={`burger ${hamburgerOpen ? "burger3" : ""}`}></div>
    </div>
  );
}
