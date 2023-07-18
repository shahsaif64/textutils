import React, { useState } from 'react'


export default function TextChange(props) {
    const [text, setText] = useState("");
    
    const ToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        // console.log(newText);
        props.showAlert('success','Letters converted to Uppercase')
       }

    const Tolower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // console.log(newText);
        props.showAlert('success','Letters converted to LowerCase')
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
        props.showAlert('success','Text has been Cleared')
       }
    const ToCopy = () => {
         navigator.clipboard.writeText(text);
        props.showAlert('success','Copied to Clipboard')
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
                    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='info'?'black':'white'}} value={text} onChange={TextonChange} id="textBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-outline-success my-1 mx-1" onClick={ToUpper}>UPPER-CASE</button>
                <button disabled={text.length===0} className="btn btn-outline-warning my-1 mx-1" onClick={Tolower}>lower-case</button>
                <button disabled={text.length===0} className="btn btn-outline-info my-1 mx-1" onClick={ToCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-outline-danger my-1 mx-1" onClick={ToClear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-outline-danger my-1 mx-1" onClick={speak}>Read it to Me</button>
            </div>

            <div className="container mt-3">
                <h3>Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{(text.split(/\s+/).filter((element)=>{return element.length!==0}).length*0.008).toFixed(3)} Minutes Read</p>

              

            </div>
        </>

    );
}