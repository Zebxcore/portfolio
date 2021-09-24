import React from "react";
import profile from '../assets/profile.png';

function homeTop(){
    return(
        <div>
            <h1 className="header"> CISC275 - Intro to Software Engineering </h1>
        

            <div>
                <div className="row">
                    <div className="col">
                        <p id="intro"> 
                            This is Sebastian Cortes' portfolio for CISC275 - Intro to Software Engineering <br /><br />
                            You can find a link to my repository <a href="https://github.com/Zebxcore/Zebxcore.github.oi" target="_blank "> here</a>. 
                            You can reach me at scortesz@udel.edu, I will be updating this website regularly so expect bugs everywhere :) (or not lol)
                        </p>
                    </div>
                    <div className="col">
                        <div id="intro-img">
                            <img id="img" src={profile} alt="Highschool Graduation, 2017" />
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            
        </div>
    )
}

export default homeTop;