import React from 'react';
import config from './config';
import Item from './Item';

const Offer = props => {
    return (
        <section className="ls section_padding_110">
				<div className="container">
					<div className="row">
						<div className="col-md-offset-2 col-md-8 text-center">
							<div className="cornered-heading center-heading bottommargin_40">
								<h2 className="text-uppercase">Why Solar</h2>
							</div>
							<p>
								<em>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus erat in tincidunt consequat. Phasellus sit amet convallis turpis, molestie nunc. Nulla facilisi. Vestibulum aliquam convallis ligula.
								</em>
							</p>
						</div>
					</div>
					<div className="row">
						{
                            config.map((current, index) => (<Item key={index} { ...current}> <a href="#" className="theme_button color1">Read More</a> </Item>))
                        }												
					</div>
				</div>
			</section>
    );
};

export default Offer;
