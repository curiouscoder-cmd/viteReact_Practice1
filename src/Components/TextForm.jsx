import React, {useState} from 'react'

export default function TextForm(props) {
 
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newTEXT = text.toUpperCase();
        setText(text.toUpperCase());
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked" + text);
        let newTEXT = text.toLowerCase();
        setText(text.toLowerCase());
    }
    const handleClearClick = () => {
        console.log("text cleaned" );
        let newTEXT = '';
        setText('');
    }

    const handleHideClick = () => {
        console.log("text hided" );
        let newTEXT = '.'.repeat(text.length);
        setText('.'.repeat(text.length));
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
const [text, setText] = useState("");
  return (
    <>
    <div className = 'container'>
<h1>{props.heading} </h1>
<div className="mb-3">
<label htmlFor="myBox" className="form-label">Example textarea</label>
<textarea className="form-control" value ={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
<button className='btn btn-primary mx-1' onClick={handleHideClick}>Hide Text</button>
</div>
<div className="container my-3">
    <h2>Your Text summary</h2>
    <p> {text.split(' ').length} and {text.length} characters</p>
    <p>{0.008 *text.split(' ').length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    
</div>
</>
  )
}
