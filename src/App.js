import React, { useState } from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/var.css";
import { Login } from "./Login";
import { Register } from "./Register";
import MainApp from "./MainApp"; // Import the new page component

function App() {
  const [currentPage, setCurrentPage] = useState("login");

  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <div className="main-app-header">
        <a className="swingback" onClick={() => handlePageChange("mainapp")}>
          Libernote
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
