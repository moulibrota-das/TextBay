import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // const [btntext, setBtnText] = useState("Dark");

  //text is the variable where the data of the state is stored
  //setText is a function to update the text variable

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Text is changed to Upper Case", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Text is changed to Lower Case", "success");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const clearButton = () => {
    setText("");
  };

  return (
    <>
      <div className="container my-3" style={props.myStyle}>
        <h2>{props.heading}</h2>
        <div className="my-3">
          <textarea
          className="form-control"
            onChange={handleChange}
            value={text}
            id="myBox"
            rows="8"
            style={props.myStyle}
          ></textarea>
        </div>

        <div className="container">
          <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2 my-1" onClick={clearButton}>
            Clear
          </button>
        </div>
        
      </div>

      <div className="container my-3" style={props.myStyle}>
        <h2>Text Summary</h2>
        <h6>Words: {text.split(/\s+/).filter((word) => word!== "").length} Characters: {text.length}</h6>
      </div>

      <div className="container my-4" style={props.myStyle}>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}