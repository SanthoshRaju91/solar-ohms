import React, { Component } from 'react';
import Slide from './Slide';

import config from './config';


export default class Slides extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className="intro_section page_mainslider ds">
                <div className="flexslider">
                    <ul className="slides">
                        {
                            config.map((current, index) => {
                                return (
                                    <li key={index}>
                                        <Slide { ...current}></Slide>
                                    </li>
                                );
                            })
                        }																		
                    </ul>
                </div>
            </section>
        )
    }
};