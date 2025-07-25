import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ContentDetail from "./pages/ContentDetail";
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
        path: "/content/bla",
        element: <ContentDetail />,
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
