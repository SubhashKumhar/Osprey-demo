import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../utils/localImages';
import Button from '../../component/button';
import styles from './style';

export default function Choose_Role({navigation}: any) {
  const [press, setPress] = useState(false);
  const [clientPress, setClientPress] = useState(false);

  const pressWorkerImg = () => {
    setPress(!press);
    setClientPress(false);
  };

  const pressClientImg = () => {
    setClientPress(!clientPress);
    setPress(false);
  };

  return (
    <View style={styles.parentView}>
      <View style={styles.mainView}>
        <Text style={styles.roleTextStyle}>{'Choose role'}</Text>
      </View>

      <View style={styles.secondViewStyle}>
        <Image
          source={localImages.profileTypeImg}
          style={styles.profileTypeStyle}
        />
        <View style={styles.lineView}></View>
        <Text style={styles.chooseRoleText}>
          {'Choose your role for setting up your profile on the application'}
        </Text>
        <Text style={styles.setupProfileText}>
          {'I want to setup my profile as a'}
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
          disabled={false}
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
