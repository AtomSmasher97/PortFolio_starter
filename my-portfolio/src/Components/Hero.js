import React from "react";
import './Hero.css'; 

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1> Hello, I'm Venky</h1>
                    <p>Welcome to my portfolio website </p>
                        <a href="#projects" className="btn">
                    Checkout my work here →
                        </a>
                    
            </div>
        </section>
    );
}

export default Hero; 
