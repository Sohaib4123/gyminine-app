import React from "react";
import { View, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import tw from "../../utils/tailwind";
import $Text from "./customText.component";

export interface RadioOption<T> {
  label: string;
  value: T;
}

interface CustomRadioButtonProps<T> {
  options: RadioOption<T>[];
  selected: T;
  onSelect: (value: T) => void;
  heading?: string;
  containerStyle?: ViewStyle;
  headingStyle?: TextStyle;
  optionTextStyle?: TextStyle;
}

function $RadioButton<T extends string | number>({
  options,
  selected,
  onSelect,
  heading,
  containerStyle,
  headingStyle,
  optionTextStyle,
}: CustomRadioButtonProps<T>) {
  return (
    <View style={[tw`mt-md`, containerStyle]}>
      {heading && (
        <$Text
          size="xl"
          weight="bold"
          style={[tw`mb-sm`, headingStyle]}
        >
          {heading}
        </$Text>
      )}

      {options.map((option) => {
        const isActive = selected === option.value;
        return (
          <TouchableOpacity
            key={String(option.value)}
            onPress={() => onSelect(option.value)}
            style={tw`flex-row items-center mb-2`}
          >
            {/* Outer Circle */}
            <View
              style={[
                tw`w-5 h-5 rounded-full border border-gray items-center justify-center mr-2`,
                isActive && tw`border-main`,
              ]}
            >
              {/* Inner Dot if Active */}
              {isActive && <View style={tw`w-2.5 h-2.5 rounded-full bg-main`} />}
            </View>

            {/* Label */}
            <$Text size="md" color="dark" style={optionTextStyle}>
              {option.label}
            </$Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default $RadioButton;
