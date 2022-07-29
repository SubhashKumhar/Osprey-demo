import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Strings from '../utils/constant/string';
import LocalImages from '../utils/constant/localImages';
import ItemSeparator from './ItemSeparator';
import {vw, vh} from '../utils/dimensions';
import Color from '../utils/constant/colors';
import Fonts from '../utils/constant/fonts';

export default function StepIndicator({...props}) {
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity
            style={styles.arrowleftContainer}
            activeOpacity={0.8}
            onPress={props.onBackPressed}>
            <Image
              source={LocalImages.arrowLeft}
              style={styles.arrowleft}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>{props.title}</Text>
        </View>
        {props.skipEnable && (
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>{Strings.skip}</Text>
          </TouchableOpacity>
        )}
      </View>
      <ItemSeparator />
      {/* Top Current Step View  */}

      <View style={styles.stepView}>
        <Image
          source={LocalImages.checkIcon}
          resizeMode={'contain'}
          style={styles.arrowleftContainer}
        />
        <View style={styles.stepLine} />
        <Image
          source={LocalImages.checkIcon}
          resizeMode={'contain'}
          style={styles.arrowleftContainer}
        />
        <View style={styles.stepLine} />
        <View style={styles.selectedStep}>
          <Text style={styles.stepText}>{Strings.Three}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginHorizontal: vw(16),
    marginVertical: vh(10),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepText: {
    color: Color.white,
  },
  arrowleftContainer: {
    height: vh(24),
    width: vw(24),
    justifyContent: 'center',
    alignItems: 'center',
    // top: vh(8),
  },
  arrowleft: {
    height: '100%',
    width: '100%',
  },
  headerText: {
    fontSize: vw(18),
    fontFamily: Fonts.Lato_Bold,
    marginLeft: vw(8),
    color: Color.black,
  },
  stepView: {
    flexDirection: 'row',
    marginVertical: vh(24),
    marginHorizontal: vw(63.5),
    alignItems: 'center',
  },
  stepLine: {
    width: vw(80),
    marginHorizontal: vw(4),
    backgroundColor: Color.grey,
    opacity: 0.5,
    height: vh(1),
  },
  selectedStep: {
    height: vh(24),
    width: vh(24),
    backgroundColor: Color.cyanBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: vh(12),
  },
  backButton: {
    flexDirection: 'row',
  },
  skipButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  skipButtonText: {
    fontSize: vw(16),
    lineHeight: vh(24),
    fontFamily: Fonts.Lato_Light,
  },
});
