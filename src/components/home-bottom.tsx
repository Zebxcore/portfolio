import React from "react";

function homeBottom(){
    return(
        <div>
            <div className="row">
                <div className="col">
                    <h1>
                        Change Log
                    </h1>

                    <h3>
                        09/16/2021
                    </h3>
                    <ul>
                        <li> Expanded TODO and Change Log to their own HTML for better control of length of text</li>
                        <li> Started React App for webpage</li>
                    </ul>
                    
                    <h3>
                        09/15/2021
                    </h3>
                    <ul>
                        <li> Complete overhaul of the website design</li>
                    </ul>

                    <h3>
                        09/13/2021
                    </h3>
                    <ul>
                        <li> Split index.html into more files and changed layout even more with CSS</li>
                    </ul>

                {/* Add button here to go to extended Log */}

                </div>

                <div className="col">
                    <h1>
                        TODO Week 2
                    </h1>
                    <ul>
                        <li className="done"> Practice more HTML and read on more advance tags </li>
                        <li className="done"> Start implementing CSS styles to Portfolio website (Want to check <a href="https://www.youtube.com/watch?v=yfoY53QXEnI" target="_blank">this</a> video out later) </li>
                        <li className="done"> Read and watch more tutorials on Javascript/Typescript </li>
                        <li> Read and watch tutorials for React and hooks </li>
                        <li className="done"> Read and watch tutorials for Boostrap (Maybe watch <a href="https://www.youtube.com/watch?v=k32voqQhODc" target="_blank">this</a> video for flexboxing) </li>
                        <li> Start flashcard game website with Typescript/CSS/HTML and start section with links for future projects </li>
                        <li> Implementation of more advance techniques and functionality like Javascript/Typescript</li>
                        <li> <strong>NEW!</strong> Contemplating the possibility of making a Discord bot on Typescript and create a webpage to add the bot to a private server using APIs</li>
                        <li> <strong>NEW!</strong> Import this website to a React App</li>
                        <li> <strong>NEW!</strong> Start exploring the possibility of doing Git Issues and branching</li>
                    </ul>
                </div>

                {/* Add button here to go to extended TODO */}

            </div>
        </div>
    )
}

export default homeBottom;