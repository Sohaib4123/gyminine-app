// src/components/Header.tsx
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../theme";
import $Text from "./customText.component";
import $Button from "./customButton.component";

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <View style={{ backgroundColor: theme.colors.main, flexDirection: "row", alignItems: "center", paddingVertical: theme.sizes.md , paddingHorizontal: theme.sizes.xs, paddingTop: theme.spacing.xl}}>
      <$Button
        onPress={onBack}
        style={{ marginRight: theme.spacing.sm }}
      >
        <Ionicons name="arrow-back" size={24} color={theme.colors.background} />
      </$Button>
      <$Text
        weight="bold"
        size="xl"
        color="light"
      >
        {title}
      </$Text>
    </View>
  );
};
