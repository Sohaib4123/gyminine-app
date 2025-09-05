import React, {Suspense} from 'react'
import { View, ActivityIndicator } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthNavigatorParamList } from '../types/Navigation.type';
import MainNavigator from './MainNavigator';
import Visit from '../screens/Visit.screen';
import Login from '../screens/Login.screen';
import tw from '../utils/tailwind';

// Lazy load screens that aren\'t immediately needed
const EnterName = React.lazy(() => import('../screens/NewAccount/EnterName.screen'));
const EnterEmail = React.lazy(() => import('../screens/NewAccount/EnterEmail.screen'));
const EnterNumber = React.lazy(() => import('../screens/NewAccount/EnterNumber.screen'));
const OTP = React.lazy(() => import('../screens/NewAccount/OTP.screen'));

// Optimized loading component
const AuthLoadingScreen = React.memo(() => (
  <View style={tw`flex-1 items-center justify-center bg-background`}>
    <ActivityIndicator size="large" color="#65736B" />
  </View>
));
AuthLoadingScreen.displayName = 'AuthLoadingScreen';

// HOC for lazy screen wrapper
const withAuthSuspense = (Component: React.LazyExoticComponent<any>) => {
  return React.memo((props: any) => (
    <Suspense fallback={<AuthLoadingScreen />}>
      <Component {...props} />
    </Suspense>
  ));
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();
const AuthenticationNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        gestureEnabled: true,
        freezeOnBlur: true, // Reduce memory usage
      }} 
      initialRouteName='visit' 
      id={undefined}
    >
      <Stack.Screen name="visit" component={Visit} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Ename" component={withAuthSuspense(EnterName)} />
      <Stack.Screen name="Enumber" component={withAuthSuspense(EnterNumber)} />
      <Stack.Screen name="Eemail" component={withAuthSuspense(EnterEmail)} />
      <Stack.Screen name="otp" component={withAuthSuspense(OTP)} />
      <Stack.Screen name="main" component={MainNavigator} />
    </Stack.Navigator>
  );
}

export default AuthenticationNavigator;