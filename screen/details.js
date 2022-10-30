import { View, ImageBackground, ScrollView } from "react-native";
import { AppCard } from "../components/common";
import { makeStyles } from "@rneui/base";
import { categoryData } from "../assets/data";
import React, { useState, useEffect } from "react";

const Details = ({ route, navigation }) => {
	const styles = useStyles();
	const [data, setData] = useState([]);
	const { catId } = route.params;

	useEffect(() => {
		if (catId) {
			const findedItem = categoryData.find((item) => item.id === catId);
			setData(findedItem);
		}
	}, [catId]);

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
					{data?.data?.map((item) => (
						<AppCard
							key={item.id}
							image={item.image}
							name={item.name}
							description={item.description}
						/>
					))}
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
