import { StrictMode, createContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/home';
import Tasks from './routes/tasks';
import ErrorPage from './error-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tasks",
    element: ((localStorage.getItem("shift") == null) || (localStorage.getItem("position") == null)) ? <ErrorPage /> : <Tasks />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
