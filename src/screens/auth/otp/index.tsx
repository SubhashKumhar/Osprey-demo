import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Strings from '../../../utils/constant/string';
import styles from './styles';
import ItemSeparator from '../../../components/ItemSeparator';
import LocalImages from '../../../utils/constant/localImages';
import Color from '../../../utils/constant/colors';
import {useSelector} from 'react-redux';
import CustomButton from '../../../components/customButton';
import BackgroundTimer from 'react-native-background-timer';
import ComponentNames from '../../../utils/constant/componentNames';
import DottedLine from '../../../components/dottedLine';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default function OTP({navigation}: any) {
  const {phoneNumber} = useSelector((state: any) => state.AuthReducer);
  const [otp, setOtp] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [enableReset, setEnableReset] = useState(false);

  useEffect(() => {
    startTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, []);

  useEffect(() => {
    if (secondsLeft === 0) {
      setEnableReset(true);
      BackgroundTimer.stopBackgroundTimer();
    }
  }, [secondsLeft]);

  const startTimer = () => {
    BackgroundTimer.runBackgroundTimer(() => {
      setSecondsLeft(sec => {
        if (sec > 0) {
          return sec - 1;
        } else {
          return 0;
        }
      });
    }, 1000);
  };

  const clockify = () => {
    let minute = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let displayMinute = minute < 10 ? `0${minute}` : minute;
    let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
      displayMinute,
      displaySeconds,
    };
  };
  const onResetPress = () => {
    setSecondsLeft(30);
    setEnableReset(false);
    startTimer();
  };

  const onContinuePress = () => {
    setSecondsLeft(0);
    navigation.navigate(ComponentNames.SetupStack);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={'padding'} style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{Strings.Verify_Number}</Text>
        </View>
        <ItemSeparator />
        <View style={styles.mainView}>
          <View style={styles.otpHeaderView}>
            <Image
              source={LocalImages.otpBox}
              style={styles.otpBoxImg}
              resizeMode={'contain'}
            />
            <Text style={styles.otpHeaderText}>{Strings.OTP_Header}</Text>
          </View>
          <DottedLine />
          <View style={styles.otpSentView}>
            <Text style={styles.otpSentText}>{Strings.OTP_Sent}</Text>
            <Text style={styles.number}>{phoneNumber}</Text>
          </View>
          <OTPInputView
            style={styles.otpView}
            pinCount={4}
            onCodeChanged={(code: string) => {
              setOtp(code);
            }}
            autoFocusOnLoad
            placeholderTextColor={Color.lightGrey}
            placeholderCharacter="X"
            codeInputFieldStyle={styles.underlineStyleBase}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View style={styles.resendContainer}>
            <TouchableOpacity
              disabled={!enableReset}
              activeOpacity={0.8}
              onPress={onResetPress}>
              <Text
                style={[
                  styles.resendBtn,
                  {
                    color: enableReset ? Color.cyanBlue : Color.grey,
                  },
                ]}>
                {Strings.Resend_Code}
              </Text>
            </TouchableOpacity>
            <View style={styles.timer}>
              <Image
                source={LocalImages.clockIcon}
                style={styles.clockIcon}
                resizeMode={'contain'}
              />
              <Text style={styles.clockText}>
                {clockify().displayMinute + ':' + clockify().displaySeconds}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          <ItemSeparator />
          <View style={styles.button}>
            <CustomButton
              text={Strings.Submit_OTP}
              textColor={Color.white}
              bgColor={Color.cyanBlue}
              onPressButton={onContinuePress}
              disable={!(otp.length === 4) ? true : false}
              disableColor={Color.cyanBlueLight}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
