// icons
const fruitsIcon = require("../category/fruits.png");
const fishIcon = require("../category/fish.png");
const flowerIcon = require("../category/flower.png");
const animalIcon = require("../category/lion.png");

// fruits image
const apple = require("../category/fruits/apple.png");
const orange = require("../category/fruits/orange.png");
const banana = require("../category/fruits/banana.png");
const date = require("../category/fruits/date.png");
const grapes = require("../category/fruits/grapes.png");
const olive = require("../category/fruits/olive.jpg");

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
			{
				id: "Id02",
				name: "Orange",
				image: orange,
				description:
					"An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis, which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.",
			},
			{
				id: "Id03",
				name: "Banana",
				image: banana,
				description: `A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.`,
			},
			{
				id: "Id05",
				name: "Date",
				image: date,
				description: `Dates are the fruit of the date palm tree, which is grown in many tropical regions of the world. Dates have become quite popular in recent years. Almost all dates sold in Western countries are dried. You can tell whether or not dates are dried based on their appearance.`,
			},
			{
				id: "Id06",
				name: "Olive",
				image: olive,
				description: `Olives are small fruits that grow on olive trees (Olea europaea). They belong to a group of fruit called drupes, or stone fruits, and are related to mangoes, cherries, peaches, almonds, and pistachios.`,
			},
			{
				id: "Id07",
				name: "Grape",
				image: grapes,
				description: `A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters.`,
			},
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
