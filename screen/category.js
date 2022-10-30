import { View, ImageBackground, Image, Text } from "react-native";
import { makeStyles, Button } from "@rneui/base";
import { AppButton } from "../components/ui";
import { categoryData } from "../assets/data";

const Category = ({ navigation }) => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../assets/kids-bg.png")}
				resizeMode="cover"
			>
				{/* category button -> */}
				{categoryData.map((item) => (
					<AppButton
						key={item.id}
						onPress={() => navigation.navigate("Details")}
						icon={item.icon}
						label={item.category}
						color={item.color}
					/>
				))}
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
});
