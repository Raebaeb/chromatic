

function Palette(props) {
  const palette = props.palette;
  return (
    <container className="palette-card">
      <h1>{palette.fields.username}</h1>
    </container>
  )
};

export default Palette;