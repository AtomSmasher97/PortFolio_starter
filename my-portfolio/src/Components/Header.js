import React from "react";
import './CSS/Header.css';  


const Header = () => {
    return( 
        <header className="header">
            <div className="logo">
                <h1> Venkateswar Reddy Kothapally </h1>
            </div>
            <nav> 
            <ul>
                    <li><a href="#home" >HOME</a></li>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#projects" >Projects</a></li>
                    <li><a href="#contact" >Contact</a></li>
                </ul>
            </nav>
               </header>
        
        );
}

export default Header; 