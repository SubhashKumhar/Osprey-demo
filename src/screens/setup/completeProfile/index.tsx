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
import {useSelector} from 'react-redux';

function CompleteProfile() {
  const navigation = useNavigation<any>();
  const {manualResume} = useSelector((state: any) => state.SetupReducer);

  /**
   * @description Going Back
   */
  const onBackPress = () => {
    navigation.goBack();
  };

  const onResumePress = () => {
    navigation.navigate(ComponentNames.AddResume);
  };

  const onLanguagePress = () => {
    navigation.navigate(ComponentNames.AddLanguage);
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
          {manualResume?.length === 0 ? (
            <Text style={styles.storeSubText}>{Strings.notUploadedYet}</Text>
          ) : (
            <Text style={styles.storeSavedText}>{Strings.saved}</Text>
          )}
        </View>
        <Image source={LocalImages.arrowRight} style={styles.arrow} />
      </TouchableOpacity>
      <ItemSeparator marginHorizontal={16} />
      <TouchableOpacity
        style={styles.storeInfoButtons}
        onPress={onLanguagePress}>
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
export default React.memo(CompleteProfile);
