import {View, Text} from 'react-native';
import React from 'react';
import CustomButtonWithImage from '../../../../../components/customButtonWithImage';
import Color from '../../../../../utils/constant/colors';
import LocalImages from '../../../../../utils/constant/localImages';
import Strings from '../../../../../utils/constant/string';
import {styles} from './styles';

export default function JobDate(props: any) {
  return (
    <View style={styles.jobDetailes}>
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>{props.title}</Text>
        <Text style={styles.astrickText}>{Strings.astrick}</Text>
      </View>
      <CustomButtonWithImage
        textColor={Color.grey}
        bgColor={Color.cyanLightOpacity}
        text={Strings.selectDateAndMonth}
        image={LocalImages.calender}
        imageStyle={styles.calenderImg}
        borderColor={Color.cyanLightOpacity}
        onPressButton={() => {}}
        disable={false}
        disableColor={''}
      />
    </View>
  );
}
