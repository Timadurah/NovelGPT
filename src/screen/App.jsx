import React from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";

function App() {
  return (
    <div className="d-flex justify-content-end align-items-start">
      <Sidenav />
      <Main />
    </div>
  );
}

export default App;
