import React, { useCallback, Suspense } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { useFonts } from "expo-font";
import { View, ActivityIndicator } from "react-native";
import tw from "./src/utils/tailwind";

// Lazy load RootNavigator to reduce initial bundle size
const RootNavigater = React.lazy(() => import("./src/navigators/RootNavigator"));

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// App loading fallback component
const AppLoadingScreen = React.memo(() => (
  <View style={tw`flex-1 items-center justify-center bg-background`}>
    <ActivityIndicator size="large" color="#65736B" />
  </View>
));
AppLoadingScreen.displayName = 'AppLoadingScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Bahij-Palatino-Regular": require("./src/assets/fonts/bahij-palatino-sans-arabic-regular.ttf"),
    "Bahij-Palatino-Bold": require("./src/assets/fonts/bahij-palatino-sans-arabic-bold.ttf"),
  });

  // Hide splash screen only after fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <AppLoadingScreen />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        <RootNavigater />
      </NavigationContainer>
    </Provider>
  );
}
