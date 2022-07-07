import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/dimensions';

interface propInterface {
  textColor: string;
  bgColor: string;
  text: string;
  onPressButton: Function;
  disable: boolean;
  disableColor: any;
}

export default function CustomButton(props: propInterface) {
  const {textColor, bgColor, text, onPressButton, disable = false} = props;
  return (
    <TouchableOpacity
      style={[
        styles.signInWithEmail,
        {
          backgroundColor: disable ? props?.disableColor : bgColor,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      disabled={disable}>
      <Text style={{...styles.signUpText, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  signInWithEmail: {
    height: vh(56),
    marginTop: vh(16),
    borderRadius: 8,
    paddingHorizontal: vw(24),
    justifyContent: 'center',
  },
  signUpText: {
    fontSize: vw(17),
    fontWeight: '500',
    textAlign: 'center',
  },
});
