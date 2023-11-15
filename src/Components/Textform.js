import React, { useState } from "react";
import { sentenceCase } from "sentence-case";
import { titleCase } from "title-case";
export default function Textform(props) {
  const handleUp = () => {
    setText(text.toUpperCase());
  };
  const handleSen = () => {
    setText(sentenceCase(text));
  };
  const handleTile = () => {
    setText(titleCase(text));
  };
  const handleDown = () => {
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText(text.replace(text, ""));
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
            <button
              disabled={text.length === 0}
              className="btn btn-primary mx-1 my-1  "
              onClick={handleUp}
            >
              Convert to UpperCase
            </button>

            <button
              disabled={text.length === 0}
              className="btn btn-outline-info  mx-1  my-1"
              onClick={handleDown}
            >
              Convert to LowerCase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-outline-danger  mx-1  my-1"
              onClick={handleSen}
            >
              Convert to SentenceCase
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-outline-warning  mx-1  my-1"
              onClick={handleTile}
            >
              Convert to TileCase
            </button>
            <button
              disabled={text.length === 0}
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
          Total Words :{" "}
          <b>
            {" "}
            {
              text.split(" ").filter((element) => {
                return element.length != 0;
              }).length
            }
          </b>{" "}
          | Total Characters : <b>{text.length}</b> Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}{" "}
          Minutes to Read Complete Text
        </p>
        <h3>Preview</h3>
        <p>
          {sentenceCase(text.length > 0 ? text : "Enter your text to preview")}
        </p>
      </div>
    </>
  );
}
