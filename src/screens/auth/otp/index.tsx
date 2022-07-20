import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Strings from '../../../utils/constant/string';
import styles from './styles';
import ItemSeparator from '../../../components/ItemSeparator';
import LocalImages from '../../../utils/constant/localImages';
import Color from '../../../utils/constant/colors';
import {useSelector} from 'react-redux';
import CustomButton from '../../../components/customButton';
import {Alert} from 'react-native';
import BackgroundTimer from 'react-native-background-timer';
import ComponentNames from '../../../utils/constant/componentNameStrings';
import DottedLine from '../../../components/dottedLine';

export default function OTP({navigation}:any) {
  const {phoneNumber} = useSelector((state: any) => state.AuthReducer);
  const [otp, setOtp] = useState('');
  const textInput1 = useRef<any>();
  const textInput2 = useRef<any>();
  const textInput3 = useRef<any>();
  const textInput4 = useRef<any>();
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [enableReset, setEnableReset] = useState(false);

console.log("reREnder333")
  useEffect(() => {
    startTimer();
    return () => {
      BackgroundTimer.stopBackgroundTimer();
    }
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
    setSecondsLeft(0)
    navigation.navigate(ComponentNames.role)
  };

  const first = (text: string) => {
    if (text.length === 1) {
      if (otp.length < 1) {
        setOtp(otp + text);
      } else {
        let temp = text + otp.slice(-3);
        setOtp(temp);
      }
      textInput2.current.focus();
    } else {
      setOtp(otp.slice(-3));
    }
  };

  const second = (text: string) => {
    if (text.length === 1) {
      if (otp.length < 2) {
        setOtp(otp + text);
      } else {
        let temp = otp.slice(0, 1) + text + otp.slice(-2);
        setOtp(temp);
      }
      textInput3.current.focus();
    } else {
      setOtp(otp.slice(0, 1) + otp.slice(-2));
    }
  };

  const third = (text: string) => {
    if (text.length === 1) {
      if (otp.length < 3) {
        setOtp(otp + text);
      } else {
        let temp = otp.slice(0, 2) + text + otp.slice(-1);
        setOtp(temp);
      }
      textInput4.current.focus();
    } else {
      setOtp(otp.slice(0, 2) + otp.slice(-1));
    }
  };

  const fourth = (text: string) => {
    console.log('char', text.charCodeAt(1));
    if (text.length === 1) {
      if (otp.length < 4) {
        setOtp(otp + text);
      } else {
        let temp = otp.slice(0, -1);
        setOtp(temp + text);
      }
      textInput4.current.blur();
    } else {
      setOtp(otp.slice(0, -1));
    }
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
          <View style={styles.otpSection}>
            <View style={styles.otpBox}>
              {/* {!textInput1?.current?.isFocused() && (
                <Image
                  source={LocalImages.Grey_Cross}
                  resizeMode={'stretch'}
                  style={styles.crossImg}
                />
              )} */}
              <TextInput
                style={styles.otpInput}
                ref={textInput1}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={first}
                onBlur={() => {
                  console.log('focused', textInput1?.current?.isFocused());
                }}
              />
            </View>
            <View style={styles.otpBox}>
              {/* {!textInput2?.current?.isFocused() && (
                <Image
                  source={LocalImages.Grey_Cross}
                  resizeMode={'stretch'}
                  style={styles.crossImg}
                />
              )} */}
              <TextInput
                style={styles.otpInput}
                ref={textInput2}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={second}
                onBlur={() => {
                  console.log('focused', textInput1?.current?.isFocused());
                }}
              />
            </View>
            <View style={styles.otpBox}>
              {/* {!textInput3?.current?.isFocused() && (
                <Image
                  source={LocalImages.Grey_Cross}
                  resizeMode={'stretch'}
                  style={styles.crossImg}
                />
              )} */}
              <TextInput
                style={styles.otpInput}
                ref={textInput3}
                keyboardType={'number-pad'}
                onChangeText={third}
                maxLength={1}
                onBlur={() => {
                  console.log('focused', textInput1?.current?.isFocused());
                }}
              />
            </View>
            <View style={styles.otpBox}>
              {/* {!textInput4?.current?.isFocused() && (
                <Image
                  source={LocalImages.Grey_Cross}
                  resizeMode={'stretch'}
                  style={styles.crossImg}
                />
              )} */}
              <TextInput
                style={styles.otpInput}
                ref={textInput4}
                maxLength={1}
                keyboardType={'number-pad'}
                onChangeText={fourth}
                onBlur={() => {
                  console.log('focused', textInput1?.current?.isFocused());
                }}
              />
            </View>
          </View>
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
              <Image source={LocalImages.clockIcon} style={styles.clockIcon} />
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
