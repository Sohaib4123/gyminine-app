import React, { Suspense } from "react";
import { View, ActivityIndicator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/Onboarding.screen";
import tw from "../utils/tailwind";
import { RootParamList } from "../types/Navigation.type";
import { NavigationProp } from "@react-navigation/native";

// Lazy load AuthenticationNavigator to reduce initial bundle
const AuthenticationNavigator = React.lazy(
  () => import("./AuthenticationNavigator")
);
// Root loading screen
const RootLoadingScreen = React.memo(() => (
  <View style={tw`flex-1 items-center justify-center bg-background`}>
    <ActivityIndicator size="large" color="#65736B" />
  </View>
));
RootLoadingScreen.displayName = "RootLoadingScreen";
const Stack = createNativeStackNavigator<RootParamList>();

const AuthScreenWrapper = () => (
  <Suspense fallback={<RootLoadingScreen />}>
    <AuthenticationNavigator />
  </Suspense>
);

const RootNavigater = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade",
        gestureEnabled: true,
      }}
      initialRouteName="onboard"
      id={undefined}
    >
      <Stack.Screen name="onboard" component={Onboarding} />
      <Stack.Screen
        name="auth"
        component={AuthScreenWrapper}
      />
    </Stack.Navigator>
  );
};

export default RootNavigater;
