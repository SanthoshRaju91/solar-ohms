import React from 'react';
import config from './config';
import Item from './Item';
import Achievements from './Achivements';

const Choose = props => {
    return (
        <div>
            <section className="ls section_padding_110 columns_margin_0">
				<div className="container">
					<div className="row">
						<div className="col-md-4 text-center text-md-left to_animate" data-animation="fadeInLeft">
							<div className="cornered-heading bottommargin_60">
								<h2 className="text-uppercase">Why choose us</h2>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus erat in tincidunt consequat. Phasellus sit amet convallis turpis, id molestie nunc.
							</p>
						</div>
						<div className="col-md-4 col-sm-6">
							{
                                config.first.map((current, index) => (<Item key={index} { ...current}></Item>))
                            }							
						</div>
                        <div className="col-md-4 col-sm-6">
							{
                                config.second.map((current, index) => (<Item key={index} { ...current}></Item>))
                            }							
						</div>
                        
					</div>
				</div>
			</section>
            <Achievements></Achievements>
        </div>        
    );
}

export default Choose;