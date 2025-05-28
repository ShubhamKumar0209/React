import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("");  
    const handleUpClick=()=>{
         setText(text.toUpperCase());
    }
    const handleDownClick=()=>{
         setText(text.toLowerCase());
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        setText("");
    }
    const handleReverseClick=()=>{
        const reversedText=text.split(" ").map(word=>word.split("").reverse().join("")).join(" ");
        setText(reversedText);
    }
    const words=text.trim()===""?0: text.trim().split(/\s+/).length
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="my-box" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>Reverse</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{words} words and {text.length} characters</p>
            <p>Time to read {0.08*words} mins</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>

    );
}
