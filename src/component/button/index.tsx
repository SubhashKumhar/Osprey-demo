import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/dimensions';

interface PropInterface {
  title: string;
  customContainerStyle: Object;
  customTextStyle: Object;
  onPress?: Function;
  disabled?: boolean;
}

export default function Button(props: PropInterface) {
  const {title, customContainerStyle, customTextStyle, onPress, disabled} =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonMain, customContainerStyle]}
      activeOpacity={0.7}>
      <Text style={[styles.textStyle, customTextStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonMain: {
    height: normalize(42),
    paddingHorizontal: normalize(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: normalize(14),
  },
});
