import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import StepIndicator from '../../../components/stepIndicator';
import Strings from '../../../utils/constant/string';
import {useNavigation} from '@react-navigation/native';

export default function CompleteProfile() {
  const navigation = useNavigation<any>();
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <StepIndicator title={Strings.otherInfo} onBackPressed={onBackPress} />
      <View>
        <Text>{}</Text>
      </View>
    </SafeAreaView>
  );
}
