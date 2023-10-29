import React, { useState } from "react";
import logo from "./logo.svg";
import { Login } from "./Login";
import { Register } from "./Register";
import MainApp from "./MainApp"; // Import the new page component
import { SiScrollreveal } from 'react-icons/si';

// ! Style sheets
import "./styles/Global/App.css";
import "./styles/index.css";
import "./styles/var.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <div className="App-header">
      
        <a className="swingback" onClick={() => handlePageChange("mainapp")}>
        <SiScrollreveal className="icon"/>Libernotes
        </a>
      </div>

      {/* Render the content based on the current page */}
      {currentPage === "login" ? (
        <Login onFormSwitch={() => handlePageChange("register")} />
      ) : currentPage === "register" ? (
        <Register onFormSwitch={() => handlePageChange("login")} />
      ) : currentPage === "mainapp" ? (
        <MainApp />
      ) : null}
    </div>
  );
}

export default App;
