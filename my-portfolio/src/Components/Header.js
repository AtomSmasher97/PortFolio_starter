import React from "react";
import './Header.css'; 
import './wavyLink.css'; 


const Header = () => {
    return( 
        <header className="header">
            <div className="logo">
                <h1> Venkateswar Reddy Kothapally </h1>
            </div>
            <nav> 
            <ul>
                    <li><a href="#home" class="wave-link">HOME</a></li>
                    <li><a href="#about" class="wave-link">About</a></li>
                    <li><a href="#projects" class="wave-link">Projects</a></li>
                    <li><a href="#contact" class="wave-link">Contact</a></li>
                </ul>
            </nav>
               </header>
        
        );
}

export default Header; 