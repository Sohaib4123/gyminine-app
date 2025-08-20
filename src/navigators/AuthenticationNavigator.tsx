import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Visit from '../screens/Visit.screen';
import Login from '../screens/Login.screen';
import EnterName from '../screens/NewAccount/EnterName.screen';
import EnterEmail from '../screens/NewAccount/EnterEmail.screen';
import EnterNumber from '../screens/NewAccount/EnterNumber.screen';
import OTP from '../screens/NewAccount/OTP.screen';
import MainNavigator from './MainNavigator';
import BottomTabs from './BottomTab';

const Stack = createNativeStackNavigator();
const AuthenticationNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='visit' id={undefined}>
      <Stack.Screen name="visit" component={Visit} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Ename" component={EnterName} />
      <Stack.Screen name="Enumber" component={EnterNumber} />
      <Stack.Screen name="Eemail" component={EnterEmail} />
      <Stack.Screen name="otp" component={OTP} />
      <Stack.Screen name="main" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default AuthenticationNavigator;