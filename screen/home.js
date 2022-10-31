import { View, Text, ImageBackground, Image } from "react-native";
import { makeStyles, Button, Icon } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";

const Home = ({ navigation }) => {
	const styles = useStyles();

	return (
		<View style={styles.container}>
			<ImageBackground
				style={styles.background}
				source={require("../assets/appbg.png")}
				resizeMode="cover"
			>
				{/* kids play icon */}
				<Image
					style={styles.organismIcon}
					source={require("../assets/organism-virus.png")}
				/>
				{/* play  button -> */}
				<Button
					ViewComponent={LinearGradient}
					linearGradientProps={{
						colors: ["#0D4564", "#AC6E09"],
						start: { x: 0, y: 0.7 },
						end: { x: 1, y: 0.5 },
					}}
					onPress={() => navigation.navigate("Category")}
					buttonStyle={styles.explorBtn}
					titleStyle={styles.btnTitle}
					type="solid"
				>
					Explore
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
	organismIcon: {
		height: 100,
		width: 100,
		borderRadius: 50,
	},
	explorBtn: {
		padding: 8,
		marginTop: 20,
		borderRadius: 30,
	},
	btnTitle: {
		fontWeight: "bold",
		fontSize: 24,
		paddingHorizontal: 15,
	},
});
