import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../styles/shoppingItemStyles';
import { Fontisto } from '@expo/vector-icons';

interface ShoppingItemPropTypes {
  id: string;
  text: string;
  handlePress: (id: string, text: string) => void;
}

const ShoppingItem: React.FC<ShoppingItemPropTypes> = ({ id, handlePress, text }) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemView}>
        <Text style={styles.text}>{text}</Text>
        <Fontisto name='trash' style={styles.icon} onPress={() => handlePress(id, text)} />
      </View>
    </TouchableOpacity>
  );
};

export default ShoppingItem;
