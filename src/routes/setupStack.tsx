import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StoreProfile from './completeProfile';
import Step2 from '../screens/setup/step2';
import Step3 from '../screens/setup/step3';
import ComponentNames from '../utils/constant/componentNames';
import Names from '../utils/constant/componentNames';
import Choose_Role from '../screens/setup/choose_role';
import WelcomeScreen from '../screens/welcome/stepone/welcomeScreen';
import BasicInfo from '../screens/welcome/stepone/basicInfo';
import Picker from '../screens/welcome/stepone/datePicker';

const SetupStacks = createNativeStackNavigator();

export default function SetupStack() {
  return (
    <SetupStacks.Navigator screenOptions={{headerShown: false}}>
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
