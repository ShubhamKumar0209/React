import React, { useState, useRef } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const ref = useRef(null);
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Uppper case!", "primary");
    }
    const handleDownClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower case!", "primary");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text has been cleared!", "success");
    }
    const handleReverseClick = () => {
        const reversedText = text.split(" ").map(word => word.split("").reverse().join("")).join(" ");
        setText(reversedText);
        props.showAlert("Reversed each character!", "success");
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(ref.current.value);
        props.showAlert("Text has been copied successfully!", "success");
    }
    const handleExtraSpace=()=>
        {
            let newText=text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Extra spaces removed!", "success");
    }
    const myStyle = { backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
    return (
        <>
            <div className='container' style={myStyle}>
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" id="my-box" rows="8" value={text} style={myStyle} ref={ref} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-success mx-2" onClick={handleDownClick}>Convert to lowercase</button>
                <button className="btn btn-success mx-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-success mx-2 my-2" onClick={handleReverseClick}>Reverse</button>
                <button className="btn btn-success mx-2 my-2" onClick={handleCopyText}>Copy Text</button>
                <button className="btn btn-success mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={myStyle}>
                <h1>Your text summary</h1>
                <p>{words} words and {text.length} characters</p>
                <p>Time to read {0.08 * words} mins</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : `Enter something to preview it here`}</p>
            </div>
        </>

    );
}
