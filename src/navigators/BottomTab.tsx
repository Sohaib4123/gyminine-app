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
    transform: [{ scale: withTiming(focused ? 1 : 0.8, { duration: 180 }) }],
    backgroundColor: withTiming(focused ? "#65736B" : "transparent"), // main
  }), [focused]);

  // Animate icon color
  const iconStyle = useAnimatedStyle(() => ({
    color: withTiming(focused ? "#FFFFFF" : "#65736B", { duration: 150 }), // bg vs main
  }), [focused]);

  return (
    <View style={styles.containerBase}>
      {/* Animated Circle */}
      <Animated.View style={[styles.circleBase, circleStyle]}>
        <AnimatedIonicon name={name as any} size={25} style={iconStyle} />
      </Animated.View>

      {/* Label */}
      <$Text
        size="xs"
        color="main"
        weight={focused ? "bold" : "regular"}
        style={styles.label}
      >
        {label}
      </$Text>
    </View>
  );
});

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          styles.tabBar,
          { height: tabBarHeight },
        ],
      }}
      id={undefined}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name as keyof TabParamList}
          component={tab.component}
          options={{
            // Custom lightweight tab button
            tabBarButton: ({ children, onPress }) => (
              <$Button
                onPress={onPress}
                variant="tab"
              >
                {children}
              </$Button>
            ),
            tabBarIcon: ({ focused }) => (
              <TabIcon name={tab.icon} label={tab.label} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
