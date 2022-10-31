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

// fishes image
const catfish = require("../category/fishes/catfish.png");
const grasscarp = require("../category/fishes/grass-carp.png");
const tengra = require("../category/fishes/tengra.png");
const vetki = require("../category/fishes/vetki.png");

// animals
const cat = require("../category/animals/cat.png");
const elephant = require("../category/animals/elephant.png");
const horse = require("../category/animals/horse.png");
const lion = require("../category/animals/lion.png");
const tiger = require("../category/animals/tiger.png");

// flowers
const tulip = require("../category/flowers/tulip.jpeg");
const lavender = require("../category/flowers/lavender.jpg");
const lily = require("../category/flowers/liliy.jpg");
const lotus = require("../category/flowers/lotus.jpg");
const rose = require("../category/flowers/rose.jpg");

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
				name: "Catfish",
				image: catfish,
				description:
					"Catfish are an extremely diverse group of ray-finned fish that get their nickname from their feline-looking whiskers, which are actually barbels that act as a defense mechanism (unlike other fish that have scales to defend them).",
			},
			{
				id: "Id02",
				name: "Grass carp",
				image: grasscarp,
				description:
					"The grass carp is a species of large herbivorous freshwater fish in the family Cyprinidae, native to the Pacific Far East, with a native range stretching from northern Vietnam to the Amur River on the Sino-Russian border. This Asian carp is the only species of the genus Ctenopharyngodon.",
			},
			{
				id: "Id03",
				name: "Tengra",
				image: tengra,
				description:
					"The fish contains a significant amount of protein, fat, calcium, and iron. According to a report by the Directorate of Fisheries, Tangra fish contains 1.5 times higher calorific value than Rui fish (Labeo rohita). It is a carnivorous fish, usually a bottom-feeder. One KG of fresh Tengra will be delivered.",
			},
			{
				id: "Id04",
				name: "Vetki",
				image: vetki,
				description:
					"About the Product. Bhetki / Sea BaasÃ‚Â fish is a very tasty saltwater fish. This fish can be found mostly in the estuary and coastal areas. Bhetki fish is enriched with high nutrition ingredients.",
			},
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
				name: "Cat",
				image: cat,
				description:
					"The cat is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family.",
			},
			{
				id: "Id02",
				name: "Lion",
				image: lion,
				description:
					"The lion is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.",
			},
			{
				id: "Id03",
				name: "Tiger",
				image: tiger,
				description:
					"The tiger is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar.",
			},
			{
				id: "Id04",
				name: "Horse",
				image: horse,
				description:
					"The horse (Equus ferus caballus) is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.",
			},
			{
				id: "Id05",
				name: "Elephant",
				image: elephant,
				description:
					"Elephants are the largest land mammals on earth and have distinctly massive bodies, large ears, and long trunks. They use their trunks to pick up objects, trumpet warnings, greet other elephants, or suck up water for drinking or bathing, among other uses.",
			},
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
				name: "Rose",
				image: rose,
				description:
					"A rose is a plant that is a member of the genus Rosa, which consists of some 100 species of perennial shrubs in the rose family. Many roses are cultivated for their beautiful flowers, which range in colour from white through various tones of yellow and pink to dark crimson and maroon.",
			},
			{
				id: "Id02",
				name: "Lotus",
				image: lotus,
				description:
					"Nelumbo nucifera, also known as sacred lotus, Laxmi lotus, Indian lotus, or simply lotus, is one of two extant species of aquatic plant in the family Nelumbonaceae. It is sometimes colloquially called a water lily, though this more often refers to members of the family Nymphaeaceae.",
			},
			{
				id: "Id03",
				name: "Lavender",
				image: lavender,
				description:
					"lavender, (genus Lavandula), genus of about 30 species of plants in the mint family (Lamiaceae), native to countries bordering the Mediterranean. Lavender species are common in herb gardens for their fragrant leaves and attractive flowers.",
			},
			{
				id: "Id05",
				name: "Tulip",
				image: tulip,
				description:
					"Tulips are a genus of spring-blooming perennial herbaceous bulbiferous geophytes. The flowers are usually large, showy and brightly coloured, generally red, pink, yellow, or white. They often have a different coloured blotch at the base of the tepals, internally.",
			},
		],
	},
];
