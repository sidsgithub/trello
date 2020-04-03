import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './routes';
import NavbarComponent from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
