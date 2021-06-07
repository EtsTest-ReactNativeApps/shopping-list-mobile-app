import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles/headerStyles';

interface HeaderPropTypes {
  title: string;
}

const Header: React.FC<HeaderPropTypes> = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
