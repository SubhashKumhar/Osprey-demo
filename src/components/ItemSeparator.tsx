import {View, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../utils/constant/colors';
import {vh} from '../utils/dimensions';

export default function ItemSeparator() {
  return <View style={styles.lineSeparator} />;
}
const styles = StyleSheet.create({
  lineSeparator: {
    backgroundColor: Color.Grey,
    height: vh(2),
    opacity: 0.1,
  },
});
