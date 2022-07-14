import {
  createDrawerNavigator,
  DrawerScreenProps,
} from '@react-navigation/drawer';
import About from '../screens/About';
import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';
import Header from '../shard/Header';

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
export type PropsNavigation = DrawerScreenProps<
  RootStackParamList,
  'ReviewDetails'
>;

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigation = ({}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="Game Zone" />
            ),
            headerStyle: {
              backgroundColor: '#ddd',
            },
          };
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={({ navigation }) => {
          return {
            headerTitle: () => (
              <Header navigation={navigation} title="About Game Zone" />
            ),
            headerStyle: {
              backgroundColor: '#ddd',
            },
          };
        }}
      />
      <Drawer.Screen name="ReviewDetails" component={ReviewDetails} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
