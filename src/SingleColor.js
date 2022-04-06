import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

//props are coming from color prop from app.js check console for better understanding
const SingleColor = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  //adding # to the hex value so that we can copy exact value to clipboard
  const hexValue = `#${hexColor}`;

  //alternative way to display hex value of color
  //to display hex color code
  //instead of sending entire array we are sending only rgb by using spread
  // const hex = rgbToHex(...rgb);
  // console.log(hex)
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setAlert(false)
    },3000)

  },[alert])

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
