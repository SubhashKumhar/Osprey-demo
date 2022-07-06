import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from '../screens/auth/login';
import OTP from '../screens/auth/otp';
import Password from '../screens/auth/Password';
import Names from '../utils/constant/componentNameStrings';
import SignUp from '../screens/signup';
import Choose_Role from '../screens/choose_role';
import WelcomeScreen from '../screens/welcome/stepone/welcomeScreen';

const AuthStacks = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <AuthStacks.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Names.signUp}
    >
      <AuthStacks.Screen name={Names.Login} component={Login} />
      <AuthStacks.Screen name={Names.Password} component={Password} />
      <AuthStacks.Screen name={Names.OTP} component={OTP} />
      <AuthStacks.Screen name={Names.signUp} component={SignUp} />
      <AuthStacks.Screen name={Names.role} component={Choose_Role} />
      <AuthStacks.Screen name={Names.welcomeScreen} component={WelcomeScreen} />
    </AuthStacks.Navigator>
  );
}
