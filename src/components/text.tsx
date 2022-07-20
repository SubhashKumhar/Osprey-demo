import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  text: String;
  styles: Object;
}

export default function HeaderText(props: Props) {
  return (
    <View>
      <Text style={props.styles}>{props.text}</Text>
    </View>
  );
}
