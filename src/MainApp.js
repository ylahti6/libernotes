import React, { useState } from "react";
import { AiFillPushpin } from 'react-icons/ai';

function MainApp() {
  const [inputText, setInputText] = useState(""); // State to store the input text
  const [createdDivs, setCreatedDivs] = useState([]); // State to store the created divs

  const handleInputChange = (event) => {
    setInputText(event.target.value); // Update the inputText state
  };

  const moveText = () => {
    if (inputText.trim()) {
      // Create a new div and add it to the list of created divs
      setCreatedDivs([...createdDivs, inputText.trim()]);
      setInputText(""); // Clear the input field
    }
  };

  return (
    <div className="MainApp">
      <div className="note-slip">

        {/* Type in area */}
        <textarea
          id="inputText"
          placeholder="Enter text..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        
        {/* Button to press to export text */}
        <button className="outputPin" onClick={moveText}>
          <AiFillPushpin className="test" />
          </button>
      </div>

      <div id="outputDiv">
        {createdDivs.map((text, index) => (
          <div key={index} className="created-div">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainApp;
