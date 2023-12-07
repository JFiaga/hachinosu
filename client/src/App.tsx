import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Explore from "./pages/Explore";
import Music from "./pages/Music";
import Youtuber from "./pages/Youtuber";
import Login from "./pages/Login";
import Film from "./pages/Film";


function App() {



  const Layout = () => {
    return (
     <>
      <Navbar />
      <Outlet/>
     </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category",
          element: <Explore />,
        },
        {
          path: "/category/music",
          element: <Music />,
        },
        {
          path: "/category/film",
          element: <Film />,
        },
        {
          path: "/category/youtuber",
          element: <Youtuber />,
        },
        {
          path: "*",
          element: <div>Not Found</div>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
