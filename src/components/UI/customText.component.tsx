import React from "react";
import { Text, TextProps, TextStyle, StyleProp } from "react-native";
import tw from "../../utils/tailwind"; // <-- your twrnc setup

type Props = TextProps & {
  children?: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  weight?: "regular" | "bold";
  color?: "main" | "background" | "light" | "dark" | "muted" | "error" | "success" | "glass" | "gray";
  style?: StyleProp<TextStyle>;
};

const $Text = ({
  children,
  size = "md",
  weight = "regular",
  color = "dark",
  style,
  ...rest
}: Props): React.ReactElement => {
  const sizeClass = `text-${size}`;       // e.g. text-md -> from your custom fontSize
  const weightClass = weight === "bold" ? "font-bold" : "font-regular"; // from fontFamily
  const colorClass = `text-${color}`;     // e.g. text-main -> from your colors

  return (
    <Text
      style={[
        tw`${sizeClass} ${weightClass} ${colorClass}`, // apply tailwind classes
        style, // allow extra overrides
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default $Text;
