import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Names from '../utils/constant/componentNameStrings';
import AuthStack from './AuthStack';

const Stacks = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stacks.Navigator screenOptions={{headerShown: false}}>
        <Stacks.Screen name={Names.AuthStack} component={AuthStack} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}
