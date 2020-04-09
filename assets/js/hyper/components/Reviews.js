import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	return (
		<section id="Reviews">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<div class="side-img">
							<img src="https://www.thechronicleherald.ca/media/photologue/photos/cache/newfoundland-chef-shaun-hussey-competes-in-new-season-of-top-chef-canada-1_large.jpg"></img>
						</div>
					</div>
					<div class="col-md-4">
						<h5 class="comp-title"> Reviews </h5>
						<h2>The Food Master's</h2>
						<h4>"Best pizza in the city!"</h4>
						<p>
							I'm baby 3 wolf moon bushwick photo booth, cliche synth meh air
							plant flannel mixtape selvage. Four dollar toast letterpress
							intelligentsia literally microdosing, yr pour-over viral waistcoat
							post-ironic PBR&B gastropub drinking vinegar. 90's scenester XOXO
							disrupt plaid four dollar toast man braid. Pitchfork pinterest
							kale chips synth.
						</p>
						<div class="author">
							<strong>Joe Bastachi </strong> - Winner of Master Chef
						</div>
						<div class="arrows">
							<i class="fas ready fa-arrow-left "></i>
							<i class="fas fa-arrow-right"></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
