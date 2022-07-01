import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import localImages from '../../utils/localImages';
import Input from '../../component/input/input';
import Button from '../../component/button';
import styles from './style';
import { passwordTest,emailTest } from '../../utils/validation';

export default function SignUp() {
  const [details, setDetails] = useState({
    fName: '',
    mName: '',
    lName: '',
    email: '',
    password: '',
  });

  const [err,setErr]=useState(false);

 const onProceedPress=()=>{
    if(passwordTest(details.password ) && emailTest(details.email)){
       
    }
    else
    {
      setErr(true)   
    }
  }

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.topHeaderView}>
        <TouchableOpacity>
          <Image style={styles.backArrow} source={localImages.leftArrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'Signup & register'}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <Text style={styles.signUpTitleText}>
          {'Signup and register yourself on OSPREY'}
        </Text>

        <Text style={styles.FirstNameText}>
          {'First name'}
          <Text style={styles.astrickColor}>{' *'}</Text>
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
          {'Middle name'}
          <Text style={styles.optionalTextColor}>{' (optional)'}</Text>
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
          {'Last name'}
          <Text style={styles.astrickColor}>{' *'}</Text>
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
          {'Phone Number'}
          <Text style={styles.astrickColor}>{' *'}</Text>
        </Text>
        <View style={styles.phoneTextViewStyle}>
          <View
            style={styles.countryCodeView}>
            <Text style={styles.countryCodeText}>
              {'+91'}
            </Text>
          </View>
          <View
            style={styles.phoneView}>
            <Input 
            place={'Phone'} 
            placeholderColor="#333333" 
            />
          </View>
        </View>

        <Text style={styles.NextNameText}>
          {'Email'}
          <Text style={styles.astrickColor}>{' *'}</Text>
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
          {'Password'}
          <Text style={styles.astrickColor}>{' *'}</Text>
        </Text>
        <View style={styles.inputTextViewStyle}>
          <Input
            place="Enter your password"
            placeholderColor="#333333"
            secure={true}
            onChangeText={(text: string) => {
              setDetails({...details, password: text});
            }}
          />
        </View>
        {
          err?<Text>{'Galat hai'}</Text>:null
        }
      </ScrollView>

      <View style={styles.bottomFooterView}>
        <View style={styles.bottomTextView}>
          <Image
            source={localImages.circleIcon}
            style={styles.circleImageStyle}
          />
          <Text style={styles.creatingAccountText}>
            {'By creating an account, you have read and agreed to our '}
            <Text style={styles.blueColorText}>{'Terms and Conditions'}</Text>
            <Text>{' &'}</Text>
            <Text style={styles.blueColorText}>{' Privacy Policy'}</Text>
          </Text>
        </View>
        <Button
          title="Proceed"
          customContainerStyle={styles.buttonContainerView}
          customTextStyle={styles.buttonTitleView}
          onPress={onProceedPress}
        />
      </View>
    </SafeAreaView>
  );
}
