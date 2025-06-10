import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name="Shubham";
  render() {
    return (
      <div>
        Hola my first class based Component from {this.name}
      </div>
    )
  }
}

