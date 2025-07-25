import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import TVSeriesDetail from "./pages/TVSeriesDetail";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TVSeries";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/tv/bla",
        element: <TVSeriesDetail />,
      },
      {
        path: "/movie/bla",
        element: <MovieDetail />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvseries",
        element: <TvSeries />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
