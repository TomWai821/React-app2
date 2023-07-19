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
                  Who are you?
                </button>
              </h2>
              <div id='CollapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                <div className='accordion-body' style={myStyle}>
                    
                </div>
              </div>
            </div>

            <div className='accordion-item' style={myStyle}>
              <h2 className='accordion-header' id='headingTwo'> 
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' 
                data-bs-target='#CollapseTwo' aria-expanded='false' aria-controls='CollapseTwo' style={myStyle}>
                  
                </button>
              </h2>
              <div id='CollapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  
                </div>
              </div>
            </div>

            <div className='accordion-item' style={myStyle}>
              <h2 className='accordion-header' id='headingThree'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' 
                data-bs-target='#CollapseThree' aria-expanded='false' aria-controls='CollapseThree' style={myStyle}>
                  
                </button>
              </h2>
              <div id='CollapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
}