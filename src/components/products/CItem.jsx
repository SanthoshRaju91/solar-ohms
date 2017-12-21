import React from 'react';

const CItem = props => {
    console.log(props.imgSrc)
    const pathToItems = require('../../vendor/images/gallery/13.jpg');
    
    return (        
        <div className="vertical-item content-absolute">
            <div className="item-media">
                <img src={pathToItems} alt=""/>
                <div className="media-links p-link">
                    <div className="links-wrap">
                        <i className={props.iconClass}></i>
                    </div>
                    <a className="abs-link" title="" href="#project1" data-toggle="tab"></a>
                </div>
            </div>
        </div>
    );
}

export default CItem;