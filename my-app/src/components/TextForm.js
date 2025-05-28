import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter text here: ");  
    const handleUpClick=()=>{
         setText(text.toUpperCase());
    }
    const handleDownClick=()=>{
         setText(text.toLowerCase());
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary" onClick={handleDownClick}>Convert to lowercase</button>
        </div>
    );
}
