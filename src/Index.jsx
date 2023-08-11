import React, { useState } from "react";

export default function App() {
  //   const [text_option, setTextOption] = useState(0);
  //   const [loading, setLoading] = useState(false);
  //   const [input_text, setInputText] = useState("");
  //   const [medical_object, setMedicalObject] = useState(null);
  // Define other states as needed

  const handleTextOptionChange = (event) => {
    setTextOption(parseInt(event.target.value));
  };

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const analyzeText = () => {
    // Implement the logic for text analysis here
    // Update loading state and setMedicalObject accordingly
  };

  return (
    <div>
      <div className="mdl-grid" id="app">
        <div
          style={{ textAlign: "center" }}
          className="mdl-cell mdl-cell--12-col"
        >
          <h2>Natural Language Healthcare API Demo</h2>
          {/* Rest of the content */}
        </div>
        <div id="demo-app">
          <label
            className="mdl-radio mdl-js-radio mdl-js-ripple-effect"
            htmlFor="option-1"
          >
            <input
              type="radio"
              id="option-1"
              className="mdl-radio__button"
              name="text_doc"
              value={0}
              //   checked={text_option === 0}
              //   disabled={loading}
              onChange={handleTextOptionChange}
            />
            <span className="mdl-radio__label">Sample Medical record</span>
          </label>
          {/* Repeat similar blocks for other radio options */}

          <textarea
            type="text"
            rows="10"
            id="input"
            // disabled={loading || using_sample_text}
            placeholder="Enter your medical text here..."
            // value={input_text}
            onChange={handleInputTextChange}
            maxLength={2000}
          ></textarea>

          <button
            id="button"
            className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
            onClick={analyzeText}
            // disabled={loading || input_text.length === 0}
          >
            ANALYZE
          </button>
          {/* Loading bar and response container */}

          <div className="output">
            <div className="output-1">
              <h3>Original Text</h3>
              <p>Sample Text</p>
            </div>
            <div className="output-2">
              <h3>Analyzed Keywords</h3>
              <p>Sample Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
