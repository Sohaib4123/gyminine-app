import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";
import tw from "../utils/tailwind";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";

export default function BookingConfirmation() {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={tw`flex-1 bg-background`}
      resizeMode="cover"
    >
      <View style={tw`flex-1 px-lg`}>
        {/* Center content */}
        <View style={tw`flex-1 items-center justify-center pt-md`}>
          {/* Title */}
          <Text style={tw`text-main text-[60px] font-bold mt-sm mb-xxl`}>
            Thank You
          </Text>

          {/* Description */}
          <$Text style={tw`text-main text-lg text-center leading-lg px-2 mb-10`}>
            We Will Send A Confirmation Email With All The Booking Details To
            Your Email “example@gmail.com”
          </$Text>
        </View>

        {/* Button group */}
        <View style={tw`w-full mb-xl`}>
          <$Button
            onPress={() =>
              navigation.navigate("mainTab", { screen: "Bookings" })
            }
            style={tw`bg-main py-md rounded-lg items-center`}
          >
            <$Text color="light" size="lg" weight="bold">
              Back to Bookings
            </$Text>
          </$Button>
        </View>
      </View>
    </ImageBackground>
  );
}
