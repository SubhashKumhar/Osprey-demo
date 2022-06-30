import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/Dimension';
import Color from '../utils/constant/colors';

interface Props {
  placeholder: string;
  width: number;
}

export default function CustomTextInput(props: Props) {
  return (
    <View
      style={[
        styles.container,
        props.hasOwnProperty('width') ? {width: vw(props?.width)} : {},
      ]}>
      <TextInput placeholder={props.placeholder} style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.TextInputBackground,
    borderRadius: vh(5),
    marginVertical: vh(8),
    width: '100%',
  },
  textInput: {
    height: vh(48),
    width: '100%',
    marginHorizontal: vw(12),
  },
});
