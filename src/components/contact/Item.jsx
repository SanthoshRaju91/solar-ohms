import React from 'react';

const Item = props => {
    return (
        <div className="col-sm-4 col-lg-offset-1 col-lg-3 text-center">
            <div className="teaser inline-block topmargin_30 bottommargin_20">
                <div className="media-left">
                    <div className="teaser_icon size_small grey">
                        <i className="flaticon-signs"></i>
                    </div>
                </div>
                <div className="media-body text-left">
                    <h5 className="text-uppercase fontsize_16 extra-bold">{props.title}</h5>
                    <p>{props.desc1}
                        <br/>{props.desc2}</p>
                </div>
            </div>
        </div>
    )
}

export default Item;