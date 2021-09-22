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
      <section className="palette-info">
        <h2>{palette}</h2>
        <h4>{username}</h4>
        <Link to={`/edit/${props.palette.id}`}><button className='edit-btn'>edit</button></Link>
        <button className='delete-btn' onClick={handleDelete}>delete</button>
      </section>
      <section className="palette-colors">
        <article className="color-1" style={{ backgroundColor: `${ hex1 }` }}></article>
        <article className="color-2" style={{ backgroundColor: `${ hex2 }` }}></article>
        <article className="color-3" style={{ backgroundColor: `${ hex3 }` }}></article>
      </section>
    </container>
  );
}

export default Palette;
