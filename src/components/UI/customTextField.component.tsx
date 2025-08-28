// // src/components/TextField.tsx
// import React from "react";
// import { TextInput, View, TextStyle, StyleProp, ViewStyle } from "react-native";
// import theme from "../../theme";

// interface TextFieldProps {
//   key?: number; 
//   placeholder?: string;
//   value: string;
//   onChangeText: (text: string) => void;
//   containerStyle?: StyleProp<ViewStyle>;
//   inputStyle?: StyleProp<TextStyle>;
//   keyboardType?: "default" | "numeric" | "number-pad" | "email-address" | "phone-pad";
//   secureTextEntry?: boolean;
//   maxLength?: number;
//   placeholderTextColor?: string;
// }

// export const TextField = ({
//       key,
//       placeholder,
//       value,
//       onChangeText,
//       containerStyle,
//       inputStyle,
//       keyboardType = "default",
//       secureTextEntry = false,
//       maxLength,
//       placeholderTextColor = theme.colors.muted,
//     }: TextFieldProps): React.ReactElement => {
//   return (
//     <View style={[{ flex: 1, marginRight: theme.spacing.sm }, containerStyle]}>
//         <TextInput
//           key={key}
//           placeholder={placeholder}
//           value={value}
//           onChangeText={onChangeText}
//           style={[
//             {
//               borderBottomWidth: 1,
//               borderBottomColor: theme.colors.light_gray,
//               fontSize: theme.sizes.lg,
//               fontFamily: theme.fonts.regular,
//               paddingVertical: theme.spacing.xs,
//             },
//             inputStyle,
//           ]}
//           placeholderTextColor={placeholderTextColor}
//           keyboardType={keyboardType}
//           secureTextEntry={secureTextEntry}
//           maxLength={maxLength}
//         />
//       </View>
//   );
// };

// src/components/TextField.tsx
import React from "react";
import { TextInput, View, TextStyle, StyleProp, ViewStyle } from "react-native";
import tw from "../../utils/tailwind";

interface TextFieldProps {
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

export const TextField = ({
  placeholder,
  value,
  onChangeText,
  containerStyle,
  inputStyle,
  keyboardType = "default",
  secureTextEntry = false,
  maxLength,
  placeholderTextColor = tw.color("gray-400"),
}: TextFieldProps): React.ReactElement => {
  return (
    <View style={[tw`flex-1 mr-2`, containerStyle]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={[
          tw`border-b border-light_gray text-lg py-1 font-normal text-light_gray`,
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
