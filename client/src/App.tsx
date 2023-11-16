import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Explore from "./pages/Explore";

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
          path: "/search",
          element: <Explore />,
        },
        {
          path: "*",
          element: <div>Not Found</div>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
