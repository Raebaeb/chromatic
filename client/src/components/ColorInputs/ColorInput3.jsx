import React from "react";
import { useState, useEffect } from "react";
import "./colorinputs.css";

const ColorInput3 = (props) => {
  const [rgb, setRgb] = useState({});

  useEffect(() => {
    setRgb(props.hexToRgb(props.color3))
  },[props])
  
  return (
    <div className="col-input-each">
      <label
        htmlFor="col-input3"
        style={{ backgroundColor: `${props.color3}` }}
      >
        pick
        <input
          className="form-color"
          type="color"
          id="col-input3"
          value={props.color3}
          name="pick color three"
          onChange={(e) => {
            props.setColor3(e.target.value);
            setRgb(props.hexToRgb(props.color3));  
          }}
          onBlur={() => {
            props.fetchName(props.color3, props.setName3)
          }}
        />
      </label>
      <section className="color-info">
        <h3>{props.name3}</h3>
        <h5 className="color-code" onClick={props.copyText}>{props.color3}</h5>
        <h5 className="color-code" onClick={props.copyText}>rgb({rgb.r}, {rgb.g}, {rgb.b})</h5>
      </section>
    </div>
  );
};

export default ColorInput3;
