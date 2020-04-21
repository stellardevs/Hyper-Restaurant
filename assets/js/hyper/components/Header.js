import { h, app } from 'hyperapp';

export default function Header({ state, actions }) {
	return (
		<header>
			<div class="container">
				<nav>
					<input type="checkbox" id="res-menu" />
					<label for="res-menu">
						<i class="fas fa-bars" id="sign-one"></i>
						<i class="fas fa-times" id="sign-two"></i>
					</label>
					<div class="logo"></div>
					<ul class="links">
						<li>
							<a href="#">Our Story</a>
						</li>
						<li>
							<a href="#">Reviews</a>
						</li>
						<li>
							<a href="#">Special Menu</a>
						</li>
						<li>
							<a href="#">Reservations</a>
						</li>
						<li>
							<a href="#">Contact Us</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
		// <div class="container">
		// 	<div class="logo"></div>
		// 	<i class="fas fa-bars" onClick={() => actions.openNav}></i>
		// 	<div class="menu" id="menu">
		// 		<i class="fas fa-times"></i>
		// 		<div class="links">
		// 			<a href="#">Our Story</a>
		// 			<a href="#">Reviews</a>
		// 			<a href="#">Special Menu</a>
		// 			<a href="#">Reservations</a>
		// 			<a href="#">Contact Us</a>
		// 		</div>
		// 	</div>
		// </div>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
