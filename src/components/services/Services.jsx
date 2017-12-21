import React from 'react';
import config from './config';
import Item from './Item';

const Services = props => {
    return (
        <section className="cs section_padding_110 services">
				<div className="container">
					<div className="row">
                        <div className="col-lg-6">
                            
                        </div>
						<div className="col-md-8 col-lg-6">
							<div className="cornered-heading bottommargin_60">
								<span className="text-uppercase">From idea to realization</span>
								<h2 className="text-uppercase">Services we provide</h2>
							</div>
							<p className="bottommargin_0">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae arcu nec metus ultrices scelerisque facilisis id leo. Praesent iaculis lorem ut dictum tempus. Pellentesque sit amet erat at orci bibendum consequat.
							</p>
							<div className="row columns_margin_0 service-teasers-row">
								{
                                    config.map((current, index) => (<Item key={index} {...current}></Item>))
                                }																																
							</div>
						</div>
					</div>
				</div>
			</section>
    );
}

export default Services;