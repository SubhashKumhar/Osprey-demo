import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import React, {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import Strings from '../../../utils/constant/string';
import ItemSeparator from '../../../components/ItemSeparator';
import LocalImages from '../../../utils/constant/localImages';
import Color from '../../../utils/constant/colors';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../../components/customButton';
import BackgroundTimer from 'react-native-background-timer';
import ComponentNames from '../../../utils/constant/componentNames';
import DottedLine from '../../../components/dottedLine';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Services from '../../../services/Services';
import EndPoint from '../../../utils/endPoint';
import {resendOtp} from '../../../redux/auth/action';
import Loader from '../../../components/loader';

export default function OTP({navigation}: any) {
  const {phoneNo, countryCode, countryId} = useSelector(
    (state: any) => state.AuthReducer,
  );
  const {accessToken} = useSelector((state: any) => state.SignUpReducer);
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(30);
  const [enableReset, setEnableReset] = useState(false);
  const dispatch = useDispatch<any>();

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
    setIsLoading(true);
    let payload = {
      countryCode: countryCode,
      phoneNo: phoneNo,
      countryId: countryId,
    };
    dispatch(
      resendOtp(
        payload,
        (resp: Object) => {
          console.log('resp', resp);
          setIsLoading(false);
          setSecondsLeft(30);
          setEnableReset(false);
          startTimer();
        },
        (err: Object) => {
          setIsLoading(false);
          console.log('error', err);
        },
      ),
    );
  };

  const onContinuePress = () => {
    setIsLoading(true);
    let payload = {
      accessToken: accessToken,
      otp: otp,
      type: 'SIGNUP',
    };
    Services.postApiCall(
      EndPoint.verifyOtp,
      payload,
      (res: Object) => {
        console.log('successful', res);
        setIsLoading(false);
        setSecondsLeft(0);
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: ComponentNames.SetupStack}],
          }),
        );
        // navigation.navigate(ComponentNames.SetupStack);
      },
      (err: Object) => {
        setIsLoading(false);
        console.log('failed', err);
      },
    );
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
          <View style={styles.phoneTextViewStyle}>
            <View style={styles.countryCodeView}>
              <Text style={styles.countryCodeText}>{countryCode}</Text>
            </View>
            <View style={styles.phoneView}>
              <Text style={styles.phNumberTextStyle}>{` - ${phoneNo}`}</Text>
            </View>
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
            onCodeFilled={onContinuePress}
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
      {isLoading && <Loader />}
    </SafeAreaView>
  );
}
