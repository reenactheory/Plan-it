import React, { Component } from 'react';
import './App.css';
import clock from './components/clock.js';

class App extends Component {
  render() {
    return (
      <div id="App">
          <div id="header">
            <div id="texts">
              <p className="title-text">Plan-it</p>
              <p className="one-line-text">Always do your best</p>
            </div>
            <clock>d</clock>
        </div>
      </div>
    );
  }
}
  
export default App;