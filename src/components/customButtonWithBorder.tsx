import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/dimensions';
import Fonts from '../utils/constant/fonts';

interface propInterface {
  textColor: string;
  bgColor: string;
  text: string;
  onPressButton: Function;
  disable: boolean;
  disableColor: any;
  borderColor: string;
}

export default function CustomButtonWithBorder(props: propInterface) {
  const {
    textColor,
    bgColor,
    text,
    onPressButton,
    disable = false,
    borderColor,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disable ? props?.disableColor : bgColor,
          borderColor: borderColor,
        },
      ]}
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      disabled={disable}>
      <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: vh(42),
    marginTop: vh(16),
    borderRadius: 8,
    paddingHorizontal: vw(24),
    justifyContent: 'center',
    borderWidth: vh(1),
  },
  buttonText: {
    fontSize: vw(17),
    fontFamily: Fonts.Lato_Heavy,
    textAlign: 'center',
  },
});
