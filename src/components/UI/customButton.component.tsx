import React from "react";
import {
  Pressable,
  ViewStyle,
  StyleProp,
  View,
  ActivityIndicator,
} from "react-native";
import tw from "../../utils/tailwind";

// customButton.component.tsx
type ButtonProps = {
  children: React.ReactNode;
  onPress?: (event:any) => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  variant?: "solid" | "icon" | "tab"; // NEW
};

const $Button = ({
  children,
  onPress,
  disabled = false,
  loading = false,
  style,
  variant = "solid",
}: ButtonProps): React.ReactElement => {
  const isDisabled = disabled || loading;

  const baseStyle =
    variant === "tab"
    ? tw`flex-1 rounded-none bg-transparent`
    : variant === "solid"
    ? tw`bg-main px-md py-sm rounded-lg flex-row items-center justify-center`
    : tw`p-2 rounded-full`;
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        baseStyle,
        isDisabled && tw`bg-muted`,
        pressed && !isDisabled && tw`opacity-70`,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={tw.color("light")} />
      ) : (
        <View style={tw`items-center justify-center`}>
          {children}
        </View>
      )}
    </Pressable>
  );
};

export default $Button;
