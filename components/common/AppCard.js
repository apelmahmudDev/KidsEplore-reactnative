import { View, Image } from "react-native";
import { makeStyles, Text } from "@rneui/base";

const AppCard = ({ image, name, description }) => {
	const styles = useStyles();

	return (
		<View style={styles.card}>
			<Image
				style={{ height: 100, width: 100, resizeMode: "contain" }}
				source={image}
			/>

			<View style={styles.descWrap}>
				<Text h4>{name}</Text>
				<Text
					style={{
						marginTop: 10,
						color: "#0d0d0d",
					}}
				>
					{description}
				</Text>
			</View>
		</View>
	);
};

export default AppCard;

const useStyles = makeStyles({
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
