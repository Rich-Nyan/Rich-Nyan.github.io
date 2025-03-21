import React from "react";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import { CurrentPageProvider } from "./context/CurrentPageContext";

const App = () => {
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