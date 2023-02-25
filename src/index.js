import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './screens/LoginPage';
import RegisterPage from './screens/RegisterPage';
import Dashboard from './screens/Dashboard';
import Requests from './screens/Dashboard/Requests';
import "./index.css"
import DonorsPage from './screens/Dashboard/DonorsPage';
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
    element: <Requests />
  },
  {
    path: "/donors",
    element: <DonorsPage />
  },



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

