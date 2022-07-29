import {View, StyleSheet} from 'react-native';
import React from 'react';
import Color from '../utils/constant/colors';
import {vh, vw} from '../utils/dimensions';

interface Props {
  marginHorizontal?: number;
}

export default function ItemSeparator({marginHorizontal = 0}: Props) {
  return (
    <View
      style={[styles.lineSeparator, {marginHorizontal: vw(marginHorizontal)}]}
    />
  );
}
const styles = StyleSheet.create({
  lineSeparator: {
    backgroundColor: Color.grey,
    height: vh(2),
    opacity: 0.1,
  },
});
