// src/components/TextField.tsx
import React from "react";
import { TextInput, View, TextStyle, StyleProp, ViewStyle } from "react-native";
import theme from "../../theme";

interface TextFieldProps {
  key?: number; 
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: "default" | "numeric" | "number-pad" | "email-address" | "phone-pad";
  secureTextEntry?: boolean;
  maxLength?: number;
  placeholderTextColor?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
      key,
      placeholder,
      value,
      onChangeText,
      containerStyle,
      inputStyle,
      keyboardType = "default",
      secureTextEntry = false,
      maxLength,
      placeholderTextColor = theme.colors.muted,
    }) => {
  return (
    <View style={[{ flex: 1, marginRight: theme.spacing.sm }, containerStyle]}>
        <TextInput
          key={key}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[
            {
              borderBottomWidth: 1,
              borderBottomColor: theme.colors.gray,
              fontSize: theme.sizes.lg,
              fontFamily: theme.fonts.regular,
              paddingVertical: theme.spacing.xs,
            },
            inputStyle,
          ]}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
        />
      </View>
  );
};
