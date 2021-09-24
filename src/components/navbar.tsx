import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div id="main-bar"> 
            <ul>
                <li><Link to="./home">Home</Link></li>
                <li><Link to="/about-me">About me</Link></li>
                <li><Link to="/inDepthPortfolio">Portfolio</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;