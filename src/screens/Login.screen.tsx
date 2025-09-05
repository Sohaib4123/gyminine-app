// src/screens/NewAccountScreen.tsx
import React, { JSX, useState, useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components/UI/header.component";
import { TextField } from "../components/UI/customTextField.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthNavigatorParamList } from "../types/Navigation.type";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";
import tw from "../utils/tailwind";

const Login = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<AuthNavigatorParamList>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleLogin = useCallback(() => {
    console.log({ email, password });
    navigation.navigate("main");
  }, [email, password, navigation]);

  return (
    <View style={tw`flex-1 bg-background`}>
      {/* Header */}
      <Header title="Login" onBack={handleGoBack} />

      {/* Header Text + Inputs */}
      <View style={tw`px-4 mt-5`}>
        <$Text size="lg" weight="bold" style={tw`mb-3`}>
          Enter your email and password
        </$Text>

        <View style={tw`flex-row mb-4`}>
          <TextField
            inputStyle={tw`text-dark`}
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={tw`flex-row`}>
          <TextField
            inputStyle={tw`text-dark`}
            placeholder="password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={tw`flex-row mt-12 px-4`}>
        <$Text weight="regular" size="lg">
          Forgot Password?
        </$Text>
      </TouchableOpacity>

      {/* Floating Button */}
      <$Button
        style={tw`absolute bottom-8 right-8 bg-main w-16 h-16 rounded-full items-center justify-center shadow-lg`}
        onPress={handleLogin}
      >
        <Ionicons name="arrow-forward" size={24} color="#fff" />
      </$Button>
    </View>
  );
};

export default Login;
