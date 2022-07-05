import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import Strings from '../../../utils/constant/string';
import TopAuthHeader from '../components/topAuthHeader';
import CustomTextInput from '../../../components/customTextInput';
import LocalImages from '../../../utils/constant/localImages';
import CustomButton from '../../../components/customButton';
import Color from '../../../utils/constant/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ComponentNames from '../../../utils/constant/componentNames';
import {useNavigation} from '@react-navigation/native';
import {storePhoneNumber} from '../../../redux/auth/action';
import {useDispatch} from 'react-redux';
import CountryCode from '../../../components/countryCode';
import Modal from 'react-native-modal';

export default function Login() {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const [currentCountryCode, setCurrentCountryCode] = React.useState('+91');
  const [number, setNumber] = React.useState('');
  const [showModal, setShowModal] = useState(false);

  const validateNumber = () => {
    return number.length < 7;
  };
  const onChangeText = (text: string) => {
    setNumber(text);
  };

  const onContinuePress = () => {
    dispatch(storePhoneNumber(currentCountryCode + '- ' + number));
    navigation.navigate(ComponentNames.Password);
  };
  const onCountryCodePress = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TopAuthHeader />
      <View style={styles.bottomContainer}>
        <View style={styles.headerTextView}>
          <Text style={styles.headerText}>{Strings.LoginHeader}</Text>
          <Text style={styles.subheaderText}>{Strings.LoginSubHeader}</Text>
        </View>
        <Text style={styles.textInputHeader}>{Strings.Phone_Number}</Text>
        <View style={styles.textInputView}>
          <TouchableOpacity
            onPress={onCountryCodePress}
            activeOpacity={0.8}
            style={styles.countryCodeView}>
            <Text style={styles.countryCodeText}>{currentCountryCode}</Text>
            <Image
              source={LocalImages.Chevron_Down_Arrow}
              style={styles.dropDownButton}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <Modal
            isVisible={showModal}
            style={styles.modalStyles}
            onBackdropPress={onCloseModal}>
            <CountryCode
              onCloseModal={onCloseModal}
              setCurrentCountryCode={setCurrentCountryCode}
            />
          </Modal>
          <CustomTextInput
            value={number}
            secureTextEntry={false}
            placeholder={Strings.Phone_Number_Input}
            onChangeText={onChangeText}
            width={259}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text={Strings.Continue}
            textColor={Color.White}
            bgColor={Color.Cyan_Blue}
            disableColor={Color.Cyan_Blue_Light}
            onPressButton={onContinuePress}
            disable={validateNumber()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
