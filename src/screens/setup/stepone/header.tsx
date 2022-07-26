import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import localImages from '../../../utils/localImages';
import Strings from '../../../utils/constant/string';
import {vh, vw} from '../../../utils/dimensions';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.headerMainView}>
      <View style={styles.headerView}>
        <TouchableOpacity onPress={onBackPress}>
          <Image source={localImages.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.basicInfoStyle}>{Strings.basicInfo}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerMainView: {
    height: vh(98),
    justifyContent: 'flex-end',
  },
  headerView: {
    height: vh(28),
    marginHorizontal: vw(16),
    marginBottom: vh(8),
    alignItems: 'center',
    flexDirection: 'row',
  },
  basicInfoStyle: {
    marginLeft: vw(5),
    fontSize: vh(15),
    fontWeight: '500',
  },
});
