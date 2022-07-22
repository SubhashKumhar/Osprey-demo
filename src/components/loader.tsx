import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../utils/constant/colors';
import {vh} from '../utils/dimensions';

export default function Loader(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={Color.orange} />
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
