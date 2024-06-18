import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared text!", "success");
  };

  const handleCapital = () => {
    let newText = text.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');

    setText(newText);
    props.showAlert("Converted to Capital", "success");
  };

  const handleUpDown = () => {
    let newText = text.split('').map((char, index) => {
      return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
    }).join('');

    setText(newText);
    console.log(newText);
    props.showAlert("Converted to Up and down letters", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countWords = (text) => {
    return text.split(' ').filter(word => word.trim().length > 0).length;
  };

  const [text, setText] = useState("Enter text here");
  
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#343a40' : '#ffffff', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Texts</button>
        <button className="btn btn-primary mx-1" onClick={handleCapital}>Capitalized Texts</button>
        <button className="btn btn-primary mx-1" onClick={handleUpDown}>Up Down Texts</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Text Summary:</h1>
        <p>{countWords(text)} words and {text.length} characters</p>
        <h2>Time to read:</h2>
        <p>{0.008 * countWords(text)} minutes to read.</p>
        <h2>Preview Texts:</h2>
        <p>{text.length > 0 ? text : "Enter something in above box!"}</p>
      </div>
    </>
  );
}
