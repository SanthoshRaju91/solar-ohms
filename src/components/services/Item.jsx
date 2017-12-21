import React from 'react';

const Item = props => {
    return (
        <div className="col-sm-4 col-xs-6 to_animate" data-animation="pullUp">
            <div className="service-teaser with_corners hover_corners small_corners topmargin_30">
                <div className="teaser_content">
                    <div className="teaser">
                        <div className="teaser_icon grey size_normal">
                            <i className={props.iconClass}></i>
                        </div>
                        <p className="text-uppercase raleway bold darklinks bottommargin_0">
                            <a href="#">{props.title}</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;