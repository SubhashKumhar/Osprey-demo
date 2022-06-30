import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Strings from '../../../utils/constant/string';
import TopAuthHeader from '../components/topAuthHeader';
import CustomTextInput from '../../../components/customTextInput';
import LocalImages from '../../../utils/constant/localImages';
import CustomButton from '../../../components/customButton';
import Color from '../../../utils/constant/colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Login() {
  const [currentCountryCode, SetCurrentCountryCode] = React.useState('+91');
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
          <TouchableOpacity activeOpacity={0.8} style={styles.countryCodeView}>
            <Text style={styles.countryCodeText}>{currentCountryCode}</Text>
            <Image
              source={LocalImages.Chevron_Down_Arrow}
              style={styles.dropDownButton}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
          <CustomTextInput
            placeholder={Strings.Phone_Number_Input}
            width={259}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text={Strings.Continue}
            textColor={Color.White}
            bgColor={Color.Cyan_Blue}
            onPressButton={() => {}}
            disable={false}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}
