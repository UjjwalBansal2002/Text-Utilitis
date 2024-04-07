import React, { Fragment, useState } from 'react'

export default function Textforms(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To UpperCase","success");
    }
    const handleLoClick=()=>{
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase","success");

    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
        
    }
    const handleClearClick=(event)=>{
        setText("")
        props.showAlert("Text is Cleared","success");
    }
    const handleCopyClick=()=>{
        var input = document.getElementById("copy").value;
        navigator.clipboard.writeText(input); 
        var textCopied = document.getElementById("btn");
        textCopied.title="Text Copied"
        props.showAlert("Copy To Clicpboard","success");

    
    }
    const [text, setText]=useState('')
  return (
    <Fragment>
      <div className="container my-3">
        <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="copy" rows="10"></textarea>
          </div>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} type="button" id="btn" onClick={handleCopyClick} className="btn btn-primary" data-bs-toggle="tooltip"
                    data-bs-placement="top" title="Copy this Text">Copy this Text</button>
      </div>
      <div className="container my-5">
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
          <h4>{0.008*text.split(" ").length*60} Seconds taken to read this paragraph</h4>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Nothing to preview'}</p>
      </div>
    </Fragment>
  )
}
