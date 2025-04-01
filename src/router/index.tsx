import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import ManageLayout from "../layouts/ManageLayout";
import List from "../pages/manage/List";
import Trash from "../pages/manage/Trash";
import Star from "../pages/manage/Star";
import QuestionLayout from "../layouts/QuestionLayout";
import Edit from "../pages/question/edit";
import Stat from "../pages/question/stat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "manage",
        element: <ManageLayout />,
        children: [
          { path: "list", element: <List /> },
          { path: "star", element: <Star /> },
          { path: "trash", element: <Trash /> },
        ],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "question",
    element: <QuestionLayout />,
    children: [
      { path: "edit/:id", element: <Edit /> },
      { path: "stat/:id", element: <Stat /> },
    ],
  },
]);

export default router;
