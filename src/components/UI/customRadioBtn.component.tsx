// components/UI/CustomRadioButton.tsx
import React from "react";
import { View, TouchableOpacity, StyleSheet, ViewStyle, TextStyle } from "react-native";
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
    <View style={[styles.container, containerStyle]}>
      {heading && (
        <$Text style={headingStyle} size="xl" weight="bold">
          {heading}
        </$Text>
      )}

      {options.map((option) => (
        <TouchableOpacity
          key={String(option.value)}
          onPress={() => onSelect(option.value)}
          style={styles.optionRow}
        >
          <View style={[styles.radio, selected === option.value && styles.radioActive]}>
            {selected === option.value && <View style={styles.radioDot} />}
          </View>
          <$Text style={optionTextStyle} size="md" color="gray">
            {option.label}
          </$Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#666",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  radioActive: {
    borderColor: "#000",
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000",
  },
});

export default $RadioButton;
