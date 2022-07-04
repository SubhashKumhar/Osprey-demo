import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../screens/signup';
import Choose_Role from '../screens/choose_role';

export default function StackNavigator() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name='SignUp' component={SignUp}/>
              <Stack.Screen name='role' component={Choose_Role}/>
          </Stack.Navigator>
      </NavigationContainer>
    
  )
}