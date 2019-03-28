import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
// import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2020',
      newDeadline: ''
    }
  }

  changeDeadline() {
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Coundown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline}></Clock>
        <form action="">
          <input type="text" className="formControl" onChange={event => this.setState({newDeadline: event.target.value})} />
          <button type="button" onClick={() => this.changeDeadline()}>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
