import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Color from '../../../utils/constant/colors';
import {useSelector} from 'react-redux';
import {vh, vw} from '../../../utils/dimensions';
import localImages from '../../../utils/localImages';
import Strings from '../../../utils/constant/string';
import ItemSeparator from '../../../components/ItemSeparator';
import Button from '../../../component/button';
import ComponentNames from '../../../utils/constant/componentNames';

export default function WelcomeScreen({navigation}: any) {
  /**
   * @arr Array of the three Steps
   */

  const arr = [
    {
      header: Strings.stepOne,
      subHeader: Strings.tellUsYourSelf,
    },
    {
      header: Strings.stepTwo,
      subHeader: Strings.prefrenceForJob,
    },
    {
      header: Strings.stepThree,
      subHeader: Strings.identifyDocuments,
    },
  ];

  const {data} = useSelector(store => store.SignUpReducer);
  const onBtnPress = () => {
    navigation.navigate(ComponentNames.basicInfo);
  };
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <TouchableOpacity>
            <Image source={localImages.leftArrow} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondView}>
        <View style={styles.welcomeTextView}>
          <Image source={localImages.confirmationCheck} />
          <Text style={styles.wecomeText}>{`Welcome ${data.fName} !`}</Text>
          <Text style={styles.successfullAccountText}>
            {Strings.succesfullyCreatedAccount}
          </Text>
        </View>
        <View style={styles.lineSeperatorView}>
          <ItemSeparator />
        </View>
        <View style={styles.thirdView}>
          <Text style={styles.completeProfileText}>
            {Strings.completeProfile}
          </Text>
          {arr.map(item => {
            return (
              <View key={item.header} style={styles.mainHeaderView}>
                <Text style={styles.headerText}>{item.header}</Text>
                <Text style={styles.subHeaderText}>{item.subHeader}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.bottomView}>
        <Button
          title="Continue with profile setup"
          customContainerStyle={[styles.buttonContainerView]}
          customTextStyle={styles.buttonTitleView}
          onPress={onBtnPress}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 0.12,
    backgroundColor: Color.white,
    justifyContent: 'flex-end',
  },
  headerView: {
    height: vh(28),
    marginHorizontal: vw(16),
    marginBottom: vh(8),
    justifyContent: 'center',
  },
  secondView: {
    flex: 0.77,
    backgroundColor: Color.white,
  },
  welcomeTextView: {
    flex: 0.28,
    marginHorizontal: vw(16),
    alignItems: 'center',
  },
  wecomeText: {
    marginTop: vh(16),
    fontSize: vh(16),
    fontWeight: '500',
  },
  successfullAccountText: {
    fontSize: vh(13),
    marginHorizontal: vw(16),
    marginTop: vh(16),
    textAlign: 'center',
    color: '#666666',
  },
  lineSeperatorView: {
    flex: 0.1,
    justifyContent: 'center',
    paddingHorizontal: vw(16),
  },
  thirdView: {
    flex: 0.53,
    marginHorizontal: vw(16),
  },
  completeProfileText: {
    fontSize: vh(15),
    fontWeight: '500',
    marginBottom: vh(32),
  },
  mainHeaderView: {marginTop: vh(24)},
  headerText: {fontSize: vh(13), fontWeight: '500'},
  subHeaderText: {
    marginTop: vh(4),
    marginLeft: vw(10),
    fontSize: vh(13),
    color: '#666666',
  },
  buttonContainerView: {
    backgroundColor: '#2474ff',
    marginHorizontal: vw(16),
    marginTop: vh(12),
    borderRadius: 4,
  },
  buttonTitleView: {
    color: Color.white,
    fontWeight: '600',
  },
  bottomView: {flex: 0.1, backgroundColor: Color.white},
});
