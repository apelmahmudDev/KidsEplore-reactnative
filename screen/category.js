import { View, ImageBackground, Image } from "react-native";
import { makeStyles, Button } from "@rneui/base";
import { AppButton } from "../components/ui";

// icons
const furitsIcon = require("../assets/category/fruits.png");
const fishIcon = require("../assets/category/fish.png");
const flowerIcon = require("../assets/category/flower.png");
const animalIcon = require("../assets/category/lion.png");

const Category = () => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../assets/kids-bg.png")}
				resizeMode="cover"
			>
				{/* category button -> */}
				<AppButton icon={furitsIcon} label="Fruits" color="primary" />
				<AppButton icon={fishIcon} label="Fishes" color="secondary" />
				<AppButton icon={flowerIcon} label="Flowers" color="error" />
				<AppButton icon={animalIcon} label="Animals" color="success" />
			</ImageBackground>
		</View>
	);
};

export default Category;

const useStyles = makeStyles({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#FFFFFF",
	},
	background: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	detailsBtn: {
		width: "100%",
		padding: 8,
		marginVertical: 8,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: "#ddd",
	},
});
