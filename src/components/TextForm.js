import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("Enter Text here");

    const toUpper = () => {
        // console.log("funtion clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    };

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };
    
    return (
        <div className="container mt-5">
            <div className="mb-3">
                <label htmlFor="textBox" className="form-label"><h2>{props.text}</h2></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="10"></textarea>
            </div>
            <button className="btn btn-outline-success" onClick={toUpper}>Convert to UPPER-CASE</button>
        </div>
    );
}
