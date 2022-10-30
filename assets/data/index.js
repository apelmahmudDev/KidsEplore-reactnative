// icons
const fruitsIcon = require("../category/fruits.png");
const fishIcon = require("../category/fish.png");
const flowerIcon = require("../category/flower.png");
const animalIcon = require("../category/lion.png");

// fruits image
const apple = require("../category/fruits/apple.png");

export const categoryData = [
	{
		id: "001",
		category: "Fruits",
		icon: fruitsIcon,
		color: "primary",
		data: [
			{
				id: "Id01",
				name: "Apple",
				image: apple,
				description:
					"An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grownspecies in the genus Malus. The tree originated in Central Asia.",
			},
			{ id: "Id02", name: "Orange", image: apple, description: "Lorem ipsum" },
		],
	},
	{
		id: "004",
		category: "Fishes",
		icon: fishIcon,
		color: "secondary",
		data: [
			{
				id: "Id01",
				name: "Apple",
				image: apple,
				description:
					"An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grownspecies in the genus Malus. The tree originated in Central Asia.",
			},
			{ id: "Id02", name: "Orange", image: apple, description: "Lorem ipsum" },
		],
	},
	{
		id: "002",
		category: "Animals",
		icon: animalIcon,
		color: "error",
		data: [
			{
				id: "Id01",
				name: "Apple",
				image: apple,
				description:
					"An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grownspecies in the genus Malus. The tree originated in Central Asia.",
			},
			{ id: "Id02", name: "Orange", image: apple, description: "Lorem ipsum" },
		],
	},
	{
		id: "003",
		category: "Flowers",
		icon: flowerIcon,
		color: "success",
		data: [
			{
				id: "Id01",
				name: "Apple",
				image: apple,
				description:
					"An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grownspecies in the genus Malus. The tree originated in Central Asia.",
			},
			{ id: "Id02", name: "Orange", image: apple, description: "Lorem ipsum" },
		],
	},
];
