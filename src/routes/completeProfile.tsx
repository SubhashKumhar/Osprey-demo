import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CompleteProfile from '../screens/setup/completeProfile';
import AddLannguage from '../screens/setup/completeProfile/addLanguage/addLanguage';
import LanguageSelection from '../screens/setup/completeProfile/addLanguage/languageSelection/languageSelection';
import AddResume from '../screens/setup/completeProfile/addResume';
import AddExperienceDetails from '../screens/setup/completeProfile/addResume/AddExperienceDetails';
import ComponentNames from '../utils/constant/componentNames';

const StoreProfileInfo = createNativeStackNavigator();

export default function StoreProfile() {
  return (
    <StoreProfileInfo.Navigator screenOptions={{headerShown: false}}>
      <StoreProfileInfo.Screen
        name={ComponentNames.completeProfile}
        component={CompleteProfile}
      />
      <StoreProfileInfo.Screen
        name={ComponentNames.AddResume}
        component={AddResume}
      />
      <StoreProfileInfo.Screen
        name={ComponentNames.experienceDetails}
        component={AddExperienceDetails}
      />
      <StoreProfileInfo.Screen
        name={ComponentNames.AddLanguage}
        component={AddLannguage}
      />
      <StoreProfileInfo.Screen
        name={ComponentNames.languageSelection}
        component={LanguageSelection}
      />
    </StoreProfileInfo.Navigator>
  );
}
