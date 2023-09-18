import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
export default function Navbar(props){
    return(
       
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className={`container-fluid text-${props.mode === 'light'? 'dark':'light'}`}>
                <Link className='navbar-brand' to='/'>{props.title}</Link>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' 
                    aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                <div className='collapse navbar-collapse' id='navbarSupportedContent'>

                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item active'>
                            <Link className='nav-link' aria-curremt='page' to='/'>Home</Link>
                        </li>

                        <li className='nav-item mr-auto'>
                            <Link className='nav-link' to='/about'>{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className='form-check form-switch' style={{position:'absolute', right:'1%'}} >
                        <input className='form-check-input' type='checkbox' onClick={props.toggleMode} id='customSwitch1'/>
                        <label className='form-check-label' for='customSwitch1'>nable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// limit title and aboutText input type to string
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired 
}

// set title and aboutText
Navbar.defaultProps = {
    title: 'Title',
    aboutText: 'About'
}