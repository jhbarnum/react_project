import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';



class App extends Component {
  state = {
    userinput: [
      {name: 'Jared', username: 'jbarnum'},
      { name: 'Paragraph 1' },
      { name: 'Paragraph 2' }
    ],
      showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    const style = {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '1px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>
        <UserInput
          name={this.state.userinput[0].name}
          changed={this.newUserNameHandler} />
        <UserOutput
          name={this.state.userinput[1].name} />
        <UserOutput
          name={this.state.userinput[2].name} />
        <UserOutput
          username={this.state.userinput[0].username} />
      </div> );
    }


    return (
      <div className="App">
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle People</button>
          {persons}
        

      <button style={style}
      onClick={() => this.userNameHandler('JB')}>Change UserName</button>
          <div>
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
      </div>
    );
  }
}

export default App;


// {
//   this.state.showPersons ?
//     <div>
//       <UserInput
//         name={this.state.userinput[0].name}
//         changed={this.newUserNameHandler} />
//       <UserOutput
//         name={this.state.userinput[1].name} />
//       <UserOutput
//         name={this.state.userinput[2].name} />
//       <UserOutput
//         username={this.state.userinput[0].username} />
//     </div>
//     : null
// }