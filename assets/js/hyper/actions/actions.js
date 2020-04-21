export const actions = {
	reviewRightClick,
	intro,
	showMenu,
	openNav
};

// const reviewRightClick = function(state, actions) {
// 	return {
// 		reviewSatus: {
// 			currentReview: state.reviewStatus.currentReview++
// 		}
// 	};
// };
function reviewRightClick(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.reviewStatus.currentReview + 1
		}
	};
}
function openNav(state, actions) {
	if (state.x.className == 'menu') {
		state.x.className = 'active-menu';
	} else {
		state.x.className = 'menu';
	}
}
function showMenu() {}

function intro(state, actions) {
	console.log('Just ran my first action');
	return { count: state.count + 1 };
}
