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
							I'm baby 3 wolf moon bushwick photo booth, cliche synth meh air
							plant flannel mixtape selvage. Four dollar toast letterpress
							intelligentsia literally microdosing, yr pour-over viral waistcoat
							post-ironic PBR&B gastropub drinking vinegar. 90's scenester XOXO
							disrupt plaid four dollar toast man braid. Pitchfork pinterest
							kale chips synth.
						</p>
						<div class="quote">
							"The best pie this neighbourhood has to offer" -
							<strong>Tom Huntington</strong>
						</div>
						<a href="#" class="reserve-btn">
							Reserve
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
