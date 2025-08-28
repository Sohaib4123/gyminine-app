// import React from "react";
// import {
//   Pressable,
//   StyleSheet,
//   ViewStyle,
//   StyleProp,
//   View,
//   ActivityIndicator,
// } from "react-native";
// import theme from "../../theme";

// type ButtonProps = {
//   children: React.ReactNode;
//   onPress?: () => void;
//   disabled?: boolean;
//   loading?: boolean;
//   style?: StyleProp<ViewStyle>;
// };

// const $Button = ({
//   children,
//   onPress,
//   disabled = false,
//   loading = false,
//   style,
// }: ButtonProps): React.ReactElement => {
//   const isDisabled = disabled || loading;

//   return (
//     <Pressable
//       onPress={onPress}
//       disabled={isDisabled}
//       style={({ pressed }) => [
//         styles.button,
//         isDisabled && styles.disabled,
//         pressed && !isDisabled && styles.pressed,
//         style,
//       ]}
//     >
//       {loading ? (
//         <ActivityIndicator color={theme.colors.light} />
//       ) : (
//         // If use this commented code, then you have to put children in fragment(<>....</>)
//         // <View style={styles.content}>{children}</View>
//         <View
//           style={[
//             styles.content,
//             Array.isArray(children) && children.length > 1 && { gap: 8 },
//           ]}
//         >
//           {children}
//         </View>
//       )}
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: theme.colors.main,
//     paddingVertical: theme.spacing.sm,
//     paddingHorizontal: theme.spacing.md,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     flexDirection: "row",
//   },
//   pressed: {
//     opacity: 0.7,
//   },
//   disabled: {
//     backgroundColor: theme.colors.muted,
//   },
//   content: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     gap: 8,
//   },
// });

// export default $Button;

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
