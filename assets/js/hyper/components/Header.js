import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="container">
				<div class="logo"></div>
				<i class="fas fa-bars"></i>
				<div class="menu" id="menu">
					<i class="fas fa-times"></i>
					<div class="links">
						<a href="#">Our Story</a>
						<a href="#">Reviews</a>
						<a href="#">Special Menu</a>
						<a href="#">Reservations</a>
						<a href="#">Contact Us</a>
					</div>
				</div>
			</div>
		</header>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
