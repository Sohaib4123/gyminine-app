import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Header } from "../../components/UI/header.component";
import { useNavigation } from "@react-navigation/native";
import $Text from "../../components/UI/customText.component";
import $Button from "../../components/UI/customButton.component";
import theme from "../../theme";

export default function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<TextInput[]>([]);
  const navigation = useNavigation();
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
        // Just clear the current field
        const updated = [...otp];
        updated[index] = "";
        setOtp(updated);
      } else if (index > 0) {
        // Move to previous field
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="New Account" onBack={() => navigation.goBack()} />

      {/* Instruction */}
      <View style={styles.instructionContainer}>
        <$Text weight="bold" style={styles.instruction}>
          Enter the 4-digit code sent to your email & +9661234567
        </$Text>
        <TouchableOpacity onPress={() => navigation.navigate("Enumber")}>
          <MaterialIcons name="edit" size={20} color="red" />
        </TouchableOpacity>
      </View>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => {
              if (ref) inputsRef.current[index] = ref;
            }}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
          />
        ))}
      </View>

      <View style={styles.bottomRow}>
        {/* Resend Code */}
        <TouchableOpacity style={{marginBottom: theme.spacing.md}}>
          <$Text style={styles.resend}>Resend the Code</$Text>
        </TouchableOpacity>

        {/* Floating Next Button */}
        <$Button style={styles.nextButton}>
          <Ionicons name="arrow-forward" size={28} color="#fff" />
        </$Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.main, // top bar color
    padding: 16,
  },
  headerTitle: {
    color: theme.colors.light,
    fontSize: 18,
    marginLeft: 12,
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
    gap: 8,
  },
  instruction: {
    fontSize: theme.sizes.lg,
    flex: 1,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 30,
  },
  otpInput: {
    width: 50,
    borderBottomWidth: 1,
    borderColor: "#aaa",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 4,
  },
  resend: {
    fontWeight: "700",
    fontSize: 16,
  },
  nextButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#6B7566",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },
  bottomRow: {
    marginTop: "auto",
    paddingHorizontal: 23,
    paddingBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
