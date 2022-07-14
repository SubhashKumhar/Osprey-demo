import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';
import Strings from '../../../utils/constant/string';
import ItemSeparator from '../../../components/ItemSeparator';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import DottedLine from '../../../components/dottedLine';
import {vh} from '../../../utils/dimensions';
import CustomButton from '../../../components/customButton';
import CustomButtonWithBorder from '../../../components/customButtonWithBorder';
import Color from '../../../utils/constant/colors';
import StepIndicator from '../../../components/stepIndicator';
import ComponentNames from '../../../utils/constant/componentNames';

export default function Step3() {
  const navigation = useNavigation<any>();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StepIndicator
        title={''}
        onBackPressed={onBackPress}
        skipEnable={false}
      />
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>{Strings.exploreJobsNow}</Text>
      </View>
      <View style={styles.topTextView}>
        <Text style={styles.topText}>{Strings.congratulationLines}</Text>
        <Text style={[styles.topText, {marginTop: vh(16)}]}>
          {Strings.youCanComplete}
        </Text>
      </View>
      <View style={styles.dottedLineView}>
        <DottedLine />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.requirementHeaderText}>
          {Strings.requirementsToBuildYourProfile}
        </Text>
        <Text style={styles.requirementText}>{Strings.identification}</Text>
        <Text style={styles.requirementText}>{Strings.resume}</Text>
        <Text style={styles.requirementText}>{Strings.language}</Text>
        <Text style={styles.requirementText}>{Strings.certification}</Text>
      </View>
      <View style={styles.bottomButton}>
        <ItemSeparator />
        <View style={styles.bottomButtons}>
          <View style={styles.buttons}>
            <CustomButtonWithBorder
              textColor={Color.cyanBlue}
              bgColor={Color.cyanLightBlue}
              text={Strings.skipAndExplore}
              onPressButton={() => {}}
              disable={false}
              disableColor={undefined}
              borderColor={Color.cyanBlue}
              width={163.5}
            />
          </View>
          <View style={styles.buttons}>
            <CustomButton
              textColor={Color.white}
              bgColor={Color.cyanBlue}
              text={Strings.completeProfileButton}
              onPressButton={() => {
                navigation.navigate(ComponentNames.completeProfile);
              }}
              disable={false}
              disableColor={''}
              width={163.5}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
