import React from 'react';
import {NavigationAction, NavigationState} from '@react-navigation/native';

export const navigationRef = React.createRef<any>();

export function dispatch(
  action: NavigationAction | ((state: NavigationState) => NavigationAction),
): void {
  navigationRef.current?.dispatch(action);
}
