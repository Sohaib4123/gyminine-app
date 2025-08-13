import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home.screen';

const Stack = createNativeStackNavigator();
const HomeNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='home' id={undefined}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;