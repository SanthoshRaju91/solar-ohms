import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';

import Landing from './views/Landing';
import Products from './views/Products';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isProduct: false
    }
  }

  render() {
    return (
      <div>
        <div className="preloader">
          <div className="preloader_image" />
        </div>

        <BrowserRouter>
          <div>
            <Header></Header>          
            <div id="canvas">
              <div id="box_wrapper">
                <Switch>
                  <Route exact path="/" component={Landing}></Route>
                  <Route path="/products" render={() => {
                    this.setState({isProduct: true});
                    return (
                      <Products></Products>
                    )
                  }}></Route>
                </Switch>
              </div>
            </div>
            <Footer></Footer>
          </div>          
        </BrowserRouter>
      </div>
    );
  }
}
