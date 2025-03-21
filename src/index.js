import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import App from "./App";
import About from './components/About';
import Coursework from './components/Coursework';
import Projects from './components/Projects';
import NotFound from './components/NotFound'; 
import Resume from './components/Resume';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <About /> },
      { path: "coursework", element: <Coursework /> },
      { path: "projects", element: <Projects /> },
      { path: "resume", element: <Resume /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
