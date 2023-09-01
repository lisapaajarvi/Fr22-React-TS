export default function Header() {
  return (
    //stylingexempel med objektvariabel
    <header style={headerStyle}>
      <h1>Marsvinsboken</h1>
    </header>
  );
}

const headerStyle = {
  width: "100%",
  height: "6rem",
  backgroundColor: "darkblue",
  color: "lightblue",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
