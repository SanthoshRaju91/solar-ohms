import React from 'react';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

import config from './config';

const Products = props => {
    return (
        <section className="ds section_padding_110">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="cornered-heading bottommargin_55 media-topmargin">
								<h2 className="text-uppercase bottommargin_0">Our awesome products, to help you harn solar power</h2>
							</div>
							<p>
								Nulla sed ligula ut ipsum elementum gravida. Pellentesque nec imperdiet felis. Fusce sodales quam eget lorem volutpat, ornare luctus est dictum. Nam varius pretium condimentum. Duis consequat, lectus ac aliquam elementum, purus odio.
							</p>
							<Link to="products" className="theme_button color1 border_button topmargin_25 bottommargin_0">Check All Products</Link>

                            <Carousel carousels={config.carousels}></Carousel>
						</div>
						<div className="col-md-6">
							<div className="tab-content projects-content">

								<div className="vertical-item gallery-item content-absolute ds tab-pane active" id="project1" role="tabpanel">
									<div className="item-media">
										<img src="../../vendor/images/gallery/13.jpg" alt=""/>
										<div className="media-links">
											<div className="links-wrap">
												<a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/13.jpg"></a>
											</div>
											<a href="gallery-single2.html" className="abs-link"></a>
										</div>
									</div>
									<div className="item-content">
										<div className="item-meta">
											<h4 className="text-uppercase">Praesent ultrices dui sed ornare</h4>
											<p className="margin_0 grey">
												<em>Solar System, Wind Turbines</em>
											</p>
										</div>
									</div>
								</div>

								<div className="vertical-item gallery-item content-absolute ds tab-pane" id="project2" role="tabpanel">
									<div className="item-media">
										<img src="../../vendor/images/gallery/12.jpg" alt=""/>
										<div className="media-links">
											<div className="links-wrap">
												<a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/12.jpg"></a>
											</div>
											<a href="gallery-single2.html" className="abs-link"></a>
										</div>
									</div>
									<div className="item-content">
										<div className="item-meta">
											<h4 className="text-uppercase">Praesent ultrices dui sed ornare</h4>
											<p className="margin_0 grey">
												<em>Solar System, Wind Turbines</em>
											</p>
										</div>
									</div>
								</div>

								<div className="vertical-item gallery-item content-absolute ds tab-pane" id="project3" role="tabpanel">
									<div className="item-media">
										<img src="../../vendor/images/gallery/11.jpg" alt=""/>
										<div className="media-links">
											<div className="links-wrap">
												<a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/11.jpg"></a>
											</div>
											<a href="gallery-single2.html" className="abs-link"></a>
										</div>
									</div>
									<div className="item-content">
										<div className="item-meta">
											<h4 className="text-uppercase">Praesent ultrices dui sed ornare</h4>
											<p className="margin_0 grey">
												<em>Solar System, Wind Turbines</em>
											</p>
										</div>
									</div>
								</div>

								<div className="vertical-item gallery-item content-absolute ds tab-pane" id="project4" role="tabpanel">
									<div className="item-media">
										<img src="../../vendor/images/gallery/10.jpg" alt=""/>
										<div className="media-links">
											<div className="links-wrap">
												<a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/10.jpg"></a>
											</div>
											<a href="gallery-single2.html" className="abs-link"></a>
										</div>
									</div>
									<div className="item-content">
										<div className="item-meta">
											<h4 className="text-uppercase">Praesent ultrices dui sed ornare</h4>
											<p className="margin_0 grey">
												<em>Solar System, Wind Turbines</em>
											</p>
										</div>
									</div>
								</div>

								<div className="vertical-item gallery-item content-absolute ds tab-pane" id="project5" role="tabpanel">
									<div className="item-media">
										<img src="../../vendor/images/gallery/09.jpg" alt=""/>
										<div className="media-links">
											<div className="links-wrap">
												<a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/09.jpg"></a>
											</div>
											<a href="gallery-single2.html" className="abs-link"></a>
										</div>
									</div>
									<div className="item-content">
										<div className="item-meta">
											<h4 className="text-uppercase">Praesent ultrices dui sed ornare</h4>
											<p className="margin_0 grey">
												<em>Solar System, Wind Turbines</em>
											</p>
										</div>
									</div>
								</div>

								<div className="vertical-item gallery-item content-absolute ds tab-pane" id="project6" role="tabpanel">
									<div className="item-media">
										<img src="../../vendor/images/gallery/08.jpg" alt=""/>
										<div className="media-links">
											<div className="links-wrap">
												<a className="p-view prettyPhoto" title="" data-gal="prettyPhoto[gal]" href="images/gallery/08.jpg"></a>
											</div>
											<a href="gallery-single2.html" className="abs-link"></a>
										</div>
									</div>
									<div className="item-content">
										<div className="item-meta">
											<h4 className="text-uppercase">Praesent ultrices dui sed ornare</h4>
											<p className="margin_0 grey">
												<em>Solar System, Wind Turbines</em>
											</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
    );
}

export default Products;