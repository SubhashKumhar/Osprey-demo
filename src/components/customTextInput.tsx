import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/dimensions';
import Color from '../utils/constant/colors';
import Fonts from '../utils/constant/fonts';

interface Props {
  placeholder?: string;
  width?: number;
  onChangeText?: any;
  value?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: any;
  onBlur?: any;
  style?: Object;
}

export default function CustomTextInput(props: Props) {
  const {width = 375} = props;
  return (
    <View
      style={[
        styles.container,
        props.hasOwnProperty('width') ? {width: vw(width)} : {},
        props.style,
      ]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={Color.grey}
        maxLength={props.maxLength}
        keyboardType={props?.keyboardType}
        placeholder={props.placeholder}
        style={[styles.textInput, {width: vw(width)}]}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        onBlur={props.onBlur}
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
    color: Color.black,
    marginHorizontal: vw(10),
    paddingHorizontal: vh(5),
    fontFamily: Fonts.Lato_Medium,
    fontSize: vw(16),
  },
});
