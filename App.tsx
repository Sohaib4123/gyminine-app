import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigater from "./src/navigators/RootNavigator";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { useFonts } from "expo-font";

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

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
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer onReady={onLayoutRootView}>
        <RootNavigater />
      </NavigationContainer>
    </Provider>
  );
}
