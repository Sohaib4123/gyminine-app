// src/screens/OtpScreen.tsx
import React, { useState, useRef } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Header } from "../../components/UI/header.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../../types/Navigation.type";
import $Text from "../../components/UI/customText.component";
import $Button from "../../components/UI/customButton.component";
import tw from "../../utils/tailwind";

export default function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<TextInput[]>([]);
  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();

  const handleChange = (value: string, index: number) => {
    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
    if (value && index < otp.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      if (otp[index]) {
        const updated = [...otp];
        updated[index] = "";
        setOtp(updated);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-background`}>
      {/* Header */}
      <Header title="New Account" onBack={() => navigation.goBack()} />

      {/* Instruction */}
      <View style={tw`flex-row items-center mx-5 mt-5 mb-2 gap-2`}>
        <$Text weight="bold" style={tw`flex-1 text-lg`}>
          Enter the 4-digit code sent to your email & +9661234567
        </$Text>
        <TouchableOpacity onPress={() => navigation.navigate("Enumber")}>
          <MaterialIcons name="edit" size={20} color="red" />
        </TouchableOpacity>
      </View>

      {/* OTP Inputs */}
      <View style={tw`flex-row justify-evenly my-8`}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputsRef.current[index] = ref;
            }}
            style={tw`w-12 border-b border-muted text-xl text-center py-1`}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      {/* Bottom Row */}
      <View style={tw`mt-auto px-6 pb-8 flex-row items-center justify-between`}>
        <TouchableOpacity>
          <$Text style={tw`font-bold text-base mb-4`}>Resend the Code</$Text>
        </TouchableOpacity>

        <$Button
          style={tw`absolute bottom-8 right-8 bg-main w-16 h-16 rounded-full justify-center items-center shadow-lg`}
          onPress={() => navigation.navigate("main")}
        >
          <Ionicons name="arrow-forward" size={28} color="#fff" />
        </$Button>
      </View>
    </SafeAreaView>
  );
}
