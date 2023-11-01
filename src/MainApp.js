import React, { useState } from "react";
import { RiPushpin2Line } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";

// Import any necessary CSS files
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
      // Create a new div and add it to the list of created divs with a unique key
      setCreatedDivs([...createdDivs, inputText.trim()]);
      setInputText(""); // Clear the input field
    }
  };

  const removeFunction = (index) => {
    // Create a copy of the createdDivs array without the item to remove
    const updatedDivs = [...createdDivs];
    updatedDivs.splice(index, 1);
    setCreatedDivs(updatedDivs);
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
          <div key={index} className="created-div">
            <div className="created-div-wrap">
              {text}
              {/* displays date when written */}
              <div className="created-div-date">{new Date().toLocaleString()}</div>
            </div>
            
            {/* displays functions for each note */}
            <div className="created-div-functions">
              <button className="created-div-remove" onClick={() => removeFunction(index)}>
                <AiFillCloseCircle className="created-div-remove-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
