import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Album from "./components/Album";
import Blog from "./components/Blog";
import Layout from "./components/Layout";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/album",
          element: <Album />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
      ],
    },
  ]);
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
