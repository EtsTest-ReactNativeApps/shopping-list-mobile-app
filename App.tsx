import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

import Header from './components/Header';
import ShoppingItem from './components/ShoppingItem';
import AddShoppingItem from './components/AddShoppingItem';

import AsyncStorage from '@react-native-async-storage/async-storage';
import EStyleSheet from 'react-native-extended-stylesheet';
import { v4 as uuid } from 'uuid';

interface ItemType {
  id: string;
  text: string;
}

const initialItems: ItemType[] = [
  { id: uuid(), text: 'Milk' },
  { id: uuid(), text: 'Bread' },
  { id: uuid(), text: 'Broccoli' },
  { id: uuid(), text: 'Tomatoes' },
];

const App: React.FC = () => {
  const [shoppingItems, setShoppingItems] = useState<ItemType[]>(initialItems);

  function handleDeleteItemPress(id: string, text: string) {
    Alert.alert(`Caution 🛑`, `You're about to delete '${text}'. Are you sure?`, [
      {
        text: 'Yes',
        onPress: () => deleteItem(id),
      },
      {
        text: 'No',
        onPress: () => {
          return;
        },
        style: 'cancel',
      },
    ]);
  }

  function deleteItem(id: string) {
    const updatedItems = shoppingItems.filter(item => item.id !== id);
    updateAsyncStorage(updatedItems);
    setShoppingItems(updatedItems);
  }

  function addItem(item: ItemType) {
    const updatedItems = [...shoppingItems, item];
    updateAsyncStorage(updatedItems);
    setShoppingItems(updatedItems);
  }

  async function getStoredItemsIfFound() {
    const jsonValue = await AsyncStorage.getItem('shopping-items');
    if (jsonValue) {
      const storedItems = JSON.parse(jsonValue);
      if (storedItems.length) {
        setShoppingItems(storedItems);
        return;
      }
      setShoppingItems(initialItems);
    } else {
      setShoppingItems(initialItems);
    }
  }

  async function updateAsyncStorage(items: ItemType[]) {
    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem('shopping-items', jsonValue);
  }

  useEffect(() => {
    getStoredItemsIfFound();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Header title='My Shopping List' />
      <FlatList
        data={shoppingItems}
        renderItem={({ item }) => <ShoppingItem {...item} handlePress={handleDeleteItemPress} />}
        keyExtractor={item => item.id}
      />
      <AddShoppingItem addItem={addItem} />
      <StatusBar style='light' translucent={false} />
    </View>
  );
};

export default App;

EStyleSheet.build({
  $customBlue: '#0044ff',
  $customRed: '#ce1010',
  $lightGray: '#f8f8f8',
  $rem: 10,
});

const styles = EStyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
