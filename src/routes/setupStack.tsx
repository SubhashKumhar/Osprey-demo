import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StoreProfile from './completeProfile';
import Step2 from '../screens/setup/step2';
import Step3 from '../screens/setup/step3';
import ComponentNames from '../utils/constant/componentNames';
import Names from '../utils/constant/componentNames';
import Choose_Role from '../screens/setup/choose_role';
import WelcomeScreen from '../screens/setup/stepone/welcomeScreen';
import BasicInfo from '../screens/setup/stepone/basicInfo';
import Picker from '../screens/setup/stepone/datePicker';

const SetupStacks = createNativeStackNavigator();

export default function SetupStack() {
  return (
<<<<<<< HEAD
    <SetupStacks.Navigator screenOptions={{headerShown: false}}>
=======
    <SetupStacks.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ComponentNames.basicInfo}>
>>>>>>> 508ca0c4d125e0add38019d4f3c833e119642bc8
      <SetupStacks.Screen name={Names.role} component={Choose_Role} />
      <SetupStacks.Screen
        name={Names.welcomeScreen}
        component={WelcomeScreen}
      />
      <SetupStacks.Screen name={Names.basicInfo} component={BasicInfo} />
      <SetupStacks.Screen name={Names.picker} component={Picker} />
      <SetupStacks.Screen name={ComponentNames.Step2} component={Step2} />
      <SetupStacks.Screen name={ComponentNames.Step3} component={Step3} />
      <SetupStacks.Screen
        name={ComponentNames.StoreProfile}
        component={StoreProfile}
      />
    </SetupStacks.Navigator>
  );
}
