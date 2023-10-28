import React, { useState } from "react";
import "./App.css";


function MainApp() {
  return (
    <div className="MainApp">
      <textarea 
        placeholder="Take a note..."
        
        className="main-note"
      >
        </textarea>
    </div>
  );
}

export default MainApp;
