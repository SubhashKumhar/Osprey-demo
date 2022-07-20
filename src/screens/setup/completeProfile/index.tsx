import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import StepIndicator from '../../../components/stepIndicator';
import Strings from '../../../utils/constant/string';
import {useNavigation} from '@react-navigation/native';
import LocalImages from '../../../utils/constant/localImages';
import ItemSeparator from '../../../components/ItemSeparator';
import CustomButton from '../../../components/customButton';
import Color from '../../../utils/constant/colors';
import ComponentNames from '../../../utils/constant/componentNames';

export default function CompleteProfile() {
  const navigation = useNavigation<any>();
  const onBackPress = () => {
    navigation.goBack();
  };

  const onResumePress = () => {
    navigation.navigate(ComponentNames.AddResume);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StepIndicator
        title={Strings.otherInfo}
        onBackPressed={onBackPress}
        skipEnable={true}
      />
      <TouchableOpacity style={styles.storeInfoButtons} onPress={onResumePress}>
        <View style={styles.storeTextView}>
          <Text style={styles.storeText}>{Strings.resumeExperience}</Text>
          <Text style={styles.storeSubText}>{Strings.notUploadedYet}</Text>
        </View>
        <Image source={LocalImages.arrowRight} style={styles.arrow} />
      </TouchableOpacity>
      <ItemSeparator marginHorizontal={16} />
      <TouchableOpacity style={styles.storeInfoButtons}>
        <View style={styles.storeTextView}>
          <Text style={styles.storeText}>{Strings.Language}</Text>
          {<Text style={styles.storeSubText}>{Strings.notUploadedYet}</Text>}
        </View>
        <Image source={LocalImages.arrowRight} style={styles.arrow} />
      </TouchableOpacity>
      <ItemSeparator marginHorizontal={16} />
      <TouchableOpacity style={styles.storeInfoButtons}>
        <View style={styles.storeTextView}>
          <Text style={styles.storeText}>{Strings.Certifications}</Text>
          {<Text style={styles.storeSubText}>{Strings.notUploadedYet}</Text>}
        </View>
        <Image source={LocalImages.arrowRight} style={styles.arrow} />
      </TouchableOpacity>
      <ItemSeparator marginHorizontal={16} />
      <View style={styles.buttons}>
        <CustomButton
          textColor={Color.white}
          bgColor={Color.cyanBlue}
          text={Strings.submit}
          onPressButton={() => {
            // navigation.navigate(ComponentNames.AddResume);
          }}
          disable={false}
          disableColor={''}
        />
      </View>
    </SafeAreaView>
  );
}
