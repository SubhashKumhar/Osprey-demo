import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import StoreProfile from './completeProfile';
import Step2 from '../screens/setup/step2';
import Step3 from '../screens/setup/step3';
import ComponentNames from '../utils/constant/componentNames';

const SetupStacks = createNativeStackNavigator();

export default function SetupStack() {
  return (
    <SetupStacks.Navigator screenOptions={{headerShown: false}}>
      <SetupStacks.Screen name={ComponentNames.Step2} component={Step2} />
      <SetupStacks.Screen name={ComponentNames.Step3} component={Step3} />
      <SetupStacks.Screen
        name={ComponentNames.StoreProfile}
        component={StoreProfile}
      />
    </SetupStacks.Navigator>
  );
}
