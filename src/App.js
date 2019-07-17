import React from "react";
import "./App.css";
import routes from "./routes";
import NavBar from "./clientView/NavBar";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter>
      <NavBar />
      {routes}
    </HashRouter>
  );
}

export default App;
