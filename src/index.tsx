import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./store/movie-context";
import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </BrowserRouter>,
  rootElement
);
