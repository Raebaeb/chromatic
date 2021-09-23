import React from 'react';

const ColorInput3 = (props) => {
  return (
    <>
        <label htmlFor="col-input3" style={{ backgroundColor: `${props.color3}`}}>pick
          <input
            type="color"
            id="col-input3"
            value={props.color3}
            name="pick color three"
            onChange={(e) => {
              props.setColor3(e.target.value);
            }}
          />
        </label>
        <section className="input-info">
          <h3></h3>
          <h5>{props.color3}</h5>
          <h5></h5>
        </section>
    </>
  );
};

export default ColorInput3;