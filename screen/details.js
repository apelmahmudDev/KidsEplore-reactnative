import { View, ImageBackground, Image } from "react-native";
import { makeStyles, Text } from "@rneui/base";

const Details = () => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode="cover"
				style={styles.background}
				source={require("../assets/kids-bg.png")}
			>
				{/* details of category -> */}
				<Image
					style={{ height: 150, width: 150, resizeMode: "contain" }}
					source={require("../assets/category/fruits/apple.png")}
				/>

				<View style={styles.descWrap}>
					<Text h3>Apple</Text>
					<Text
						style={{
							textAlign: "center",
							marginTop: 10,
							color: "#0d0d0d",
							fontSize: 20,
						}}
					>
						An apple is an edible fruit produced by an apple tree. Apple trees
						are cultivated worldwide and are the most widely grown species in
						the genus Malus. The tree originated in Central Asia, where its wild
						ancestor, Malus sieversii, is still found today.
					</Text>
				</View>
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
		padding: 10,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	descWrap: {
		alignItems: "center",
		marginVertical: 20,
	},
});
