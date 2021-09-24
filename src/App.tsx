import React from 'react';
import './App.css';
import log from './components/log';
import aboutMe from './components/about-me';
import portfolio from './components/portfolio';
import projects from './components/projects';
import toDo from './components/todo';
import homeTop from './components/home-top';
import homeBottom from './components/home-bottom';
import NavBar from './components/navbar';
import { Route } from 'react-router';

function App() {
  return (
    <div className="App">

      <Route exact path="/home" component={homeTop} />
      
      <NavBar />

      <Route exact path="/home" component={homeBottom} />

      <Route exact path="/about-me" component={aboutMe} /> 
      <Route exact path="/inDepthPortfolio" component={portfolio} /> 
      <Route exact path="/projects" component={projects} /> 
      <Route exact path="/todo" component={toDo} /> 
      <Route exact path="/log" component={log} /> 

      <footer>
        <p>
          All Rights Reserved &copy; 2021
        </p>
      </footer>

    </div>
  );
}

export default App;
