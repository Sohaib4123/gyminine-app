import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClassesNavigatorParamList } from "../types/Navigation.type";
import ClassesScreen from "../screens/Classes.screen";
import ClassesDetail from "../screens/ClassesDetail.screen";
import MainNavigator from "./MainNavigator";

const Stack = createNativeStackNavigator<ClassesNavigatorParamList>();
const ClassesNavigator = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{ 
        headerShown: false,
        animation: 'fade',
      }}
      initialRouteName="ClassesList"
      id={undefined}
    >
      <Stack.Screen name="ClassesList" component={ClassesScreen} />
      <Stack.Screen name="ClassDetails" component={ClassesDetail} />
    </Stack.Navigator>
  );
};

export default ClassesNavigator;
