import Main from "../Layout/Main";

import { createBrowserRouter } from "react-router-dom";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import SingleToys from "../Pages/AllToys/SingleToys/SingleToys";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Modal from "../Pages/MyToys/Modal";
import MyToys from "../Pages/MyToys/MyToys";
import Register from "../Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addToys",
        element: (
          <PrivateRouter>
            <AddToys></AddToys>
          </PrivateRouter>
        ),
      },
      {
        path: "toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "myToys",
        element: (
          <PrivateRouter>
            <MyToys></MyToys>
          </PrivateRouter>
        ),
      },
      {
        path: "update",
        element: (
          <PrivateRouter>
            <Modal></Modal>
          </PrivateRouter>
        ),
      },
      {
        path: "toys/:id",
        element: (
          <PrivateRouter>
            <SingleToys></SingleToys>
          </PrivateRouter>
        ),
        loader: ({ params }) => fetch(`https://assignment-11-server-lac.vercel.app/toy/${params.id}`),
      },
    ],
  },
]);

export default router;
