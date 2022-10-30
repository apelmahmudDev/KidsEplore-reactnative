import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { CategoryScreen, HomeScreen, DetailsScreen } from "./screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<SafeAreaProvider>
				<View style={{ flex: 1 }}>
					<StatusBar style="auto" />
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen name="Category" component={CategoryScreen} />
						<Stack.Screen name="Details" component={DetailsScreen} />
					</Stack.Navigator>
				</View>
			</SafeAreaProvider>
		</NavigationContainer>
	);
}
