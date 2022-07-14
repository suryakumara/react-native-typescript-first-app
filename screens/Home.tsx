/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  FlatList,
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ListItem from '../components/ListItem';
import { RootStackParamList } from '../routes/StackNavigator';
import Card from '../shard/Card';
import { theme } from '../theme/theme';
import { MaterialIcons } from '@expo/vector-icons';
import RerviewForm from './RerviewForm';
import { ReviewData } from '../types';

type homeScreenProps = NavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<homeScreenProps>();
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState<Array<ReviewData>>([
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

  const addReview = (review: ReviewData) => {
    review.key = Math.random().toString();
    setReviews((curr) => {
      return [review, ...curr];
    });
    setModalOpen(false);
  };

  return (
    <View style={theme.container}>
      <Modal visible={modalOpen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modelContent}>
            <MaterialIcons
              name="close"
              size={24}
              onPress={() => setModalOpen(false)}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
            />
            <RerviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card children={<ListItem item={item} />} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    marginRight: 20,
    alignSelf: 'flex-end',
  },
  modelContent: {
    flex: 1,
  },
});
