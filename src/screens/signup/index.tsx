import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../utils/localImages';
import Input from '../../component/input/input';
import Button from '../../component/button';
import styles from './style';
import {passwordTest, emailTest, firstNameTest} from '../../utils/validation';
import localString from '../../utils/localString';

export default function SignUp({navigation}: any) {
  const [err, setErr] = useState(false);
  const [errText, setErrText] = useState('');
  const [details, setDetails] = useState({
    fName: '',
    mName: '',
    lName: '',
    email: '',
    password: '',
  });
  const [eyePress, setEyePress] = useState(false);

  const onProceedPress2 = () => {
    if (!firstNameTest(details.fName)) {
      setErr(true);
      setErrText(localString.incorrectName);
    } else if (!emailTest(details.email)) {
      setErr(true);
      setErrText(localString.incorrectEmail);
    } else if (!passwordTest(details.password)) {
      setErr(true);
      setErrText(localString.incorrectPassword);
    } else {
      navigation.navigate('role');
      setErr(false);
      setDetails.
    }
  };

  const onEyePress = () => {
    setEyePress(!eyePress);
  };

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

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.topHeaderView}>
        <TouchableOpacity>
          <Image style={styles.backArrow} source={localImages.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{localString.signUp}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.signUpTitleText}>{localString.signUpOsprey}</Text>

        <Text style={styles.FirstNameText}>
          {localString.firstName}
          <Text style={styles.astrickColor}>{localString.astrick}</Text>
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
          {localString.middleName}
          <Text style={styles.optionalTextColor}>{localString.optional}</Text>
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
          {localString.lastName}
          <Text style={styles.astrickColor}>{localString.astrick}</Text>
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
          {localString.phone}
          <Text style={styles.astrickColor}>{localString.astrick}</Text>
        </Text>
        <View style={styles.phoneTextViewStyle}>
          <View style={styles.countryCodeView}>
            <Text style={styles.countryCodeText}>{'+91'}</Text>
          </View>
          <View style={styles.phoneView}>
            <Input place={'Phone'} placeholderColor="#333333" />
          </View>
        </View>

        <Text style={styles.NextNameText}>
          {localString.email}
          <Text style={styles.astrickColor}>{localString.astrick}</Text>
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
          {localString.password}
          <Text style={styles.astrickColor}>{localString.astrick}</Text>
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
            {localString.creatingAccount}
            <Text style={styles.blueColorText}>
              {localString.termsAndCondition}
            </Text>
            <Text>{' &'}</Text>
            <Text style={styles.blueColorText}>
              {localString.privacyPolicy}
            </Text>
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
