import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./screens/LoginPage";
import RegisterPage from "./screens/RegisterPage";
import Dashboard from "./screens/Dashboard";
import Requests from "./screens/Dashboard/Requests";
import DonorsPage from "./screens/Dashboard/DonorsPage";
// import "./style.scss";
import ChatScreen from "./screens/ChatScreen";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/requests",
    element: <Requests />,
  },
  {
    path: "/donors",
    element: <DonorsPage />,
  },
  {
    path: "/chats",
    element: <ChatScreen />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ChatContextProvider>
        <RouterProvider router={router} />
      </ChatContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
