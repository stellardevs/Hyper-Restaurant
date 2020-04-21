import { h, app } from 'hyperapp';

export default function OurStory({ state, actions }) {
	return (
		<section id="OurStory">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<h5 class="comp-title">Our Story</h5>
						<h2 class="">Cooking is the Art of Adjustment</h2>
						<p>
							In 2018 we decided to open our doors after spending 12 years in
							Venice. Upon returning to Canada we knew that we wanted to bring
							the authentic taste of Italy home with us.<br></br> We at Libre
							Pizza Plaza pride ourselves in using high-quality ingredients
							prepared by our expertly trained chefs. Our chefs specialise in
							local and regional Italian tastes and techniques, so you will
							always enjoy a truly authentic Italian dining experience.
						</p>
						<div class="quote">
							"The best pie this neighbourhood has to offer" <br></br>-
							<strong>Tom Huntington</strong>
						</div>
						<a href="#" class="reserve-btn">
							Reserve a Table
						</a>
					</div>
					<div class="col-md-6">
						<div class="video-img"></div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
