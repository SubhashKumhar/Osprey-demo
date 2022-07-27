import {StyleSheet, View} from 'react-native';
import React from 'react';
import Color from '../utils/constant/colors';
import {vh} from '../utils/dimensions';
import Spinner from 'react-native-spinkit';

export default function Loader() {
  return (
    <View style={styles.container}>
      <Spinner
        isVisible={true}
        size={vh(50)}
        type={'FadingCircleAlt'}
        color={Color.peach}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '50%',
    left: '46%',
  },
});
