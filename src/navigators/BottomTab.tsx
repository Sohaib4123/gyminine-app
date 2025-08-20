// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import HomeScreen from "../screens/Home.screen";
// import { ClassesScreen } from "../screens/Classes.screen";
// import { MembershipsScreen } from "../screens/Membership.screen";
// import { BookingsScreen } from "../screens/Booking.screen";
// import { ProfileScreen } from "../screens/Profile.screen";
// import { Ionicons } from "@expo/vector-icons";

// const Tab = createBottomTabNavigator();

// export default function BottomTabs() {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }} id={undefined} initialRouteName="Home">
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Classes"
//         component={ClassesScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="fitness" size={size} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Memberships"
//         component={MembershipsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="card" size={size} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Bookings"
//         component={BookingsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="calendar" size={size} color={color} />,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabs } from "./Tabs";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
  const height = Dimensions.get('screen').height;

function CustomTabButton({ children, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {children}
    </TouchableOpacity>
  );
}

function TabIcon({ name, label, focused }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", paddingBottom: height * 0.05}}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: focused ? "#65736Bff" : "transparent",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Ionicons
          name={name}
          size={25}
          color={focused ? "#fff" : "#65736Bff"}
        />
      </View>
      <Text
        style={{
          width: 75,
          textAlign: "center",
          fontSize: 12,
          color: "#65736Bff",
          fontWeight: focused ? "600" : "400",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

export default function BottomTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { height: height * 0.12, paddingBottom: 5, paddingTop: 5 },
      }}
      id={undefined}
    >
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarButton: ({children, onPress}) => <CustomTabButton onPress={onPress} children={children}/>,
            tabBarIcon: ({ focused }) => (
              <TabIcon name={tab.icon} label={tab.label} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
