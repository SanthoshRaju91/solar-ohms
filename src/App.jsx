import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/headers/Header';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <div className="preloader">
          <div className="preloader_image" />
        </div> */}

        <BrowserRouter>
          <Header></Header>          
        </BrowserRouter>
      </div>
    );
  }
}
