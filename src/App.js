import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    userinput: [
      {name: 'Jared', username: 'jbarnum'},
      { name: 'Paragraph 1' },
      { name: 'Paragraph 2' }
    ]
  }
  newUserNameHandler = (event) => {
    this.setState({
      userinput: [
        { name: 'Jared', username: event.target.value },
        { name: 'Paragraph 1' },
        { name: 'Paragraph 2' }
      ]
    })
  }

  userNameHandler = (newUserName) => {
    this.setState({
      userinput: [
        { name: 'Jared', username: newUserName },
        { name: 'Paragraph 1' },
        { name: 'Paragraph 2' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
      <button onClick={() => this.userNameHandler('JB')}>Change UserName</button>
       <UserInput 
       name={this.state.userinput[0].name} 
       changed={this.newUserNameHandler}/>
       <UserOutput
       name={this.state.userinput[1].name}/>
       <UserOutput
       name={this.state.userinput[2].name}/>
       <UserOutput
       username={this.state.userinput[0].username}/>
      </div>
    );
  }
}

export default App;
