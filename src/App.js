import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    userinput: [
      {name: 'Jared'}
    ]
  }

  render() {
    return (
      <div className="App">
       <UserInput 
       name={this.state.userinput[0].name} />
       <UserOutput
       name={this.state.userinput[0].name} />
      </div>
    );
  }
}

export default App;
