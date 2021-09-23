
import React from 'react';

const ColorInput1 = (props) => {

  return (
    <>
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
        />
        </label>
        <section className="input-info">
          <h3>placeholder</h3>
          <h5>{props.color1}</h5>
          <h5></h5>
        </section>
    </>
  );
};

export default ColorInput1;

