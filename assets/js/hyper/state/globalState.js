var companyInfo = {
	title: 'Libre Pizza Plaza',
	phone: '613-225-8770',
	location: 'Ottawa, Ontario'
};
const specialMenuData = [
	{
		img: 'https://i.imgur.com/f1sMg4h.jpg',
		title: 'Veggie Amore',
		description: 'Fresh farm to table ingredients with unimited toppings',
		price: 22
	},
	{
		img: 'https://i.imgur.com/ttFQHpC.jpg',
		title: 'Blanco Pollo',
		description: 'Spicy Chicken pie with fresh mozarella cheese',
		price: 24
	},
	{
		img: 'https://i.imgur.com/Bn7ctcR.jpg',
		title: 'Capricciosa Classico',
		description: 'A mushroom lovers favourite, 3 cheese on a thin pie',
		price: 22
	}
	// {
	// 	title: 'Bistecca Bene',
	// 	description:
	// 		'Sliced AAA Canadian Steak with pleasant notes of rosemary with mozarella on a thick pie',
	// 	price: 27
	// },
	// {
	// 	title: 'Mamas Pasta',
	// 	description: 'Simple yet delicious classic Italian pasta thanks to Nonna',
	// 	price: 16
	// }
];

const reviewsData = [
	{
		company: 'The Foodie Network',
		author: 'Joe Bucci',
		authorInfo: 'Winner of Chef Master',
		highlight: 'Best Pizza in the City!',
		review:
			'Libre Pizza Plaza is a staple of mine. I think of myself as a person who loves to eat (and drink) delicious things. I find as much enjoyment in the kitchen preparing my own food howeer when I am not you can always find me and my family at Libre Pizza.'
	},
	{
		company: 'We love Food',
		author: 'Jennifer Morgan',
		authorInfo: 'Owner of "We love Food Blog"',
		highlight: 'Lovely food and ambiance',
		review:
			'I just love this Libre Pizza. Ever since it  opened it has been a staple of mine. The ambiance and food are just lovely and the staff are 10/10 everytime!'
	},
	{
		company: 'Ottawa General',
		author: 'Bryce Stephenson',
		authorInfo: 'Writer at the Ottawa General',
		highlight: 'Food Snob Approved',
		review:
			'I am a bit of a food snob as a writer I east out about 5 times per week to get content for the paper. Libre Pizza is one of those pplaces that even when I am not working I stop by here regularly. With farm to table ingredients it is no wonder why this place is such a hit. There are options for everyone no matter your taste.'
	}
];
const quoteData = [
	{
		author: 'Virginia Wolf',
		quote:
			'One Cannot Think Well, Love Well, Sleep Well, If One Has Not Dined Well.'
	},
	{
		author: 'Elisha Cuthbert',
		quote: "There's nothing more romantic than Italian food"
	},
	{
		author: 'George Miller',
		quote:
			"The trouble with eating Italian food is that five or six days later you're hungry again"
	}
];
var x = document.getElementById('menu');
console.log(x);

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	quoteData,
	reviewsData,
	reviewStatus: {
		currentReview: 0
	},
	x
};
