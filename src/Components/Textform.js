import React, { useState } from "react";
import { sentenceCase } from "sentence-case";
import { titleCase } from "title-case";
export default function Textform(props) {
  const handleUp = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleSen = () => {
    setText(sentenceCase(text));
    props.showAlert("Converted to SentenceCase", "success");
  };
  const handleTile = () => {
    setText(titleCase(text));
    props.showAlert("Converted to TileCase", "success");
  };
  const handleDown = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClear = () => {
    setText(text.replace(text, ""));
    props.showAlert("Cleared Text", "success");
  };
  const handlechange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            onChange={handlechange}
            className="form-control bg-light text-dark"
            id="myBox"
            rows="8"
            value={text}
          >
            {text}
          </textarea>
          <div className="container my-3">
            <button className="btn btn-primary mx-1 my-1  " onClick={handleUp}>
              Convert to UpperCase
            </button>

            <button
              className="btn btn-outline-info  mx-1  my-1"
              onClick={handleDown}
            >
              Convert to LowerCase
            </button>
            <button
              className="btn btn-outline-danger  mx-1  my-1"
              onClick={handleSen}
            >
              Convert to SentenceCase
            </button>
            <button
              className="btn btn-outline-warning  mx-1  my-1"
              onClick={handleTile}
            >
              Convert to TileCase
            </button>
            <button
              className="btn btn-outline-success  mx-1  my-1"
              onClick={handleClear}
            >
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <p>
          Total Words : <b> {text.split(" ").length}</b> | Total Characters :{" "}
          <b>{text.length}</b> Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to Read Complete Text</p>
        <h3>Preview</h3>
        <p>
          {sentenceCase(text.length > 0 ? text : "Enter your text to preview")}
        </p>
      </div>
    </>
  );
}
