import { h, app } from 'hyperapp';

export default function ContactUs({ state, actions }) {
	return (
		<section id="ContactUs">
			<div class="container">
				<h5 class="comp-title">Contact Us</h5>
			</div>
			<div class="box">
				<div class="row">
					<div class="col-md-6 left-side">
						<div class="title">
							Ottawa, <span>Ontario</span>
						</div>
						<h6 class="address">58 Main Laneway Ottawa, Ontario</h6>
						<p>
							<strong>email:</strong>{' '}
							<a href="mailto:contactus@librepizza.ca">
								contactus@librepizza.ca
							</a>
						</p>
					</div>
					<div class="col-md-6">
						<h6>Phone:</h6>
						<div class="title">613-225-8770</div>
						<h6 class="heavy">Brunch/Lunch Service</h6>
						<p>
							Friday, Saturday and Sunday:<br></br>
							Bookings from: 9am - 3:00pm
						</p>
						<h6 class="heavy">Dinner Service</h6>
						<p>
							Daily:<br></br>
							Bookings from: 3pm - 10:00pm
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
