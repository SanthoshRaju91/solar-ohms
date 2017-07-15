<template lang="html">
  <div class="home">
    <section class="intro_section page_mainslider ds">
			<div class="flexslider">
				<ul class="slides">
					<li>
						<img src="static/images/slide01.jpg" alt="">
						<div class="container">
							<div class="row">
								<div class="col-sm-12 text-center">
									<div class="slide_description_wrapper">
										<div class="slide_description">
											<div class="intro-layer" data-animation="slideExpandUp">
												<div class="cornered-block">
													<p class="grey fontsize_20 text-uppercase">
														Energy as clean as the wind
													</p>
													<p class="big grey raleway text-uppercase bold">
														Clean, Safe, Renewable
													</p>
													<p class="grey fontsize_16">
														Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac dui aliquam efficitur.
													</p>
													<a href="#" class="theme_button color1 topmargin_30">Discover Now</a>
													<div class="bottom-corners"></div>
												</div>
											</div>
										</div>
										<!-- eof .slide_description -->
									</div>
									<!-- eof .slide_description_wrapper -->
								</div>
								<!-- eof .col-* -->
							</div>
							<!-- eof .row -->
						</div>
						<!-- eof .container -->
					</li>
					<li>
						<img src="static/images/slide02.jpg" alt="">
						<div class="container">
							<div class="row">
								<div class="col-sm-12 text-center">
									<div class="slide_description_wrapper">
										<div class="slide_description">
											<div class="intro-layer" data-animation="slideExpandUp">
												<div class="cornered-block">
													<p class="grey fontsize_20 text-uppercase">
														Energy as clean as the wind
													</p>
													<p class="big grey raleway text-uppercase bold">
														Clean, Safe, Renewable
													</p>
													<p class="grey fontsize_16">
														Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac dui aliquam efficitur.
													</p>
													<a href="#" class="theme_button color1 topmargin_30">Discover Now</a>
													<div class="bottom-corners"></div>
												</div>
											</div>
										</div>
										<!-- eof .slide_description -->
									</div>
									<!-- eof .slide_description_wrapper -->
								</div>
								<!-- eof .col-* -->
							</div>
							<!-- eof .row -->
						</div>
						<!-- eof .container -->
					</li>
					<li>
						<img src="static/images/slide03.jpg" alt="">
						<div class="container">
							<div class="row">
								<div class="col-sm-12 text-center">
									<div class="slide_description_wrapper">
										<div class="slide_description">
											<div class="intro-layer" data-animation="slideExpandUp">
												<div class="cornered-block">
													<p class="grey fontsize_20 text-uppercase">
														Energy as clean as the wind
													</p>
													<p class="big grey raleway text-uppercase bold">
														Clean, Safe, Renewable
													</p>
													<p class="grey fontsize_16">
														Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac dui aliquam efficitur.
													</p>
													<a href="#" class="theme_button color1 topmargin_30">Discover Now</a>
													<div class="bottom-corners"></div>
												</div>
											</div>
										</div>
										<!-- eof .slide_description -->
									</div>
									<!-- eof .slide_description_wrapper -->
								</div>
								<!-- eof .col-* -->
							</div>
							<!-- eof .row -->
						</div>
						<!-- eof .container -->
					</li>
					<li>
						<img src="static/images/slide04.jpg" alt="">
						<div class="container">
							<div class="row">
								<div class="col-sm-12 text-center">
									<div class="slide_description_wrapper">
										<div class="slide_description">
											<div class="intro-layer" data-animation="slideExpandUp">
												<div class="cornered-block">
													<p class="grey fontsize_20 text-uppercase">
														Energy as clean as the wind
													</p>
													<p class="big grey raleway text-uppercase bold">
														Clean, Safe, Renewable
													</p>
													<p class="grey fontsize_16">
														Nulla eget ipsum id est accumsan pellentesque nec et odio. Duis sit amet convallis sem, tincidunt feugiat lorem. Nunc porttitor arcu ac dui aliquam efficitur.
													</p>
													<a href="#" class="theme_button color1 topmargin_30">Discover Now</a>
													<div class="bottom-corners"></div>
												</div>
											</div>
										</div>
										<!-- eof .slide_description -->
									</div>
									<!-- eof .slide_description_wrapper -->
								</div>
								<!-- eof .col-* -->
							</div>
							<!-- eof .row -->
						</div>
						<!-- eof .container -->
					</li>

				</ul>
			</div>
			<!-- eof flexslider -->
		</section>

    <div id="solar" class="sections">
      <h1>Solar section</h1>
    </div>

    <div id="solution" class="sections">
      <h1>Solution section</h1>
    </div>

    <div id="choose" class="sections">
      <h1>Choose section</h1>
    </div>

    <div id="contact" class="sections">
      <h1>Contact section</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Home Page'
    }
  }
}
</script>

<style lang="css">

  .mainrow {
      background: url('/static/img/menu-background.png');
      background-repeat: no-repeat;
      background-position: left;
      background-color: rgba(0,0,0,0) !important;

  }

  .sections {
    min-height: 250px;
  }

  .intro_section {
    position: relative;
    top: -5em;
  }

  .intro_section .container {
    margin-top: 7em;
  }
</style>
