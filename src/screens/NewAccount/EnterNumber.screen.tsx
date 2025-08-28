// src/screens/NewAccountPhoneScreen.tsx
import React, { JSX, useState } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/UI/header.component";
import { PhoneInput } from "../../components/UI/phoneInput.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../../types/Navigation.type";
import $Text from "../../components/UI/customText.component";
import $Button from "../../components/UI/customButton.component";
import tw from "../../utils/tailwind";

const EnterNumber = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={tw`flex-1 bg-background`}>
      {/* Header */}
      <Header title="New Account" onBack={() => navigation.goBack()} />

      {/* Content */}
      <View style={tw`px-4 mt-5`}>
        <$Text size="lg" weight="bold" style={tw`mb-3`}>
          Enter your mobile number
        </$Text>
        <PhoneInput phoneNumber={phoneNumber} onChangePhone={setPhoneNumber} />
      </View>

      {/* Floating Button */}
      <$Button
        style={tw`absolute bottom-8 right-8 bg-main w-16 h-16 rounded-full items-center justify-center shadow-lg`}
        onPress={() => {
          console.log({ phoneNumber });
          navigation.navigate("otp");
        }}
      >
        <Ionicons name="arrow-forward" size={24} color={tw.color('white')} />
      </$Button>
    </View>
  );
};

export default EnterNumber;
