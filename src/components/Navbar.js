import React from 'react'

import logo from '../imgs/insta-logo.png';

export default function Navbar({logout}) {
    return (

        <nav className="navbar">

            <div className="navbar__box--1">

                <div className="item--1">
                    <i className="fab fa-3x fa-instagram "></i>
                </div>

                <div className="line"> </div>

                <div className="item--2">
                   <img src={logo} alt='insta logo' /> 
                </div>

            </div>


    

            <div className="navbar__box--2">
    
             <div className="item--2" style={{cursor: 'pointer'}}>
                <i className="far   fa-user"></i>
            </div>
    
            <div onClick={logout} style={{cursor: 'pointer'}} className="item--3">
                <i className="fas fa-sign-out-alt"></i>
            </div> 
            
            </div>


        </nav>
            
    
    
    
    
    
        )
}
