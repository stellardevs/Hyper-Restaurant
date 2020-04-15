import { h, app } from 'hyperapp';

export default function SpecialMenu({ state, actions }) {
	const loopMenu = function() {
		return state.specialMenuData.map(function(item) {
			// console.log(item.title);
			return (
				<div class="col-md-4">
					<div class="box">
						<div class="box-img">
							<img src={item.img}></img>
							<div class="price-circle">${item.price}</div>
						</div>
						<span class="title">{item.title}</span>
						<p class="details">{item.description} </p>
					</div>
				</div>
			);
		});
	};

	return (
		<section id="SpecialMenu">
			<div class="container">
				<h5 class="comp-title">Special Menu</h5>
				<h2>Flavours of Italy</h2>
				<div class="row boxes">{loopMenu()}</div>
				<a href="#" class="link">
					View Full Menu
				</a>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
