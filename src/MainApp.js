import React, { useState } from "react";
import { AiTwotonePushpin } from 'react-icons/ai';

// ! Style sheets
import "./styles/App.css";
import "./styles/index.css";
import "./styles/var.css";


function MainApp() {
  return (
    <div className="MainApp">

      <div className="note-slip">
        <textarea placeholder="Take a note..." className="slip">
        </textarea>
      </div>

      <div className="note-board">
        <div className="box">the quick brown fox jumped over the lazy dog</div>
        <div className="box">the quick brown fox jumped over the lazy dog, the quick brown fox jumped over the lazy dog, the quick brown fox jumped over the lazy dog</div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
}

export default MainApp;
