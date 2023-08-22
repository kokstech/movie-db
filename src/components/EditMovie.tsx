import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../store/movie-context";

import { Box, Button, Layer, Form, FormField, TextInput } from "grommet";

export default function EditMovie() {
  const moviesCtx = useContext(MovieContext);
  const [newMovieName, setNewMovieName] = useState("");

  useEffect(() => {
    if (moviesCtx.assignMovie !== undefined) {
      setNewMovieName(moviesCtx.assignMovie.name);
    }
  }, [moviesCtx.assignMovie]);

  return (
    <Layer
      onEsc={() => moviesCtx.handleIsShow}
      onClickOutside={() => moviesCtx.handleIsShow}
    >
      <Box animation="zoomIn" margin="medium">
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            moviesCtx.changeMovieName(
              moviesCtx.assignMovie.id,
              newMovieName.toLocaleLowerCase()
            );
            moviesCtx.handleIsShow();
          }}
        >
          <FormField name="name" htmlFor="text-input-id" label="Name">
            <TextInput
              onChange={(e) => {
                setNewMovieName(e.target.value);
              }}
              id="text-input-id"
              name="name"
              value={newMovieName}
            />
          </FormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button
              type="button"
              label="Cancel"
              onClick={() => moviesCtx.handleIsShow()}
            />
          </Box>
        </Form>
      </Box>
    </Layer>
  );
}
