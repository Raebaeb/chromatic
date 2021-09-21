function Palette(props) {
  const { palette, username, hex1, hex2, hex3 } = props.palette.fields;
  return (
    <container className="palette-card">
      <h2>{palette}</h2>
      <h4>{username}</h4>
      <div className="color-1" style={{ backgroundColor: `${ hex1 }` }}></div>
      <div className="color-2" style={{ backgroundColor: `${ hex2 }` }}></div>
      <div className="color-3" style={{ backgroundColor: `${ hex3 }` }}></div>
      <button>Edit</button>
      <button>Delete</button>
    </container>
  );
}

export default Palette;
