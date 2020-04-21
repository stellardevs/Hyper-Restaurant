var reviewLeftClick = function(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.reviewStatus.currentReview - 1
		}
	};
};
var reviewRightClick = function(state, actions) {
	return {
		reviewStatus: {
			currentReview: state.reviewStatus.currentReview + 1
		}
	};
};
var openNav = function(state, actions) {
	if (state.x.className == 'menu') {
		state.x.className = 'menu-active';
	} else {
		state.x.className = 'menu';
	}
};

export const actions = {
	reviewLeftClick,
	reviewRightClick,
	openNav
};
