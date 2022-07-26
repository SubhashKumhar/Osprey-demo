import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../../utils/localImages';
import Button from '../../../component/button';
import styles from './style';
import Strings from '../../../utils/constant/string';
import Names from '../../../utils/constant/componentNames';
import {useDispatch} from 'react-redux';
import {storeProfileType} from '../../../redux/setup/action';
import Loader from '../../../components/loader';
import ItemSeparator from '../../../components/ItemSeparator';

export default function Choose_Role({navigation}: any) {
  const [press, setPress] = useState('');
  const dispatch = useDispatch<any>();
  const [isLoading, setLoading] = useState(false);

  const pressWorkerImg = () => {
    setPress('1');
  };

  const pressClientImg = () => {
    setPress('2');
  };

  const isDisable = () => {
    if (press !== '') {
      return false;
    } else {
      return true;
    }
  };

  const onBtnPress = () => {
    setLoading(true);
    dispatch(
      storeProfileType(
        press,
        (resp: any) => {
          console.log('resp', resp);
          setLoading(false);
          navigation.navigate(Names.welcomeScreen);
        },
        (error: any) => {
          setLoading(false);
          console.log('error', error);
        },
      ),
    );
  };

  return (
    <SafeAreaView style={styles.parentView}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.mainView}>
          <Text style={styles.roleTextStyle}>{Strings.chooseRole}</Text>
        </View>

        <View style={styles.secondViewStyle}>
          <Image
            source={localImages.profileTypeImg}
            style={styles.profileTypeStyle}
          />
          <View style={styles.lineView} />
          <Text style={styles.chooseRoleText}>{Strings.settingUpProfile}</Text>
          <Text style={styles.setupProfileText}>{Strings.setUpProfileAs}</Text>
          <View style={styles.workerClientView}>
            <TouchableOpacity activeOpacity={0.6} onPress={pressWorkerImg}>
              <Image
                source={
                  press === '1'
                    ? localImages.staffWorkerSelected
                    : localImages.staffWorker
                }
                style={styles.staffWorkerStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={pressClientImg}>
              <Image
                source={
                  press === '2'
                    ? localImages.businessClientSelected
                    : localImages.businessClient
                }
                style={styles.clientStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <Button
          title="Proceed"
          disabled={isDisable()}
          customContainerStyle={[
            press === '1' || press === '2'
              ? styles.buttonContainerView
              : styles.buttonUnselectedContainerView,
          ]}
          customTextStyle={[
            press === '2' || press === '1'
              ? styles.buttonTitleView
              : styles.buttonUnselectedText,
          ]}
          onPress={onBtnPress}
        />
      </View>
      {isLoading && <Loader />}
    </SafeAreaView>
  );
}
