// src/components/PhoneInput.tsx
import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import $Text from "./customText.component";
import $Button from "./customButton.component";
import { CountryPicker } from "react-native-country-codes-picker";
import { TextField } from "./customTextField.component";
import tw from "../../utils/tailwind";

interface PhoneInputProps {
  phoneNumber: string;
  onChangePhone: (phone: string) => void;
}

export const PhoneInput = ({
  phoneNumber,
  onChangePhone,
}: PhoneInputProps): React.ReactElement => {
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

  const height = Dimensions.get("window").height;

  return (
    <View>
      {/* Phone field row */}
      <View style={tw`flex-row items-center`}>
        <$Button
          style={tw`flex-row items-center mr-3 px-2 py-1 rounded-lg bg-glass`}
          onPress={() => setShowPicker(true)}
        >
          <$Text style={tw`text-2xl mr-1`}>{selectedCountry.flag}</$Text>
          <$Text style={tw`text-base text-gray-800`}>
            {selectedCountry.dial_code}
          </$Text>
        </$Button>

        <TextField
          inputStyle={tw`flex-1 border-b border-gray-300 py-1 text-dark`}
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={onChangePhone}
        />
      </View>

      {/* Country Picker Modal */}
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
            marginTop: height * 0.4,
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
