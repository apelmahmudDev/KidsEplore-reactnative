import { View, ImageBackground, ScrollView } from "react-native";
import { AppCard } from "../components/common";
import { makeStyles } from "@rneui/base";
import { catagoryData } from "../assets/data";

const Details = () => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode="cover"
				style={styles.background}
				source={require("../assets/kids-bg.png")}
			>
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					{/* details of category -> */}
					<AppCard
						image={require("../assets/category/fruits/apple.png")}
						name="Apple"
						description="An apple is an edible fruit produced by an apple tree. Apple
								trees are cultivated worldwide and are the most widely grown
								species in the genus Malus. The tree originated in Central Asia."
					/>
				</ScrollView>
			</ImageBackground>
		</View>
	);
};

export default Details;

const useStyles = makeStyles({
	container: {
		height: "100%",
		width: "100%",
		backgroundColor: "#FFFFFF",
	},
	background: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		flex: 1,
	},
});
