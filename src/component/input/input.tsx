import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import { vh,vw } from '../../utils/dimensions';

export default function Input({
  place,
  placeholderColor,
  secure,
  value,
  onChangeText,
  style,
  keyboardType,
  onFocus,
  onBlur,
  editable,
  maxLength,
}: any) {
  return (
    <TextInput
      placeholder={place}
      placeholderTextColor={placeholderColor}
      secureTextEntry={secure}
      value={value}
      onChangeText={onChangeText}
      style={[styles.textInputStyle, style]}
      keyboardType={keyboardType}
      onFocus={onFocus}
      onBlur={onBlur}
      editable={editable}
      maxLength={maxLength}
    />
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
        height:vh(19),
        width:'80%',
        fontSize:vh(16),
        lineHeight:vh(19),
        fontWeight:'400',
  },
});
