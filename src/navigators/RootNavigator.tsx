import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/Onboarding.screen';
import AuthenticationNavigator from './AuthenticationNavigator';


const Stack = createNativeStackNavigator();
const RootNavigater = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='onboard' id={undefined}>
      <Stack.Screen name="onboard" component={Onboarding} />
      <Stack.Screen name="auth" component={AuthenticationNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigater;