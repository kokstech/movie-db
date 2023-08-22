import { Box } from "grommet";
import Movies from "../components/Movies";

const HomePage = () => {
  return (
    <Box>
      <h1>Just a Movie placeholders</h1>
      {/* <Movies titleSize={true} showButtons={false} /> */}
      <h2>
        You can check, edit or delete list of movies on following link <br />
        <a href="/movies">Movies list</a>
      </h2>
    </Box>
  );
};

export default HomePage;
