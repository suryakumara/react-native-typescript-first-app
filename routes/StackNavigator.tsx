import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import About from '../screens/About';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import { Items } from '../types';

export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  ReviewDetails: {
    title: string;
    rating: number;
    body: string;
    key: string;
  };
};
export type PropsNavigation = NativeStackScreenProps<
  RootStackParamList,
  'ReviewDetails'
>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee' },
      }}
    >
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Game Zone',
            headerStyle: {
              backgroundColor: '#ddd',
            },
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
