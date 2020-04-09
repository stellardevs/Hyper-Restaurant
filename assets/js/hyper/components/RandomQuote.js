import { h, app } from 'hyperapp';

export default function RandomQuote({ state, actions }) {
	return (
		<section id="RandomQuote">
			<div class="container">
				<h1>
					“One cannot think well, love well, sleep well, if one has not dined
					well.”
				</h1>
				<span class="author">-Virginia Wolf-</span>
			</div>
		</section>
	);
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
