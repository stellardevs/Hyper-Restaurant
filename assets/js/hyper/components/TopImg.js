import { h, app } from 'hyperapp';

export default function TopImg({ state, actions }) {
	console.log();
	return (
		<section id="TopImg">
			<div class="container">
				<div class="title">
					<h5>Welcome to</h5>
					<h1>{state.companyInfo.title}</h1>
				</div>

				<div class="contact-info">
					<div class="container">
						<div class="booking">Book Table Directly</div>
						<h2>613-225-8770</h2>
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
