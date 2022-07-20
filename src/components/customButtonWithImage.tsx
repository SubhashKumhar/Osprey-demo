import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/dimensions';
import Fonts from '../utils/constant/fonts';

interface propInterface {
  textColor?: string;
  bgColor?: string;
  text?: string;
  onPressButton: Function;
  disable?: boolean;
  disableColor?: any;
  borderColor?: string;
  width?: number;
  image?: any;
  imageStyle?: Object;
}

export default function CustomButtonWithBorder(props: propInterface) {
  const {
    textColor,
    bgColor,
    text,
    onPressButton,
    disable = false,
    borderColor,
    width,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disable ? props?.disableColor : bgColor,
          borderColor: borderColor,
        },
        {width: width},
      ]}
      activeOpacity={0.8}
      onPress={() => onPressButton()}
      disabled={disable}>
      <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
      <Image
        source={props.image}
        style={[styles.buttonImage, props?.imageStyle]}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    height: vh(42),
    marginTop: vh(16),
    borderRadius: vh(8),
    justifyContent: 'space-between',
    borderWidth: vh(1),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: vw(8),
  },
  buttonText: {
    fontSize: vw(16),
    lineHeight: vh(26),
    fontFamily: Fonts.Lato_Medium,
  },
  buttonImage: {
    height: vh(21),
    width: vh(24),
  },
});
