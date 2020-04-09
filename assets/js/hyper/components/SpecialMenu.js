import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	return (
		<section id="SpecialMenu">
			<div class="container">
				<h5 class="comp-title">Special Menu</h5>
				<h2>Flavours of Italy</h2>
				<div class="row boxes">
					<div class="col-md-4">
						<div class="box">
							<div class="box-img">
								<div class="price-circle">$25</div>
							</div>
							<span class="title">Capressa No Smoke</span>
							<p class="details">All the toppings you can imagine!! </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="box">
							<div class="box-img">
								<div class="price-circle">$25</div>
							</div>
							<span class="title">Capressa No Smoke</span>
							<p class="details">All the toppings you can imagine!! </p>
						</div>
					</div>
					<div class="col-md-4">
						<div class="box">
							<div class="box-img">
								<div class="price-circle">$25</div>
							</div>
							<span class="title">Capressa No Smoke</span>
							<p class="details">All the toppings you can imagine!! </p>
						</div>
					</div>
					<a href="#" class="link">
						View Full Menu
					</a>
				</div>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
