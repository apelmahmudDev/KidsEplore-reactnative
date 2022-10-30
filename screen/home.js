import { View, Text, ImageBackground, Image } from "react-native";
import { makeStyles, Button, Icon } from "@rneui/base";

const Home = () => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../assets/kids-bg.png")}
				resizeMode="cover"
			>
				{/* kids play icon */}
				<Image style={styles.kidsIcon} source={require("../assets/kids.png")} />
				{/* play  button -> */}
				<Button
					buttonStyle={styles.explorBtn}
					titleStyle={{
						fontWeight: "bold",
						fontSize: 24,
						paddingHorizontal: 15,
					}}
					type="solid"
				>
					Kids Explore
					<Icon name="arrow-forward" color="white" />
				</Button>
			</ImageBackground>
		</View>
	);
};

export default Home;

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
	kidsIcon: {
		height: 100,
		width: 100,
	},
	explorBtn: {
		padding: 8,
		marginTop: 20,
		backgroundColor: "rgba(111, 202, 186, 1)",
		borderRadius: 30,
	},
});
