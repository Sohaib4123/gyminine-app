// src/screens/NewAccountScreen.tsx
import React, { JSX, useState } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/UI/header.component";
import { TextField } from "../../components/UI/customTextField.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../../types/Navigation.type";
import $Button from "../../components/UI/customButton.component";
import $Text from "../../components/UI/customText.component";
import tw from "../../utils/tailwind";

const EnterEmail = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
  const [email, setEmail] = useState("");

  return (
    <View style={tw`flex-1 bg-background`}>
      {/* Top header */}
      <Header title="New Account" onBack={() => navigation.goBack()} />

      {/* Header text + field */}
      <View style={tw`px-4 mt-5`}>
        <$Text size="lg" weight="bold" style={tw`mb-3`}>
          Enter your email address
        </$Text>

        <View style={tw`flex-row`}>
          <TextField
            placeholder="me@gmail.com"
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>

      {/* Floating button */}
      <$Button
        style={tw`absolute bottom-8 right-8 bg-main w-16 h-16 rounded-full items-center justify-center shadow-lg`}
        onPress={() => {
          console.log({ email });
          navigation.navigate("Enumber");
        }}
      >
        <Ionicons name="arrow-forward" size={24} color={tw.color('white')} />
      </$Button>
    </View>
  );
};

export default EnterEmail;
