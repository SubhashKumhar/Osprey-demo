import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LocalImages from '../../../../../utils/constant/localImages';
import Strings from '../../../../../utils/constant/string';
import {styles} from './styles';
import CustomTextInput from '../../../../../components/customTextInput';

export default function JobRole(props: any) {
  const onStillEmployedPress = () => {
    props?.setStillEmployed(!props?.stillEmployed);
  };

  const _onChangeText = (text: string) => {
    props.setJobRole(text);
  };

  return (
    <View>
      <View style={styles.itemTitle}>
        <Text style={styles.itemTitleText}>{Strings.jobRoles}</Text>
        <Text style={styles.astrickText}>{Strings.astrick}</Text>
      </View>
      <CustomTextInput
        placeholder={Strings.enterJobRole}
        onChangeText={_onChangeText}
        value={props.jobRole}
      />
      <View style={styles.stillEmployedView}>
        <Text style={styles.stillEmployedText}>
          {Strings.stillInThisEmployement}
        </Text>
        <TouchableOpacity
          style={styles.stillEmployedImgContainer}
          activeOpacity={0.8}
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
