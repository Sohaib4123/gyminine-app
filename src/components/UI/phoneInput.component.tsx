// src/components/PhoneInput.tsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions
} from "react-native";
import $Text from "./customText.component";
import $Button from "./customButton.component";
import { CountryPicker } from "react-native-country-codes-picker";
import { TextField } from "./customTextField.component";
import theme from "../../theme";

interface PhoneInputProps {
  phoneNumber: string;
  onChangePhone: (phone: string) => void;
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  phoneNumber,
  onChangePhone,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<{
    flag: string;
    dial_code: string;
    name: string;
  }>({
    flag: "🇸🇦",
    dial_code: "+966",
    name: "Saudi Arabia",
  });
  const height = Dimensions.get('window').height

  return (
    <View>
      <View style={styles.container}>
        <$Button
          style={styles.flagContainer}
          onPress={() => setShowPicker(true)}
        >
          <$Text style={styles.flag}>{selectedCountry.flag}</$Text>
          <$Text style={styles.code}>{selectedCountry.dial_code}</$Text>
        </$Button>

        <TextField
          inputStyle={styles.input}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={onChangePhone}
        />
      </View>

      <CountryPicker
  show={showPicker}
  inputPlaceholder="Search country"
  pickerButtonOnPress={(item) => {
    setSelectedCountry({
      flag: item.flag,
      dial_code: item.dial_code,
      name: item.name.en,
    });
    setShowPicker(false);
  }}
  lang="en"
  style={{
    modal: {
      marginTop: height * 0.4, // 🔹 Push modal lower (space from top)
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      backgroundColor: "#fff",
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingVertical: 8,
      paddingHorizontal: 12,
      fontSize: 16,
      margin: 10,
    },
    countryButtonStyles: {
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  }}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
    backgroundColor: theme.colors.glass
  },
  flag: {
    paddingTop: 4,
    fontSize: 28,
    marginRight: 6,
  },
  code: {
    fontSize: 16,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 4,
  },
});
