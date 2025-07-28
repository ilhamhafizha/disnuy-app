import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieDetail from "./pages/MovieDetail";
import TVSeriesDetail from "./pages/TVSeriesDetail";
import Movies from "./pages/Movies";
import TVSeries from "./pages/TVSeries";
import "./firebase";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./components/Layout";

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
        path: "/tv/:id",
        element: <TVSeriesDetail />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/tvseries",
        element: <TVSeries />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
