import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, config } from "../../services";
import './palette.css'

function Palette(props) {
  const { palette, username, hex1, hex2, hex3 } = props.palette.fields;

  const handleDelete = async () => {
    await axios.delete(`${baseURL}/${props.palette.id}`, config)
    props.setToggleFetch((curr) => !curr)
  }
  return (
    <container className="palette-card">
      <h2>{palette}</h2>
      <h4>{username}</h4>
      <div className="color-1" style={{ backgroundColor: `${ hex1 }` }}></div>
      <div className="color-2" style={{ backgroundColor: `${ hex2 }` }}></div>
      <div className="color-3" style={{ backgroundColor: `${ hex3 }` }}></div>
      <Link to={`/edit/${props.palette.id}`}><button>Edit</button></Link>
      <button onClick={handleDelete}>Delete</button>
    </container>
  );
}

export default Palette;
