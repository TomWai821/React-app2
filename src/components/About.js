import React, { useState } from 'react'

export default function About(props){

  let myStyle = {
    color: props.mode === 'dark'? 'white': 'black',
    backgroundColor: props.mode ===  'dark'? 'black': 'white'
  }
    return(
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className='accordion' id='accordionExample'>
              
            <div className='accordion-item'style={myStyle}>
              <h2 className='accordion-header' id='headingOne'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' 
                data-bs-target='#CollapseOne' aria-expanded='false' aria-controls='CollapseOne' style={myStyle}>
                  <b>How to use textUtils?</b>
                </button>
              </h2>
              <div id='CollapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                <div className='accordion-body' style={myStyle}>
                    Typing the word in input field and press the component you want (e.g. Convert to uppercase/lowercase)
                </div>
              </div>
            </div>

            <div className='accordion-item' style={myStyle}>
              <h2 className='accordion-header' id='headingTwo'> 
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' 
                data-bs-target='#CollapseTwo' aria-expanded='false' aria-controls='CollapseTwo' style={myStyle}>
                  <b>Why you want to make this website?</b>
                </button>
              </h2>
              <div id='CollapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  Because i want to create a text counter website which have convenience components (e.g. remove extra space)
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
}