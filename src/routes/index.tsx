import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Names from '../utils/constant/componentNames';
import AuthStack from './AuthStack';
import SetupStack from './setupStack';

const Stacks = createNativeStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stacks.Navigator
        screenOptions={{headerShown: false}}
        // initialRouteName={Names.SetupStack}
      >
        <Stacks.Screen name={Names.AuthStack} component={AuthStack} />
        <Stacks.Screen name={Names.SetupStack} component={SetupStack} />
      </Stacks.Navigator>
    </NavigationContainer>
  );
}
