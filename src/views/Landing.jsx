import React, { Component } from 'react';

import Slides from '../components/slides/Slides';
import Offer from '../components/offer/Offer';
import Products from '../components/products/Products';
import Choose from '../components/choose/Choose';
import Services from '../components/services/Services';
import Contact from '../components/contact/Contact';

export default class Landing extends Component {
    render() {
        return (
            <div>
                <Slides></Slides>
                <Offer></Offer>
                <Products></Products>
                <Choose></Choose>
                <Services></Services>
                <Contact></Contact>
            </div>
        );
    }
}