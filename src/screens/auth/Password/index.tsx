import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../components/customButton';
import CustomTextInput from '../../../components/customTextInput';
import Color from '../../../utils/constant/colors';
import Strings from '../../../utils/constant/string';
import TopAuthHeader from '../components/topAuthHeader';
import styles from '../styles';
import {useDispatch, useSelector} from 'react-redux';
import LocalImages from '../../../utils/constant/localImages';
import {useNavigation} from '@react-navigation/native';
import ComponentNames from '../../../utils/constant/componentNames';
import {storePassword} from '../../../redux/auth/action';

export default function Password() {
  const navigation = useNavigation<any>();
  const [password, setPassword] = React.useState<string>('');
  const [showPassword, setShowPassword] = useState(true);
  const authDetails = useSelector((state: any) => state.AuthReducer);
  const dispatch = useDispatch<any>();
  const onChangeText = (text: any) => {
    setPassword(text);
  };
  const onLoginPress = () => {
    let payload = {
      password: password,
    };
    dispatch(storePassword(payload));
    navigation.navigate(ComponentNames.OTP);
  };
  const validatePassword = () => {
    const reg =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if (reg.test(password)) {
      return false;
    }
    return true;
  };
  const onEyePress = () => {
    setShowPassword(!showPassword);
  };
  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TopAuthHeader />
      <View style={styles.bottomContainer}>
        <View style={styles.headerTextView}>
          <View style={styles.headerTopText}>
            <Text style={styles.headerText}>{Strings.PasswordHeader}</Text>
          </View>
          <Text style={styles.subheaderText}>{Strings.PasswordSubHeader}</Text>
          <Text
            style={
              styles.number
            }>{`${authDetails.countryCode} - ${authDetails.phoneNumber}`}</Text>
        </View>
        <Text style={styles.textInputHeader}>{Strings.Phone_Number}</Text>
        <View style={styles.textInputView}>
          <CustomTextInput
            value={password}
            secureTextEntry={showPassword}
            placeholder={Strings.Password_Input}
            onChangeText={onChangeText}
            width={340}
            maxLength={25}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.eyeContainer}
            onPress={onEyePress}>
            <Image
              source={
                !showPassword ? LocalImages.eyeOpen : LocalImages.eyeClosed
              }
              resizeMode={'contain'}
              style={styles.eyeImg}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text={Strings.Login}
            textColor={Color.white}
            bgColor={Color.cyanBlue}
            disableColor={Color.lightGrey}
            onPressButton={onLoginPress}
            disable={validatePassword()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
