// src/screens/NewAccountScreen.tsx
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../components/UI/header.component";
import { TextField } from "../components/UI/customTextField.component";
import { useNavigation } from "@react-navigation/native";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";
import theme from "../theme";

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Header title="Login" onBack={() => navigation.goBack()} />
      {/* Header Text */}
      <View style={styles.headerView}>
        <$Text size="lg" weight="bold" style={styles.headerText}>
          Enter your email and password
        </$Text>
        <View style={{flexDirection: 'row', marginBottom: theme.spacing.md}}>
          <TextField
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
          
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextField
            placeholder="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: theme.spacing.xxl,
          paddingHorizontal: theme.sizes.md
        }}
      >
        <$Text weight="regular" size="lg">
          Forgot Password?
        </$Text>
      </TouchableOpacity>
      {/* Floating button */}
      <$Button
        style={styles.button}
        onPress={() => {
          console.log({ email, password });
          navigation.navigate("homeModule");
        }}
      >
        <Ionicons name="arrow-forward" size={24} color={theme.colors.light} />
      </$Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 32,
    right: 32,
    backgroundColor: theme.colors.main,
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerView: {
    paddingHorizontal: 16,
    marginTop: 20
  },
  headerText: {
    marginBottom: 12,
  },
});
export default Login;
