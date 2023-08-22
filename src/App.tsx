import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Movies from "./pages/Movies";
import HomePage from "./pages/Home";

export default function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
      </Routes>
    </div>
  );
}
