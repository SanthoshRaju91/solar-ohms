import React from 'react';
import config from './config';

const Achievements = props => {
   
    const Item = (data, key) => (
        <div  key={key} className="teaser info-teaser text-center">
            <span className="info-icon info-project teaser_icon"></span>
            <br/>
            <span className="counter highlight" data-from={data.from} data-to={data.to} data-speed="1500">0</span>
            <p className="bold text-uppercase">{data.label}</p>
        </div>
    );

    return (
        <section className="ds section_padding_50 counters_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                         {
                             config.achievements.map((current, index) => Item(current, index))
                         }                       
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Achievements;