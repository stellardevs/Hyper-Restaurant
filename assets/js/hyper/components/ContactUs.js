import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
			</div>
			<div class="box">
				<div class="row">
					<div class="col-md-6">One</div>
					<div class="col-md-6">Two</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
