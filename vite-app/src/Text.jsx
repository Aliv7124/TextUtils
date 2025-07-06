import { useState } from "react";
import React from "react";

function Text(props) {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      

      <textarea
        className="form-control mt-5"
        id="mybox"
        value={text}
        rows="8"
        onChange={changeText}
      ></textarea>

      <button className="btn btn-primary mx-3 mt-3" onClick={handleUpperCase}>
        Convert Uppercase
      </button>
      <button className="btn btn-primary mx-3 mt-3" onClick={handleLowerCase}>
        Convert Lowercase
      </button>
      <button className="btn btn-primary mx-3 mt-3" onClick={handleClear}>
        Clear Text
      </button>

      <h2 className={`preview mt-3 mx-3 text-${props.mode === "light" ? "dark" : "light"}`}>Preview</h2>
      <div className="pre mt-3 mx-3">{text.length > 0 ? text : "Nothing to preview"}</div>
      <p className="c mt-3 mx-3">
        Total Words: {text.trim().split(/\s+/).filter(Boolean).length}
      </p>
      <p className="w mt-3 mx-3">Total Characters: {text.length}</p>
    </>
  );
}

export default Text;




























































