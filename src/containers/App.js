import React from "react";
import Header from "../components/Header/Header";

import logo from "../logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header logo={logo} />
    </div>
  );
};

export default App;
