import React from 'react';
import { Text } from 'react-native';
import { Items } from '../types';

const ListItem: React.FC<Items> = ({ item }) => {
  return <Text>{item.title}</Text>;
};

export default ListItem;
