import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/headers/Header';
import Slides from './components/slides/Slides';
import Offer from './components/offer/Offer';
import Products from './components/products/Products';
import Choose from './components/choose/Choose';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

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
          <div>
            <Header></Header>          
            <div id="canvas">
              <div id="box_wrapper">
                <Slides></Slides>
                <Offer></Offer>
                <Products></Products>
                <Choose></Choose>
                <Services></Services>
                <Contact></Contact>
                <Footer></Footer>
              </div>
            </div>
          </div>          
        </BrowserRouter>
      </div>
    );
  }
}
