import axios from "axios";
import { useState, React, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../../services";
import "./form.css";

const Form = (props) => {
  const params = useParams();
  const history = useHistory();
  const [paletteName, setPaletteName] = useState("");
  const [username, setUsername] = useState("");
  const [color1, setColor1] = useState("#6c757d");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [color2, setColor2] = useState("#6c757d");
  const [color3, setColor3] = useState("#6c757d");

  useEffect(() => {
    if (params.id) {
      const palette = props.palettes.find(
        (palette) => palette.id === params.id
      );
      if (palette) {
        setPaletteName(palette.fields.palette);
        setUsername(palette.fields.username);
        setColor1(palette.fields.hex1);
        setColor2(palette.fields.hex2);
        setColor3(palette.fields.hex3);
        setName1("");
        setName2("");
        setName3("");
      }
    }
  }, [params.id, props.palettes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPalette = {
      fields: {
        palette: paletteName,
        hex1: color1,
        hex2: color2,
        hex3: color3,
        username: username,
      },
    };
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, newPalette, config);
    } else {
      await axios.post(baseURL, newPalette, config);
    }
    props.setToggleFetch((curr) => !curr);
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          autoComplete="off"
          type="text"
          id="form-palette"
          name="palette name"
          placeholder="palette name"
          value={paletteName}
          onChange={(e) => setPaletteName(e.target.value)}
        />
        {params.id ? (
          <h3>{username}</h3>
        ) : (
          <input
            required
            autoComplete="off"
            type="text"
            id="form-user"
            name="username"
            placeholder="your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}
        <label htmlFor="input1" style={{ backgroundColor: `${color1}`}}>click
        <input
          type="color"
          className="form-color"
          id="input1"
          value={color1}
          name="pick color one"
          onChange={(e) => {
            setColor1(e.target.value);
            setName1("");
          }}
        />
        </label>
        <section id="input1-info">
          <h3></h3>
          <h5>{color1}</h5>
          <h5></h5>
        </section>
        <label htmlFor="input2" style={{ backgroundColor: `${color2}`}}>to
        <input
          id="input2"
          type="color"
          value={color2}
          name="pick color two"
          onChange={(e) => {
            setColor2(e.target.value);
            setName2("");
          }}
        />
        </label>
        <section id="input2-info">
          <h3></h3>
          <h5>{color2}</h5>
          <h5></h5>
        </section>
        <label htmlFor="input3" style={{ backgroundColor: `${color3}`}}>pick
        <input
          type="color"
          id="input3"
          value={color3}
          name="pick color three"
          onChange={(e) => {
            setColor3(e.target.value);
            setName3("");
          }}
        />
        </label>
        <section id="input3-info">
          <h3></h3>
          <h5>{color3}</h5>
          <h5></h5>
        </section>
        <button type="submit" id="submit-btn">
          save palette
        </button>
      </form>
    </>
  );
};

export default Form;
