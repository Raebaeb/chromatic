import React from 'react';

const ColorInput2 = (props) => {
  return (
    <>
      <label htmlFor="col-input2" style={{ backgroundColor: `${props.color2}`}}>to
        <input
          id="col-input2"
          type="color"
          value={props.color2}
          name="pick color two"
          onChange={(e) => {
            props.setColor2(e.target.value);
          }}
        />
        </label>
        <section className="input-info">
          <h3></h3>
          <h5>{props.color2}</h5>
          <h5></h5>
        </section>
    </>
  );
};

export default ColorInput2;