import React from "react";
import Button from 'react-bootstrap/Button';

function homeBottom(){
    return(
        <div>

            <hr />

            <div className="row">
                <div className="col">
                    <h1>
                        Change Log
                    </h1>

                    <h3>
                    09/23/2021
                    </h3>
                    <ul>
                        <li> Exported website to a React App</li>
                        <li> Added some info to projects</li>
                        <li> Created and initialized repos and React apps for projects</li>
                    </ul>

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

                    <Button href="/log">See more</Button>

                </div>

                <div className="col">
                    <h1>
                        TODO Week #3
                    </h1>
                    <ul>
                        <li className="done"> Practice more HTML and read on more advance tags </li>
                        <li className="done"> Start implementing CSS styles to Portfolio website (Want to check <a href="https://www.youtube.com/watch?v=yfoY53QXEnI" target="_blank" rel="noreferrer">this</a> video out later) </li>
                        <li className="done"> Read and watch more tutorials on Javascript/Typescript </li>
                        <li className="done"> Read and watch tutorials for React and hooks </li>
                        <li className="done"> Read and watch tutorials for Boostrap (Maybe watch <a href="https://www.youtube.com/watch?v=k32voqQhODc" target="_blank" rel="noreferrer">this</a> video for flexboxing) </li>
                        <li> Start flashcard game website with Typescript/CSS/HTML and start section with links for future projects (In Progress) </li>
                        <li className="done"> Implementation of more advance techniques and functionality like Javascript/Typescript</li>
                        <li> Contemplating the possibility of making a Discord bot on Typescript and create a webpage to add the bot to a private server using APIs (In Progress)</li>
                        <li className="done"> Import this website to a React App</li>
                        <li> Start exploring the possibility of doing Git Issues and branching (I have been watching <a href="https://www.youtube.com/watch?v=Z5iWr6Srsj8" target="_blank" rel="noreferrer">this</a> video)(In Progress)</li>
                        <li> <strong>NEW!</strong> Further Investigate hooks, props and how to render props (<a href="https://www.youtube.com/watch?v=Z5iWr6Srsj8" target="_blank" rel="noreferrer">this</a>) videos seems interesting (In Progress)</li>
                        <li> <strong>NEW!</strong> Watch videos on APIs and how they work so I can include them in my Bot Project</li>
                        <li> <strong>NEW!</strong> Research local storage and how to handle animations for different types of objects</li>
                    </ul>

                    <Button href="/toDo">See more</Button>

                </div>
            </div>
        </div>
    )
}

export default homeBottom;