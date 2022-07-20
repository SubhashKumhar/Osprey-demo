import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CustomButtonWithImage from '../../../../../components/customButtonWithImage';
import Color from '../../../../../utils/constant/colors';
import LocalImages from '../../../../../utils/constant/localImages';
import Strings from '../../../../../utils/constant/string';
import {styles} from './styles';

export default function JobRole(props: any) {
  const onStillEmployedPress = () => {
    props?.setStillEmployed(!props?.stillEmployed);
  };
  return (
    <View>
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>{Strings.jobRoles}</Text>
        <Text style={styles.astrickText}>{Strings.astrick}</Text>
      </View>
      <CustomButtonWithImage
        textColor={Color.grey}
        bgColor={Color.cyanLightOpacity}
        text={Strings.selectJobRoles}
        image={LocalImages.arrowDown}
        borderColor={Color.cyanLightOpacity}
        onPressButton={() => {}}
        disable={false}
        disableColor={''}
      />
      <View style={styles.stillEmployedView}>
        <Text style={styles.stillEmployedText}>
          {Strings.stillInThisEmployement}
        </Text>
        <TouchableOpacity
          style={styles.stillEmployedImgContainer}
          onPress={onStillEmployedPress}>
          <Image
            source={
              props?.stillEmployed
                ? LocalImages.tickedBox
                : LocalImages.emptyBox
            }
            style={styles.stillEmployedImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
