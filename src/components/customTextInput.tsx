import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/dimensions';
import Color from '../utils/constant/colors';

interface Props {
  placeholder?: string;
  width?: number;
  onChangeText?: any;
  value?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
}

export default function CustomTextInput(props: Props) {
  const {width = 375} = props;
  return (
    <View
      style={[
        styles.container,
        props.hasOwnProperty('width') ? {width: vw(width)} : {},
      ]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        style={[styles.textInput, {width: vw(width-80)}]}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.textInputBackground,
    borderRadius: vh(5),
    marginVertical: vh(8),
    width: '100%',
  },
  textInput: {
    height: vh(48),
    width: '100%',
    marginHorizontal: vw(12),
    paddingHorizontal: vh(5),
  },
});
