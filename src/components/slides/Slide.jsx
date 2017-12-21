import React from 'react';

const Slide = props => {
    return (
        <div>
            <img src={props.imgSrc} alt=""/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="slide_description_wrapper">
                            <div className="slide_description">
                                <div className="intro-layer" data-animation="slideExpandUp">
                                    <div className="cornered-block">
                                        <p className="grey fontsize_20 text-uppercase">
                                            {props.header1}                                            
                                        </p>
                                        <p className="big grey raleway text-uppercase bold">
                                            {props.header2}                                            
                                        </p>
                                        <p className="grey fontsize_16">
                                            {props.desc}                                            
                                        </p>
                                        <div className="bottom-corners"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    );
}

export default Slide;