import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/login';
import OTP from '../screens/auth/otp';
import Password from '../screens/auth/Password';
import Names from '../utils/constant/componentNames';
import SignUp from '../screens/signup';
import Choose_Role from '../screens/choose_role';
import WelcomeScreen from '../screens/welcome/stepone/welcomeScreen';
import BasicInfo from '../screens/welcome/stepone/basicInfo';
import Picker from '../screens/welcome/stepone/datePicker';

const AuthStacks = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <AuthStacks.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Names.OTP}>
      <AuthStacks.Screen name={Names.Login} component={Login} />
      <AuthStacks.Screen name={Names.Password} component={Password} />
      <AuthStacks.Screen name={Names.signUp} component={SignUp} />
      <AuthStacks.Screen name={Names.OTP} component={OTP} />
      <AuthStacks.Screen name={Names.role} component={Choose_Role} />
      <AuthStacks.Screen name={Names.welcomeScreen} component={WelcomeScreen} />
      <AuthStacks.Screen name={Names.basicInfo} component={BasicInfo} />
      <AuthStacks.Screen name={Names.picker} component={Picker} />


    </AuthStacks.Navigator>
  );
}
