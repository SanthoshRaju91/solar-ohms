import React from 'react';

const Footer = props => {
    return (
        <footer className="page_footer theme_footer ds ms parallax section_padding_top_90 section_padding_bottom_50">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div className="widget widget_text topmargin_20">
                            <p className="bottommargin_30">
                                <img src="../../vendor/images/logo.png" alt=""/>
                            </p>
                            <p className="bottommargin_25">
                                Sed cursus tortor neque, sit amet dignissim purus pretium vel. Nullam et sodales sem. Fusce elit urna, accumsan id mollis eu, egestas a nunc.
                            </p>
                            <div className="page_social_icons inline-block darklinks">
                                <a className="social-icon soc-facebook" href="#" title="Facebook"></a>
                                <a className="social-icon soc-twitter" href="#" title="Twitter"></a>
                                <a className="social-icon soc-google" href="#" title="Google"></a>
                                <a className="social-icon soc-linkedin" href="#" title="LinkedIn"></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div className="widget widget_text topmargin_25">
                            <h4 className="text-uppercase bottommargin_20">contact us</h4>
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-map-marker highlight fontsize_18"></i>
                                </div>
                                <div className="media-body">
                                    1116 15th St, Sacramento, USA
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-phone highlight fontsize_18"></i>
                                </div>
                                <div className="media-body">
                                    0800 123 4567
                                    <br/> 0800 123 4566
                                </div>
                            </div>
                            <div className="media">
                                <div className="media-left">
                                    <i className="fa fa-envelope highlight fontsize_18"></i>
                                </div>
                                <div className="media-body greylinks">
                                    <a href="#">energy@support.com</a>
                                    <br/>
                                    <a href="#">energy@info.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div className="widget widget_twitter topmargin_25">
                            <h4 className="text-uppercase bottommargin_20">Twitter widget</h4>
                            <div className="twitter"></div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 to_animate" data-animation="scaleAppear">
                        <div className="widget widget_slider topmargin_25">

                            <h4 className="widget-title text-uppercase">Gallery</h4>
                            <div className="owl-carousel topmargin_30" data-nav="false" data-dots="true" data-loop="true" data-autoplay="true" data-items="1" data-responsive-lg="1" data-responsive-md="1" data-responsive-sm="1" data-responsive-xs="1">
                                <div className="vertical-item">
                                    <div className="item-media">
                                        <img src="images/gallery/07.jpg" alt=""/>
                                        <div className="media-links middle-links type2">
                                            <div className="links-wrap">
                                                <a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/07.jpg"></a>
                                                <a href="#" className="p-like"></a>
                                                <a className="p-link" href="gallery-single.html"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="vertical-item">
                                    <div className="item-media">
                                        <img src="images/gallery/08.jpg" alt=""/>
                                        <div className="media-links middle-links type2">
                                            <div className="links-wrap">
                                                <a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/08.jpg"></a>
                                                <a href="#" className="p-like"></a>
                                                <a className="p-link" href="gallery-single.html"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="vertical-item">
                                    <div className="item-media">
                                        <img src="images/gallery/09.jpg" alt=""/>
                                        <div className="media-links middle-links type2">
                                            <div className="links-wrap">
                                                <a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/09.jpg"></a>
                                                <a href="#" className="p-like"></a>
                                                <a className="p-link" href="gallery-single.html"></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;