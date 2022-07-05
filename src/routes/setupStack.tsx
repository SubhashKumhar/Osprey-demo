import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Step2 from '../screens/setup/step2';
import ComponentNames from '../utils/constant/componentNames';

const SetupStacks = createNativeStackNavigator();

export default function SetupStack() {
  return (
    <SetupStacks.Navigator screenOptions={{headerShown: false}}>
      <SetupStacks.Screen name={ComponentNames.Step2} component={Step2} />
    </SetupStacks.Navigator>
  );
}
