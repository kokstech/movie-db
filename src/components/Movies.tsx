import { useContext } from "react";
import { MovieContext } from "../store/movie-context";
import EditMovie from "./EditMovie";
import Buttons from "./Buttons";

import { Grommet, Box } from "grommet";

export default function Movies(props: {
  titleSize: boolean;
  showButtons: boolean;
}) {
  const moviesCtx = useContext(MovieContext);

  const singleMovie = (id: string) => {
    moviesCtx.handleAssignMovie(id);
  };

  return (
    <Grommet>
      {moviesCtx.show && <EditMovie />}
      <Box animation="slideUp" align="center" justify="center" fill>
        {moviesCtx.movies.map((movie: any) => {
          return (
            <Box margin="small" key={movie.id}>
              {!props.titleSize && <h3>{movie.name.toUpperCase()}</h3>}
              {props.titleSize && <h2>{movie.name.toUpperCase()}</h2>}
              {props.showButtons && (
                <Buttons
                  movie={movie}
                  singleMovie={() => {
                    singleMovie(movie.id);
                  }}
                />
              )}
            </Box>
          );
        })}
      </Box>
    </Grommet>
  );
}
