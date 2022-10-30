import { View, ImageBackground, Image } from "react-native";
import { makeStyles, Button } from "@rneui/base";
import { AppButton } from "../components/ui";

// icons
const furitsIcon = require("../assets/category/fruits.png");
const fishIcon = require("../assets/kids.png");

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
				<AppButton icon={fishIcon} label="Animal" color="error" />
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
