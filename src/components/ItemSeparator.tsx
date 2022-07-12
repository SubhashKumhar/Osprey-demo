import {View, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../utils/constant/colors';
import {vh} from '../utils/dimensions';

export default function ItemSeparator({lineWidth}:any) {
  return <View style={[styles.lineSeparator,lineWidth]} />;
}
const styles = StyleSheet.create({
  lineSeparator: {
    backgroundColor: Color.Grey,
    height: vh(2),
    opacity: 0.1,
  },
});
