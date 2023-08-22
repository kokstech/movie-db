import { Box, Button } from "grommet";
import { useContext } from "react";
import { MovieContext } from "../store/movie-context";
export default function Buttons(props: any) {
  const moviesCtx = useContext(MovieContext);
  return (
    <Box gap="small" direction="row">
      <Button
        primary
        type="button"
        label="Edit"
        onClick={() => {
          props.singleMovie(props.movie.id);
          moviesCtx.handleIsShow();
        }}
      />
      <Button
        primary
        color="status-error"
        type="button"
        secondary
        label="Delete"
        onClick={() => {
          if (
            window.confirm(
              `You will be removing ${props.movie.name.toUpperCase()} from database, press OK to confirm`
            )
          ) {
            moviesCtx.deleteMovie(props.movie.id);
          }
        }}
      />
    </Box>
  );
}
