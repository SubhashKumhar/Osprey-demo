import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  passwordTest,
  emailTest,
  firstNameTest,
} from '../../utils/constant/validation';
import styles from './style';
import React, {useState} from 'react';
import Button from '../../component/button';
import Input from '../../component/input/input';
import localImages from '../../utils/localImages';
import Strings from '../../utils/constant/string';
import {useDispatch, useSelector} from 'react-redux';
import Names from '../../utils/constant/componentNames';
import {StoreUserData} from '../../redux/signUp/action';

export default function SignUp({navigation}: any) {
  /**
   * @state change state of error
   */

  const [err, setErr] = useState(false);
  const [errText, setErrText] = useState('');

  /**
   * @details state of all the input data
   */

  const [details, setDetails] = useState({
    fName: '',
    mName: '',
    lName: '',
    email: '',
    password: '',
  });

  /**
   * @eye state of Password eye
   */
  const [eyePress, setEyePress] = useState(false);

  const dispatch = useDispatch<any>();

  /**
   * @function this function check the firstName,email and password with regex
   */
  const onProceedPress2 = () => {
    if (!firstNameTest(details.fName)) {
      setErr(true);
      setErrText(Strings.incorrectName);
    } else if (!emailTest(details.email)) {
      setErr(true);
      setErrText(Strings.incorrectEmail);
    } else if (!passwordTest(details.password)) {
      setErr(true);
      setErrText(Strings.incorrectPassword);
    } else {
      dispatch(StoreUserData(details));
      navigation.navigate(Names.OTP);
      setErr(false);
    }
  };

  /**
   * @function this function change the state of the eye
   */
  const onEyePress = () => {
    setEyePress(!eyePress);
  };

  /**
   *
   * @returns change the disability of the button
   */
  const isDisable = () => {
    if (
      details.fName.length > 0 &&
      details.lName.length > 0 &&
      details.email.length > 0 &&
      details.password.length > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const {phoneNumber} = useSelector((state: any) => state.AuthReducer);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.topHeaderView}>
        <TouchableOpacity>
          <Image style={styles.backArrow} source={localImages.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{Strings.signUp}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.signUpTitleText}>{Strings.signUpOsprey}</Text>

        <Text style={styles.FirstNameText}>
          {Strings.firstName}
          <Text style={styles.astrickColor}>{Strings.astrick}</Text>
        </Text>
        <View style={styles.inputTextViewStyle}>
          <Input
            place="Enter your first name"
            placeholderColor="#333333"
            onChangeText={(text: string) => {
              setDetails({...details, fName: text});
            }}
          />
        </View>

        <Text style={styles.NextNameText}>
          {Strings.middleName}
          <Text style={styles.optionalTextColor}>{Strings.optional}</Text>
        </Text>
        <View style={styles.inputTextViewStyle}>
          <Input
            place="Enter your middle name"
            placeholderColor="#333333"
            onChangeText={(text: string) => {
              setDetails({...details, mName: text});
            }}
          />
        </View>

        <Text style={styles.NextNameText}>
          {Strings.lastName}
          <Text style={styles.astrickColor}>{Strings.astrick}</Text>
        </Text>
        <View style={styles.inputTextViewStyle}>
          <Input
            place="Enter your last name"
            placeholderColor="#333333"
            onChangeText={(text: string) => {
              setDetails({...details, lName: text});
            }}
          />
        </View>

        <Text style={styles.NextNameText}>
          {Strings.phone}
          <Text style={styles.astrickColor}>{Strings.astrick}</Text>
        </Text>
        <View style={styles.phoneTextViewStyle}>
          <View style={styles.countryCodeView}>
            <Text style={styles.countryCodeText}>
              {phoneNumber.split('-')[0]}
            </Text>
          </View>
          <View style={styles.phoneView}>
            <Text style={styles.phNumberTextStyle}>
              {phoneNumber.split('-')[1]}
            </Text>
          </View>
        </View>

        <Text style={styles.NextNameText}>
          {Strings.email}
          <Text style={styles.astrickColor}>{Strings.astrick}</Text>
        </Text>
        <View style={styles.inputTextViewStyle}>
          <Input
            place="Enter your email"
            placeholderColor="#333333"
            onChangeText={(text: string) => {
              setDetails({...details, email: text});
            }}
          />
        </View>

        <Text style={styles.NextNameText}>
          {Strings.password}
          <Text style={styles.astrickColor}>{Strings.astrick}</Text>
        </Text>
        <View style={styles.inputTextViewStyle}>
          <Input
            place="Enter your password"
            placeholderColor="#333333"
            secure={!eyePress}
            onChangeText={(text: string) => {
              setDetails({...details, password: text});
            }}
          />
          <TouchableOpacity onPress={onEyePress}>
            <Image
              source={!eyePress ? localImages.eyeClosed : localImages.eyeIcon}
              style={styles.eyeIconStyle}
            />
          </TouchableOpacity>
        </View>
        {err ? (
          <View
            style={{top: 30, flexDirection: 'row', justifyContent: 'center'}}>
            <Image
              source={localImages.warningIcon}
              style={{height: 20, width: 20}}
            />
            <Text style={{marginLeft: 5, color: 'red'}}>{errText}</Text>
          </View>
        ) : null}
      </ScrollView>

      <View style={styles.bottomFooterView}>
        <View style={styles.bottomTextView}>
          <Image
            source={localImages.circleIcon}
            style={styles.circleImageStyle}
          />
          <Text style={styles.creatingAccountText}>
            {Strings.creatingAccount}
            <Text style={styles.blueColorText}>
              {Strings.termsAndCondition}
            </Text>
            <Text>{' &'}</Text>
            <Text style={styles.blueColorText}>{Strings.privacyPolicy}</Text>
          </Text>
        </View>

        <Button
          title="Proceed"
          disabled={isDisable()}
          customContainerStyle={[styles.buttonContainerView]}
          customTextStyle={styles.buttonTitleView}
          onPress={onProceedPress2}
        />
      </View>
    </SafeAreaView>
  );
}
