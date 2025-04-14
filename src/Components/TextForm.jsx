import React, {useState} from 'react'

export default function TextForm(props) {
 
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newTEXT = text.toUpperCase();
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
const [text, setText] = useState("Enter text here");
  return (
    <div>
<h1>{props.heading} </h1>
<div className="mb-3">
<label htmlFor="myBox" className="form-label">Example textarea</label>
<textarea className="form-control" value ={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary' onClick={handleUpClick}>Convert to Uppercase</button>
</div>
  )
}
