import React, { useEffect } from "react";
import { useState } from "react";
import "./colorinputs.css";

const ColorInput2 = (props) => {
  const [rgb, setRgb] = useState({})

  useEffect(() => {
    setRgb(props.hexToRgb(props.color2))
  },[props])

  return (
    <div className="col-input-each">
      <label
        htmlFor="col-input2"
        style={{ backgroundColor: `${props.color2}` }}
      >
        to
        <input
          className="form-color"
          id="col-input2"
          type="color"
          value={props.color2}
          name="pick color two"
          onChange={(e) => {
            props.setColor2(e.target.value);
          }}
        />
      </label>
      <section className="color-info">
        <h3>{props.name2}</h3>
        <h5 className="color-code" onClick={props.copyText}>{props.color2}</h5>
        <h5 className="color-code" onClick={props.copyText}>rgb({rgb.r}, {rgb.g}, {rgb.b})</h5>
      </section>
    </div>
  );
};

export default ColorInput2;
