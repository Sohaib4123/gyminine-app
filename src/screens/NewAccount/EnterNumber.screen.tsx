// src/screens/NewAccountPhoneScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Header } from "../../components/UI/header.component";
import { PhoneInput } from "../../components/UI/phoneInput.component";
import { useNavigation } from "@react-navigation/native"
import $Text from "../../components/UI/customText.component";
import $Button from "../../components/UI/customButton.component";
import theme from "../../theme";

const EnterNumber: React.FC = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <View style={styles.container}>
      <Header title="New Account" onBack={() => navigation.goBack()} />

      <View style={styles.headerView}>
        <$Text size='lg' weight='bold' style={styles.headerText}>
          Enter your mobile number
        </$Text>
        <PhoneInput phoneNumber={phoneNumber} onChangePhone={setPhoneNumber} />
      </View>

      {/* Floating button */}
       <$Button
        style={styles.button}
        onPress={() => {
          console.log({ phoneNumber });
          navigation.navigate("otp");
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
    marginTop: 20,
  },
  headerText: {
    marginBottom: 12,
  },
});

export default EnterNumber;