import { createContext, useState } from "react";
import useHttp from "../hooks/useHttp";

export const MovieContext = createContext({
  movies: [],
  postNewMovie: (name: string | undefined) => {},
  deleteMovie: (id: string) => {},
  changeMovieName: (id: string, newName: string | null) => {},
  show: false,
  handleIsShow: () => {},
  assignMovie: Object.assign(id),
  handleAssignMovie: (valId: string) => {},
});

function MovieContextProvider(props: any) {
  const [isTrue, setIsTrue] = useState(false);
  const [assignMovie, setAssignMovie] = useState<any>("");
  const [dbState, postDbItem, deleteItemHandler, changeItemNameHandler] =
    useHttp("https://6239b148bbe20c3f66c863ed.mockapi.io/movies");

  const moviesValue = {
    movies: dbState,
    postNewMovie: postDbItem,
    deleteMovie: deleteItemHandler,
    changeMovieName: changeItemNameHandler,
    show: isTrue,
    handleIsShow: () => {
      setIsTrue(!isTrue);
    },
    assignMovie,
    handleAssignMovie: (valId: string) => {
      setAssignMovie(dbState.find((mov: any) => mov.id === valId));
    },
  };

  return (
    <MovieContext.Provider value={moviesValue}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieContextProvider;

function id(id: string) {
  throw new Error("Function not implemented.");
}
