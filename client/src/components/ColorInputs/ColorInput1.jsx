import React from 'react';
import { useState, useEffect } from 'react';
import './colorinputs.css'

const ColorInput1 = (props) => {
  const [rgb, setRgb] = useState({})

  useEffect(() => {
    setRgb(props.hexToRgb(props.color1))
  },[props])
  
  return (
    <div className='col-input-each'>
      <label htmlFor="col-input1" style={{ backgroundColor: `${props.color1}`}}>click
        <input
          type="color"
          className="form-color"
          id="col-input1"
          value={props.color1}
          name="pick color one"
          onChange={(e) => {
            props.setColor1(e.target.value);
          }}
          onBlur={() => {
            props.fetchName(props.color1, props.setName1)
          }}
        />
        </label>
        <section className="color-info">
          <h3>{props.name1}</h3>
          <h5 className="color-code" onClick={props.copyText}>{props.color1}</h5>
          <h5 className="color-code" onClick={props.copyText}>rgb({rgb.r}, {rgb.g}, {rgb.b})</h5>
        </section>
    </div>
  );
};

export default ColorInput1;

