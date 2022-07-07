import {View, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../utils/constant/colors';
import {vh} from '../utils/Dimension';

export default function ItemSeparator() {
  return <View style={styles.lineSeparator} />;
}
const styles = StyleSheet.create({
  lineSeparator: {
    backgroundColor: Color.grey,
    height: vh(3),
    opacity: 0.1,
  },
});
