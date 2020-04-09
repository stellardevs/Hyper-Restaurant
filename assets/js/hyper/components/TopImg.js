import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	return (
		<section id="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome</h5>
					<h1>Libre Pizza Plaza</h1>
				</div>

				<div class="contact-info">
					<div class="container">
						<div class="booking">Book Table Directly</div>
						<h2>647-219-8652</h2>
						<div class="hours">
							Opening Hours: Mon - Fri<strong> 09:00 - 21:00</strong> Weekend
							<strong> 09:00 - 22:00</strong>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
