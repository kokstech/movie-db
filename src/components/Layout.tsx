import { Link } from "react-router-dom";
import { Header, Nav } from "grommet";

const HeaderLayout = () => {
  return (
    <Header
      direction="row"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      pad="small"
    >
      <h1>
        <Link to="/">MOVIE DB</Link>
      </h1>

      <Nav direction="row">
        <Link
          to="/"
          style={{
            color: "white",
          }}
        >
          HOME
        </Link>
        <Link
          to="/movies"
          style={{
            color: "white",
          }}
        >
          LIST OF MOVIES
        </Link>
      </Nav>
    </Header>
  );
};

export default HeaderLayout;
