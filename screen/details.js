import { View, ImageBackground, Image, ScrollView } from "react-native";
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
				<ScrollView
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					{/* details of category -> */}
					<View style={styles.card}>
						<Image
							style={{ height: 100, width: 100, resizeMode: "contain" }}
							source={require("../assets/category/fruits/apple.png")}
						/>

						<View style={styles.descWrap}>
							<Text h4>Apple</Text>
							<Text
								style={{
									marginTop: 10,
									color: "#0d0d0d",
								}}
							>
								An apple is an edible fruit produced by an apple tree. Apple
								trees are cultivated worldwide and are the most widely grown
								species in the genus Malus. The tree originated in Central Asia.
							</Text>
						</View>
					</View>
					<View style={styles.card}>
						<Image
							style={{ height: 100, width: 100, resizeMode: "contain" }}
							source={require("../assets/category/fruits/apple.png")}
						/>

						<View style={styles.descWrap}>
							<Text h4>Apple</Text>
							<Text
								style={{
									marginTop: 10,
									color: "#0d0d0d",
								}}
							>
								An apple is an edible fruit produced by an apple tree. Apple
								trees are cultivated worldwide and are the most widely grown
								species in the genus Malus. The tree originated in Central Asia.
							</Text>
						</View>
					</View>
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
	card: {
		marginVertical: 10,
		backgroundColor: "#FFFFFF",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		borderRadius: 10,
	},
	descWrap: {
		alignItems: "center",
		marginVertical: 15,
	},
});
