import React, { useState } from 'react'

export default function TextChange(props) {
    const [text, setText] = useState("");
    
    const ToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log(newText);
       }

    const Tolower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // console.log(newText);
       }
       const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const ToClear = () => {
        let newText = "";
        setText(newText);
        // console.log(newText);
       }

    const TextonChange = (event) => {
        setText(event.target.value);
        // console.log(text);
    }
    return (
        <>
            <div className="container mt-5">
                <div className="mb-3">
                    <label htmlFor="textBox" className="form-label"><h2>{props.title}</h2></label>
                    <textarea className="form-control" value={text} onChange={TextonChange} id="textBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-success" onClick={ToUpper}>UPPER-CASE</button>
                <button className="btn btn-outline-warning ms-2" onClick={Tolower}>lower-case</button>
                <button className="btn btn-outline-danger ms-2" onClick={ToClear}>Clear Text</button>
                <button className="btn btn-outline-danger ms-2" onClick={speak}>Read it to Me</button>
            </div>

            <div className="container mt-3">
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{(text.split(" ").length*0.008).toFixed(3)} Minutes Read</p>

              

            </div>
        </>

    );
}