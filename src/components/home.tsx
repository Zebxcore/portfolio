import React from "react";
import profile from '../assets/profile.png';

function home(){
    return(
        <div>
            <h1> CISC275 - Intro to Software Engineering </h1>
        

            <div>
                <div className="row">
                    <div className="col">
                        <p> 
                            This is Sebastian Cortes' portfolio for CISC275 - Intro to Software Engineering <br /><br />
                            You can find a link to my repository <a href="https://github.com/Zebxcore/Zebxcore.github.oi" target="_blank "> here</a>. 
                            You can reach me at scortesz@udel.edu, I will be updating this website regularly so expect bugs everywhere :) (or not lol)
                        </p>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <img src={profile} alt="Highschool Graduation, 2017" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home;