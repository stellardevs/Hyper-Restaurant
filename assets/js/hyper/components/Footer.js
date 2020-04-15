import { h, app } from 'hyperapp';

export default function Footer({ state, actions }) {
	return (
		<footer>
			<div class="container">
				<div class="logo"></div>
				<div class="menu">
					<a href="#">Our Story</a>
					<a href="#">Reviews</a>
					<a href="#">Special Menu</a>
					<a href="#">Reservations</a>
					<a href="#">Contact Us</a>
				</div>
				<div class="social-media">
					<i class="fab fa-facebook"></i>
					<i class="fab fa-twitter"></i>
					<i class="fab fa-instagram"></i>
					<i class="fas fa-utensils"></i>
				</div>
				<div class="copyright">
					<p> © 2020 Copyright</p>
					<p>Built by stellarCodes.dev</p>
				</div>
			</div>
		</footer>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
