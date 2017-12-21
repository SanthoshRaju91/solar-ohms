import React, { Component } from 'react';
import CItem from './CItem';

export default class Carousel extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(window.loadFlexSlider) {
            window.loadFlexSlider();            
        }
    }
    

    render() {
        const { carousels } = this.props;

        return (

            <div className="owl-carousel projects-carousel topmargin_40" data-margin="10" data-nav="true" data-items="6" data-themeclassName="owl-theme" data-responsive-lg="3">
                {
                    carousels.map((current, index) => (<CItem key={index} { ...current}></CItem>))
                }
            </div>
        )
    }
}