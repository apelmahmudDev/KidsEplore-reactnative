import { Button, makeStyles } from "@rneui/base";
import { Image } from "react-native";
import React from "react";

const AppButton = ({ label, icon, color }) => {
	const styles = useStyles();
	return (
		<Button
			color={color}
			buttonStyle={styles.detailsBtn}
			titleStyle={{
				fontSize: 16,
				letterSpacing: 2,
				fontWeight: "bold",
				paddingHorizontal: 15,
			}}
			containerStyle={{
				width: 250,
			}}
			type="solid"
		>
			<Image style={{ width: 30, height: 30 }} source={icon} />
			{label}
		</Button>
	);
};

export default AppButton;

const useStyles = makeStyles({
	detailsBtn: {
		width: "100%",
		padding: 8,
		marginVertical: 8,
		borderWidth: 1,
		borderRadius: 30,
		borderColor: "#ddd",
	},
});
