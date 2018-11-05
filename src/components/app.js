import React, { Component } from "react";

import './styles/App.css';

class App extends Component {

  doSome = () => {
    console.log('hello')
  };

  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <div>and here is another text</div>
        <div>and here is another text</div>

        {this.doSome()}
      </div>
    );
  }
}

export default App;