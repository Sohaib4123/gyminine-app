import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';
import ClassesCategory from '../screens/ClassesCategory.screen';
import AllInstructor from '../screens/Instructor.screen';
import InstructorBookingScreen from '../screens/InstructorBooking.screen';
import InstructorProfile from '../screens/InstructorProfile.screen';
import TermsAndConditions from '../screens/TermsAndCondition.screen';
import BookingConfirmation from '../screens/BookingConfirmation.screen';
import BookingDetail from '../screens/BookingDetails.screen';
import CancelBooking from '../screens/CancelBooking.screen';
import FreezeBooking from '../screens/FreezeBooking.screen';
import LanguageSetting from '../screens/LanguageSetting.screen';
import { MainNavigatorParamList } from '../types/Navigation.type';

const Stack = createNativeStackNavigator<MainNavigatorParamList>();
const MainNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='mainTab' id={undefined}>
      <Stack.Screen name="mainTab" component={BottomTabs} />
      <Stack.Screen name="classCategory" component={ClassesCategory}/>
      <Stack.Screen name="instructors" component={AllInstructor}/>
      <Stack.Screen name="instructorBook" component={InstructorBookingScreen}/>
      <Stack.Screen name="instructorProf" component={InstructorProfile}/>
      <Stack.Screen name="termsAndCond" component={TermsAndConditions}/>
      <Stack.Screen name="bookingConfirm" component={BookingConfirmation}/>
      <Stack.Screen name="bookingDetail" component={BookingDetail}/>
      <Stack.Screen name="cancelBooking" component={CancelBooking}/>
      <Stack.Screen name="freezeBooking" component={FreezeBooking}/>
      <Stack.Screen name="languageSetting" component={LanguageSetting}/>
    </Stack.Navigator>
  );
}

export default MainNavigator;