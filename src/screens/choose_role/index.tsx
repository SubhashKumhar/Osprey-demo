import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../utils/localImages';
import Button from '../../component/button';
import styles from './style';
import localString from '../../utils/localString';

export default function Choose_Role({navigation}: any) {
  const [press, setPress] = useState(false);
  const [clientPress, setClientPress] = useState(false);

  const pressWorkerImg = () => {
    setPress(true);
    setClientPress(false);
  };

  const pressClientImg = () => {
    setClientPress(true);
    setPress(false);
  };

  const isDisable = () => {
    if (press == true || clientPress == true) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <View style={styles.parentView}>
      <View style={styles.mainView}>
        <Text style={styles.roleTextStyle}>{localString.chooseRole}</Text>
      </View>

      <View style={styles.secondViewStyle}>
        <Image
          source={localImages.profileTypeImg}
          style={styles.profileTypeStyle}
        />
        <View style={styles.lineView}></View>
        <Text style={styles.chooseRoleText}>
          {localString.settingUpProfile}
        </Text>
        <Text style={styles.setupProfileText}>
          {localString.setUpProfileAs}
        </Text>
        <View style={styles.workerClientView}>
          <TouchableOpacity activeOpacity={0.6} onPress={pressWorkerImg}>
            <Image
              source={
                press
                  ? localImages.staffWorkerSelected
                  : localImages.staffWorker
              }
              style={styles.staffWorkerStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={pressClientImg}>
            <Image
              source={
                clientPress
                  ? localImages.businessClientSelected
                  : localImages.businessClient
              }
              style={styles.clientStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button
          title="Proceed"
          disabled={isDisable()}
          customContainerStyle={[
            press == true || clientPress == true
              ? styles.buttonContainerView
              : styles.buttonUnselectedContainerView,
          ]}
          customTextStyle={[
            press == true || clientPress == true
              ? styles.buttonTitleView
              : styles.buttonUnselectedText,
          ]}
        />
      </View>
    </View>
  );
}
