import React from "react";
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import tw from "../utils/tailwind";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { editNavigatorParamList, MainNavigatorParamList } from "../types/Navigation.type";

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp<editNavigatorParamList>>()
  const menuItems = [
    { id: 1, label: "edit profile", icon: "create-outline", color: "black", action: () => navigation.navigate("Ename")},
    {
      id: 2,
      label: "language settings",
      icon: "language",
      color: "black",
      material: true,
      action: () => navigation.getParent<NavigationProp<MainNavigatorParamList>>().navigate('languageSetting')
    },
    {
      id: 3,
      label: "delete account",
      icon: "person-remove-outline",
      color: "red",
      action: () => {}
    },
    { id: 4, label: "sign out", icon: "log-out-outline", color: "black", action: () => {} },
  ];
  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={tw`flex-1 bg-background`}
      resizeMode="cover"
    >
      <View style={tw`flex-1 py-15`}>
        {/* Top Section */}
        <ScrollView contentContainerStyle={tw`px-6 pb-8`}>
          <View style={tw`items-center mt-12`}>
            <Image
              source={require("../assets/images/logo.png")}
              style={tw`w-32 h-32 rounded-full`}
              resizeMode="contain"
            />
            <$Text size="xl" weight="bold" style={tw`mt-4`}>
              UserName
            </$Text>
            <$Text size="sm" style={tw`text-gray-500 mt-1`}>
              Email: username@gmail.com
            </$Text>
          </View>

          {/* Divider */}
          <View style={tw`h-px bg-gray-200 mt-8`} />

          {/* Menu Items */}
          {menuItems.map((item, idx) => (
            <$Button
              key={item.id}
              style={tw`flex-row items-center justify-between py-4 border-b border-gray-200 bg-glass`}
              onPress={item.action}
            >
              <View style={tw`flex-row items-center`}>
                {item.material ? (
                  <MaterialIcons
                    name={
                      item.icon as React.ComponentProps<
                        typeof MaterialIcons
                      >["name"]
                    }
                    size={22}
                    color={item.color}
                    style={tw`mr-4`}
                  />
                ) : (
                  <Ionicons
                    name={item.icon as any}
                    size={22}
                    color={item.color}
                    style={tw`mr-4`}
                  />
                )}
                <$Text
                  size="md"
                  style={tw`${
                    item.color === "red" ? "text-red-500" : "text-black"
                  }`}
                >
                  {item.label}
                </$Text>
              </View>
            </$Button>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}
