import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Strings from '../../../../../utils/constant/string';
import BackHeader from '../../../../../components/backHeader';

export default function LanguageSelection() {
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={Strings.Languages} />
      <View style={styles.innerContainer}>
        <View style={styles.languageContainer}>
          <View style={styles.itemTitle}>
            <Text style={styles.itemTitleText}>{Strings.Language}</Text>
            <Text style={styles.astrickText}>{Strings.astrick}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text>{Strings.selectLocation}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.languageContainer}>
          <View style={styles.itemTitle}>
            <Text style={styles.itemTitleText}>{Strings.proficiency}</Text>
            <Text style={styles.astrickText}>{Strings.astrick}</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.button}>
            <Text>{Strings.selectProficiency}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
