import React, { useState, useRef } from "react";
import { RiPushpin2Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

// ! Style sheets
import "./styles/Global/App.css";
import "./styles/index.css";
import "./styles/var.css";

function MainApp() {
  const [inputText, setInputText] = useState(""); // State to store the input text
  const [createdDivs, setCreatedDivs] = useState([]); // State to store the created divs

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update the inputText state
  };

  const autoResize = (textarea) => {
    textarea.style.height = "auto"; // Reset the height to auto to calculate the new height based on content
    textarea.style.height = textarea.scrollHeight + "px"; // Set the height to match the content's scroll height
  };

  const moveText = () => {
    if (inputText.trim()) {
      // Create a new div and add it to the list of created divs
      setCreatedDivs([...createdDivs, inputText.trim()]);
      setInputText(""); // Clear the input field
    }
  };

  const removeFunction = () => {
    const element = document.getElementById("created-div");
    if (element) {
      element.remove();
    }
  };

  return (
    <div className="App">
      <div className="App-header-content">
        <textarea
          id="inputText"
          placeholder="Take a note..."
          value={inputText}
          onChange={handleInputChange}
          onInput={(e) => autoResize(e.target)} // Call autoResize on input
        ></textarea>
        <button className="outputPin" onClick={moveText}>
          <RiPushpin2Line />
        </button>
      </div>

      <div id="outputDiv">
        {createdDivs.map((text, index) => (
          <div key={index} id="created-div">
            {text}

            <button className="created-div-functions" onClick={removeFunction}>
              <AiFillCloseCircle className="removeNote" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
