import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "./Tabs";
import { Dimensions, View, StyleSheet} from "react-native";
import { TabParamList } from "../types/Navigation.type";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import tw from "../utils/tailwind";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";

const Tab = createBottomTabNavigator<TabParamList>();
const tabBarHeight = Dimensions.get("screen").height * 0.12;

// Tailwind styles
const styles = StyleSheet.create({
  circleBase : tw`w-10 h-10 rounded-full items-center justify-center`,
  containerBase : tw`items-center justify-center pb-2`,
  label: tw`w-20 text-center`,
  tabBar: tw`pt-sm pb-sm bg-background`,

})

const AnimatedIonicon = Animated.createAnimatedComponent(Ionicons);

const TabIcon = React.memo(function TabIcon({
  name,
  label,
  focused,
}: {
  name: string;
  label: string;
  focused: boolean;
}) {
  // Animate circle
  const circleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(focused ? 1 : 0.8) }],
    backgroundColor: withTiming(focused ? "#65736B" : "transparent"),
  }), [focused]);

  // Animate icon color
  const iconStyle = useAnimatedStyle(() => ({
    color: withTiming(focused ? "#FFFFFF" : "#65736B"),
  }), [focused]);
  
  const textWeight = React.useMemo(() => focused ? "bold" : "regular", [focused]);

  return (
    <View style={styles.containerBase}>
      <Animated.View style={[styles.circleBase, circleStyle]}>
        <AnimatedIonicon name={name as any} size={25} style={iconStyle} />
      </Animated.View>

      <$Text
        size="xs"
        color="main"
        weight={textWeight}
        style={styles.label}
      >
        {label}
      </$Text>
    </View>
  );
  }, (prevProps, nextProps) => {
  // Custom comparison for better performance
  return prevProps.focused === nextProps.focused && 
         prevProps.name === nextProps.name && 
         prevProps.label === nextProps.label;
});

export default function BottomTabs() {
   const tabBarButtonComponent = React.useCallback(({ children, onPress }: any) => (
    <$Button
      onPress={onPress}
      variant="tab"
    >
      {children}
    </$Button>
  ), []);

  const memoizedTabs = React.useMemo(() => tabs, []);
  return (
    <Tab.Navigator
      screenOptions={{
        animation:"fade",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          { height: tabBarHeight },
        ],
        lazy: true, // Enable lazy loading for better performance
      }}
      id={undefined}
    >
      {memoizedTabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name as keyof TabParamList}
          component={tab.component}
          options={{
            // Custom lightweight tab button
            tabBarButton: tabBarButtonComponent,
            tabBarIcon: ({ focused }) => (
              <TabIcon name={tab.icon} label={tab.label} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { tabs } from "./Tabs";
// import { Dimensions, StyleSheet } from "react-native";
// import { TabParamList } from "../types/Navigation.type";
// import { Ionicons } from "@expo/vector-icons";
// import tw from "../utils/tailwind";

// const Tab = createBottomTabNavigator<TabParamList>();
// const tabBarHeight = Dimensions.get("screen").height * 0.12;

// const styles = StyleSheet.create({
//   tabBar: tw`pt-sm pb-sm bg-background`,
// });

// export default function BottomTabs() {
//   const memoizedTabs = React.useMemo(() => tabs, []);

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         animation: "fade",
//         headerShown: false,
//         tabBarShowLabel: true, // default labels shown
//         tabBarStyle: [
//           styles.tabBar,
//           { height: tabBarHeight },
//         ],
//         lazy: true, // lazy load screens
//       }}
//       id={undefined}
//     >
//       {memoizedTabs.map((tab) => (
//         <Tab.Screen
//           key={tab.name}
//           name={tab.name as keyof TabParamList}
//           component={tab.component}
//           options={{
//             tabBarIcon: ({ focused, color, size }) => (
//               <Ionicons
//                 name={tab.icon as any}
//                 size={size ?? 24}
//                 color={focused ? "#65736B" : "gray"}
//               />
//             ),
//             tabBarLabel: tab.label, // let RN handle labels
//           }}
//         />
//       ))}
//     </Tab.Navigator>
//   );
// }
