import React from 'react';

const Item = props => {
    return (
        <div className="col-md-4 col-sm-8 col-sm-offset-2 col-md-offset-0">
            <div className="bg_teaser light_teaser with_shadow with_corners text-center topmargin_25">
                <div className="bg_overlay"></div>
                <img src={props.imgSrc} alt=""/>
                <div className="teaser_content">
                    <div className="teaser text-center">
                        <div className="teaser_icon grey size_big">
                            <i className={props.iconClass}></i>
                        </div>
                        <h4 className="text-uppercase topmargin_25">{props.header}</h4>
                        <hr className="divider_2_40 bottommargin_25"/>
                        <p className="darken-font-color">
                            {props.desc}
                        </p>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;