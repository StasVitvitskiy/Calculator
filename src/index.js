import React, { Component } from 'react';
import { render } from 'react-dom';
import Calculator from './calculator';
import './app.css';

class App extends Component {

  render() {
    return (
      <Calculator/>
    )
  }
}

render(<App />, document.getElementById('root'));
