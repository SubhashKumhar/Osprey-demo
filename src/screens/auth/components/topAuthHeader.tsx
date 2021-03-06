import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {vh, vw} from '../../../utils/dimensions';
import LocalImages from '../../../utils/constant/localImages';
import Strings from '../../../utils/constant/string';
import Color from '../../../utils/constant/colors';

export default function TopAuthHeader() {
  return (
    <View style={styles.topContainer}>
      <Image
        source={LocalImages.ospreyQRLogo}
        style={styles.logoImg}
        resizeMode={'contain'}
      />
      <Text style={styles.logoText}>{Strings.Name}</Text>
      <View style={[styles.circle, styles.topCircle]} />
      <View style={[styles.circle, styles.bottomCircle]} />
      <TouchableOpacity style={styles.topFlag} activeOpacity={0.8}>
        <Image
          source={LocalImages.india}
          style={styles.flagImg}
          resizeMode={'contain'}
        />
        <Image
          source={LocalImages.arrowDown}
          style={styles.dropDownButton}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoImg: {
    height: vh(90.55),
    width: vw(105.5),
  },
  topContainer: {
    height: vh(442),
    backgroundColor: Color.cyanBlue,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  logoText: {
    fontSize: vh(20),
    fontWeight: '700',
    color: Color.white,
    marginTop: vh(29.4),
  },
  circle: {
    height: vh(204.11),
    width: vh(212),
    borderRadius: vh(200),
    borderWidth: vh(25),
    borderWidthColor: Color.white,
    opacity: 0.05,
    position: 'absolute',
  },
  bottomCircle: {
    bottom: vh(-106),
    left: vh(-102.5),
  },
  topCircle: {
    top: vh(-106),
    right: vh(-102.5),
  },
  topFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: vh(40),
    right: vw(20),
  },
  flagImg: {
    height: vh(40),
    width: vw(40),
  },
  dropDownButton: {
    height: vh(30),
    width: vw(20),
    tintColor: Color.white,
  },
});
