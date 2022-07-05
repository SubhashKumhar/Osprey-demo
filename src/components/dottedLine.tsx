import {StyleSheet, View} from 'react-native';
import React from 'react';
import DashedLine from 'react-native-dashed-line';
import Color from '../utils/constant/colors';
import {vh} from '../utils/Dimension';

export default function DottedLine() {
  return (
    <View>
      <DashedLine
        dashLength={3}
        dashColor={Color.Grey}
        dashStyle={styles.dashLine}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  dashLine: {
    marginVertical: vh(10),
    opacity: 0.2,
  },
});
