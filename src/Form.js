import React from "react";
import "./App.css";

const Form = ({ handleInput, handleSubmit }) => {
  return (
    <div className="toast-container">
      {/* Input Fields */}
      <div className="input-grid">
        <input
          type="text"
          placeholder="Title"
          name="title"
          className="input-field"
          onChange={(e) => handleInput(e)}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          className="input-field"
          onChange={(e) => handleInput(e)}
        />

        <select
          className="input-field"
          name="type"
          onChange={(e) => handleInput(e)}
        >
          <option value="success">Success</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
        </select>

        <input
          type="number"
          placeholder="Duration (ms)"
          className="input-field"
          name="duration"
          onChange={(e) => handleInput(e)}
        />

        <select
          className="input-field full-width"
          name="position"
          onChange={(e) => handleInput(e)}
        >
          <option value="top-right" name="position">
            Top Right
          </option>
          <option value="top-left" name="position">
            Top Left
          </option>
          <option value="bottom-right" name="position">
            Bottom Right
          </option>
          <option value="bottom-left" name="position">
            Bottom Left
          </option>
        </select>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="btn btn-submit" onClick={handleSubmit}>
          Submit
        </button>
     
      </div>
    </div>
  );
};

export default Form;
