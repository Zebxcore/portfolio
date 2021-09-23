import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <ul>
                <li><Link to="./App">Home</Link></li>
                <li><Link to="/about-me">About me</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;