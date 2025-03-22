import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation} from "react-router-dom";

import App from "./App";
import About from './components/About';
import Coursework from './components/Coursework';
import Projects from './components/Projects';
import NotFound from './components/NotFound'; 
import Resume from './components/Resume';

// Google Analytics setup
const trackPageView = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-H9EY6S7SQR", { page_path: url });
  }
};

// Component to track route changes
const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<><Analytics /><About /></>} />
      <Route path="/coursework" element={<><Analytics /><Coursework /></>} />
      <Route path="/projects" element={<><Analytics /><Projects /></>} />
      <Route path="/resume" element={<><Analytics /><Resume /></>} />
      <Route path="*" element={<><Analytics /><NotFound /></>} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
