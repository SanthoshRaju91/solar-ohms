import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <button className="btn btn-primary">Button</button>
        </div>
      </BrowserRouter>
    );
  }
}
