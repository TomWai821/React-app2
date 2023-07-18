import React, { useState } from 'react'

export default function About(props){

    return(
        <div className='container'>
            <h1 className='my-3' style={{color: props.mode === 'dark'? 'white':'black'}}>About Us</h1>
            <div className='accordion' id='accordionExample'>
              
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingOne'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#CollapseOne' aria-expanded='false' aria-controls='CollapseOne'>
                  Accordion Item #1
                </button>
              </h2>
              <div id='CollapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                    Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingTwo'> 
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#CollapseTwo' aria-expanded='false' aria-controls='CollapseTwo'>
                  Accordion Item #2
                </button>
              </h2>
              <div id='CollapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.
                </div>
              </div>
            </div>

            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingThree'>
                <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#CollapseThree' aria-expanded='false' aria-controls='CollapseThree'>
                  Accordion Item #3
                </button>
              </h2>
              <div id='CollapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
                <div className='accordion-body'>
                  Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                </div>
              </div>
            </div>
          </div>
        </div>
        
    )
}