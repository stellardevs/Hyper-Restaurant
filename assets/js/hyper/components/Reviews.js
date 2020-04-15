import { h, app } from 'hyperapp';

export default function Reviews({ state, actions }) {
	var currentReview = function() {
		console.log();
		return (
			<div>
				<h5 class="comp-title"> Reviews </h5>
				<h2>{state.reviewsData[state.reviewStatus.currentReview].company}</h2>
				<h4>
					"{state.reviewsData[state.reviewStatus.currentReview].highlight}"
				</h4>
				<p>{state.reviewsData[state.reviewStatus.currentReview].review}</p>
				<div class="author">
					<strong>
						{state.reviewsData[state.reviewStatus.currentReview].author}{' '}
					</strong>{' '}
					- {state.reviewsData[state.reviewStatus.currentReview].authorInfo}
				</div>
			</div>
		);
	};
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
						{currentReview()}
						<div class="arrows">
							<i
								class={`fas fa-arrow-left ${
									state.reviewStatus.currentReview > 0 ? 'ready' : ''
								}`}
							></i>
							<i
								class={`fas ${
									state.reviewStatus.currentReview ==
									state.reviewsData.length - 1
										? ''
										: 'ready'
								} fa-arrow-right`}
							></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
