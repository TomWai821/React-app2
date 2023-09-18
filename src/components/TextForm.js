import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        //console.log("Uppercase was " + text);
        //toUppercase() = abc -> ABC
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success')
    }

    const handleDownClick = () =>{
        //toUppercase() = ABC -> abc
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success')
    }

    const handleClearClick = () =>{
        setText('');
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!', 'success')
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);  //detect remove text
        setText(newText.join(' '));
    }

    const [text, setText] = useState('');
    //text = 'new text';   // wrong way to change state
    //setText('new Text'); // correct way to change state
    return(
        <>
        <div className='container' style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className='mb-3'>
            {/*<label for='myBox' class='form-label'>{props.heading}</label>*/}
            <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'? 'white':'black', color: props.mode === 'light'? 'black':'white'}} id='myBox' rows='8' />
            </div>
            {/* mx-? = margin in x, ? = amount */}
            <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>

            {/*
            Disable button
            <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
            */}

            <button className='btn btn-primary mx-1 my-1' onClick={handleDownClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
        </div>
        <div className={`container my-3 text-${props.mode === 'light'? 'dark':'light'}`}>
            <h1>Your text summary</h1>
            <p> {text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text: 'Enter something in the textbox above to preview it here'}</p>
        </div>
        </>
    )
}