import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { CurrentPageProvider } from "./context/CurrentPageContext";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-H9EY6S7SQR", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return (
    <div>
      <DarkModeProvider>
        <CurrentPageProvider>
          <Outlet />
        </CurrentPageProvider>
      </DarkModeProvider>
    </div>
  );
};

export default App;