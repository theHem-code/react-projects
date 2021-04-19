import React, { useState, useEffect } from "react";
import rgbToHex from "../utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = rgbToHex(rgb[0], rgb[1], rgb[2]);

  // to clear the "copied to clipboard" after 3 sec.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;

// && and || operator
// The &&-operator evaluates to left hand side expression if it is falsy, otherwise to right hand side expression.
// The ||-operator evaluates to left hand side expression if it is truthy, otherwise to right hand side expression.
