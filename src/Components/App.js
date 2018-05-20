import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {

  onIncrement = (e) => {
    e.preventDefault()
    this.props.onIncrement()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        Count: 
        { this.props.value }
        <button onClick={e => this.onIncrement(e)} >
          + 
        </button>
      </div>
    );
  }
}

export default App;
