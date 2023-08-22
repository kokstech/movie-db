import MoviesComponent from "../components/Movies";
import AddMovie from "../components/AddMovie";
import { Box } from "grommet";
export default function Movies() {
  return (
    <Box>
      <h1>Movies Database</h1>
      <AddMovie />
      <MoviesComponent showButtons={true} titleSize={false} />
    </Box>
  );
}
