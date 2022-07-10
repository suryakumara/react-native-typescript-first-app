import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../routes/StackNavigator";
import { theme } from "../theme/theme";

type homeScreenProps = NavigationProp<RootStackParamList, "Home">;
const Home = () => {
  const navigation = useNavigation<homeScreenProps>();

  return (
    <View style={theme.container}>
      <Text style={theme.titleText}>Home Screen</Text>
      <Button title="go to review" onPress={() => navigation.navigate("ReviewDetails")} />
    </View>
  );
};

export default Home;
