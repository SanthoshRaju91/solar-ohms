import React from 'react';

const Item = props => {
    return (
        <div className="teaser media inline-block topmargin_50 features-teaser to_animate" data-animation="pullDown">
            <div className="media-left media-middle">
                <div className="teaser_icon fontsize_36 grey with_background">
                    <i className={props.iconClass}></i>
                </div>
            </div>
            <div className="media-body media-middle text-left">
                <h5 className="text-uppercase">
                    <a href="#">{props.title}</a>
                </h5>
                <p>
                    {props.desc}
                </p>
            </div>
        </div>
    );
}

export default Item;