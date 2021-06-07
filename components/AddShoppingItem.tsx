import React, { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';

import styles from '../styles/addItemStyles';

import { Ionicons } from '@expo/vector-icons';
import { v4 as uuid } from 'uuid';

interface ItemType {
  id: string;
  text: string;
}

interface AddItemPropTypes {
  addItem: (item: ItemType) => void;
}

const AddShoppingItem: React.FC<AddItemPropTypes> = ({ addItem }) => {
  const [inputText, setInputText] = useState<string>('');

  function handleAddItemPress() {
    if (!inputText) {
      Alert.alert(`Error`, `Please enter an item.`);
      return;
    }

    const newItem = {
      id: uuid(),
      text: inputText.charAt(0).toUpperCase() + inputText.slice(1),
    };

    addItem(newItem);
    setInputText('');
  }

  return (
    <View style={styles.addItemView}>
      <TextInput
        placeholder='Add new shopping item!'
        style={styles.input}
        value={inputText}
        onChangeText={text => setInputText(text)}
      />
      <TouchableOpacity onPress={handleAddItemPress}>
        <Text style={styles.button}>
          <Ionicons name='add-circle-outline' style={styles.icon} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddShoppingItem;
