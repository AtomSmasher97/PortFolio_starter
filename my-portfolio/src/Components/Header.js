import React from "react";
import './CSS/Header.css';  


const Header = () => {
    return( 
        <header className="header">
            <div className="logo">
                <h1> Venkateswar Reddy Kothapally </h1>
            </div> 
            <nav>
      <div class="navbar">
        <div class="container nav-container">
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
           
          <div class="menu-items">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#projects">blogs</a></li> 
            <li><a href="#contact">contact</a></li>
          </div>
        </div>
      </div>
    </nav> 
               </header>
        );
}

export default Header; 