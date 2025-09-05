import React, {Suspense} from 'react'
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTab';
import { MainNavigatorParamList } from '../types/Navigation.type';
import tw from '../utils/tailwind';

// Lazy load heavy screens to reduce initial bundle size
const ClassesCategory = React.lazy(() => import('../screens/ClassesCategory.screen'));
const AllInstructor = React.lazy(() => import('../screens/Instructor.screen'));
const InstructorBookingScreen = React.lazy(() => import('../screens/InstructorBooking.screen'));
const InstructorProfile = React.lazy(() => import('../screens/InstructorProfile.screen'));
const TermsAndConditions = React.lazy(() => import('../screens/TermsAndCondition.screen'));
const BookingConfirmation = React.lazy(() => import('../screens/BookingConfirmation.screen'));
const BookingDetail = React.lazy(() => import('../screens/BookingDetails.screen'));
const CancelBooking = React.lazy(() => import('../screens/CancelBooking.screen'));
const FreezeBooking = React.lazy(() => import('../screens/FreezeBooking.screen'));
const LanguageSetting = React.lazy(() => import('../screens/LanguageSetting.screen'));
const DeleteAccount = React.lazy(() => import('../screens/DeleteAccount.screen'));

// Optimized loading component for lazy screens
const LoadingScreen = React.memo(() => (
  <View style={tw`flex-1 items-center justify-center bg-background`}>
    <ActivityIndicator size="large" color="#65736B" />
  </View>
));
LoadingScreen.displayName = 'LoadingScreen';

// HOC for lazy screen wrapper
const withSuspense = (Component: React.LazyExoticComponent<any>) => {
  return React.memo((props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  ));
};

const Stack = createNativeStackNavigator<MainNavigatorParamList>();
const MainNavigator = (): React.ReactElement => {
  return (
   <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        // Optimize memory usage
        animation: 'fade',
        gestureEnabled: true,
        // Reduce memory footprint
        freezeOnBlur: true,
      }} 
      initialRouteName='mainTab' 
      id={undefined}
    >
      <Stack.Screen name="mainTab" component={BottomTabs} />
      <Stack.Screen name="classCategory" component={withSuspense(ClassesCategory)}/>
      <Stack.Screen name="instructors" component={withSuspense(AllInstructor)}/>
      <Stack.Screen name="instructorBook" component={withSuspense(InstructorBookingScreen)}/>
      <Stack.Screen name="instructorProf" component={withSuspense(InstructorProfile)}/>
      <Stack.Screen name="termsAndCond" component={withSuspense(TermsAndConditions)}/>
      <Stack.Screen name="bookingConfirm" component={withSuspense(BookingConfirmation)}/>
      <Stack.Screen name="bookingDetail" component={withSuspense(BookingDetail)}/>
      <Stack.Screen name="cancelBooking" component={withSuspense(CancelBooking)}/>
      <Stack.Screen name="freezeBooking" component={withSuspense(FreezeBooking)}/>
      <Stack.Screen name="languageSetting" component={withSuspense(LanguageSetting)}/>
      <Stack.Screen name="deleteAccount" component={withSuspense(DeleteAccount)}/>
    </Stack.Navigator>
  );
}

export default MainNavigator;