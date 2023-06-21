import { useState, useEffect } from "react";

import "./Projects.css";

function ImageCarousal({ images }) {
  const [currImgIndex, setCurrImgIndex] = useState(0);
  const thisImage = images[currImgIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      if (images) {
        let idx = currImgIndex === images.length - 1 ? 0 : currImgIndex + 1;
        setCurrImgIndex(idx);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currImgIndex]);

  const increaseImage = () => {
    console.log("increase clicking");
    console.log(currImgIndex);
    if (currImgIndex !== images.length - 1) {
      console.log("increase clicked");
      setCurrImgIndex((currImgIndex) => currImgIndex + 1);
    }
  };
  const decreaseimage = () => {
    if (currImgIndex > 0) {
      console.log("decrease clicked");
      setCurrImgIndex((currImgIndex) => currImgIndex - 1);
    }
  };

  return (
    <div className="carousal">
      <img className="img" src={thisImage}></img>
      {/* <div className="pointer-div">
        <button
          className="decreaseImage"
          onClick={decreaseimage}
          disabled={currImgIndex !== images.length - 1 ? false : true}
        >
          {"<"}{" "}
        </button>
        <button
          className="increaseImage"
          onClick={increaseImage}
          disabled={currImgIndex > 0 ? false : true}
        >
          {">"}{" "}
        </button>
      </div> */}
    </div>
  );
}
export default ImageCarousal;
