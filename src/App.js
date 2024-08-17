import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Album from "./components/Album";
import Blog from "./components/Blog";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Upload from "./components/Upload";
import ImageInfo from "./components/ImageInfo";

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
          path: "/home",
          element: <Home />,
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
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/upload",
          element: <Upload />,
        },
        {
          path: "/imageInfo",
          element: <ImageInfo />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}> </RouterProvider>
    </Provider>
  );
}

export default App;
