/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../routes/StackNavigator';
import { theme } from '../theme/theme';

type homeScreenProps = NavigationProp<RootStackParamList, 'Home'>;
const Home = () => {
  const navigation = useNavigation<homeScreenProps>();
  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View style={theme.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <TouchableOpacity />}
      />
    </View>
  );
};

export default Home;
