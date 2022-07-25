import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import BackHeader from '../../../../components/backHeader';
import Strings from '../../../../utils/constant/string';
import {styles} from './styles';
import LocalImages from '../../../../utils/constant/localImages';
import CustomButton from '../../../../components/customButton';
import Color from '../../../../utils/constant/colors';
import {useNavigation} from '@react-navigation/native';
import ComponentNames from '../../../../utils/constant/componentNames';

export default function AddLannguage() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader title={Strings.Languages} />
      <View style={styles.noLanguageView}>
        <Image
          source={LocalImages.emptyCardboardBox}
          style={styles.boxImage}
          resizeMode={'contain'}
        />
        <Text style={styles.noLanguageToDisplayText}>
          {Strings.noLanguageToDisplay}
        </Text>
        <CustomButton
          textColor={Color.cyanLightBlue}
          bgColor={Color.cyanBlue}
          text={Strings.addLanguage}
          onPressButton={() => {
            navigation.navigate(ComponentNames.languageSelection);
          }}
          disable={false}
          disableColor={''}
        />
      </View>
    </SafeAreaView>
  );
}
