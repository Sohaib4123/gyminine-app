import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';
import ClassesCategory from '../screens/ClassesCategory.screen';
import AllInstructor from '../screens/Instructor.screen';
import InstructorBookingScreen from '../screens/InstructorBooking.screen';
import TermsAndConditions from '../screens/TermsAndCondition.screen';
import { RootStackParamList } from '../types/Navigation.type';

const Stack = createNativeStackNavigator<RootStackParamList>();
const MainNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='home' id={undefined}>
      <Stack.Screen name="home" component={BottomTabs} />
      <Stack.Screen name="classCategory" component={ClassesCategory}/>
      <Stack.Screen name="instructors" component={AllInstructor}/>
      <Stack.Screen name="instructorBook" component={InstructorBookingScreen}/>
      <Stack.Screen name="termsAndCond" component={TermsAndConditions}/>
    </Stack.Navigator>
  );
}

export default MainNavigator;