import axios from "axios";
import { useState, React, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { baseURL, config } from "../services";

const Form = (props) => {
  const params = useParams();
  const history = useHistory();
  const [paletteName, setPaletteName] = useState("");
  const [username, setUsername] = useState("");
  const [color1, setColor1] = useState("#6c757d");
  const [color2, setColor2] = useState("#6c757d");
  const [color3, setColor3] = useState("#6c757d");

  useEffect(() => {
    if (params.id) {
      const palette = props.palettes.find(
        (palette) => palette.id === params.id
      );
      if (palette) {
        setPaletteName(palette.fields.palette);
        setColor1(palette.fields.hex1);
        setColor2(palette.fields.hex2);
        setColor3(palette.fields.hex3);
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
    <form onSubmit={handleSubmit}>
      <input
        required
        autoComplete="off"
        type="text"
        id="form-palette"
        value={paletteName}
        onChange={(e) => setPaletteName(e.target.value)}
      />
      <input
        required
        autoComplete="off"
        type="text"
        id="form-user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="color"
        id="form-color1"
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
      />
      <input
        type="color"
        id="form-color2"
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
      />
      <input
        type="color"
        id="form-color3"
        value={color3}
        onChange={(e) => setColor3(e.target.value)}
      />
      <button type="submit">save palette</button>
    </form>
  );
};

export default Form;
