import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import About from "../screens/About";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  ReviewDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitle: "" }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
