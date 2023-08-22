import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../store/movie-context";
import { Box, Form, TextInput, Button } from "grommet";

const AddMovie = () => {
  const [movieName, setMovieName] = useState<string | undefined>("");
  const movieHandler = useContext(MovieContext).postNewMovie;

  let navigate = useNavigate();
  const newMovieHandler = (e: any) => {
    e.preventDefault();
    if (movieName !== undefined) {
      movieHandler(movieName.toLocaleLowerCase());
    }
    setMovieName("");
    navigate("/");
  };

  return (
    <Box alignSelf="center" align="center" width="medium" animation="fadeIn">
      <h2> Add new Movie</h2>
      <Form onSubmit={newMovieHandler}>
        <div>
          <TextInput
            onChange={(e) => setMovieName(e.target.value)}
            type="text"
            placeholder="name"
            value={movieName}
          />
        </div>
        <div>
          <Button
            gap="small"
            size="large"
            type="submit"
            primary
            label="submit"
            color="neutral-1"
          />
        </div>
      </Form>
    </Box>
  );
};

export default AddMovie;
