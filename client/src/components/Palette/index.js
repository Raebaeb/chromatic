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
    <><container className="palette-card">
        <h4 className='palette-username-top'>{username}</h4>
        <h2 className='palette-name'>{palette}</h2>
      <Link to={`/edit/${props.palette.id}`} className='edit-link'><button className='edit-btn'>edit</button></Link>
      <button className='delete-btn' onClick={handleDelete}>delete</button>
      <section className="palette-colors">
        <article className="color-1" style={{ backgroundColor: `${hex1}` }}></article>
        <article className="color-2" style={{ backgroundColor: `${hex2}` }}></article>
        <article className="color-3" style={{ backgroundColor: `${hex3}` }}></article>
      </section>
    </container>
      <h4 className='palette-username'>{username}</h4>
        </>
  );
}

export default Palette;
