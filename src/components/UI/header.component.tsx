// // src/components/Header.tsx
// import React from "react";
// import { View } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import $Text from "./customText.component";
// import $Button from "./customButton.component";
// import tw from "../../utils/tailwind";

// interface HeaderProps {
//   title: string;
//   onBack?: () => void;
// }

// export const Header = ({ title, onBack }: HeaderProps): React.ReactElement => {
//   return (
//     <View style={tw`bg-main flex-row items-center px-4 pt-6 pb-3`}>
//       {onBack && (
//         <$Button variant="icon" onPress={onBack} style={tw`mr-3`}>
//           <Ionicons name="arrow-back" size={24} color="#fff" />
//         </$Button>
//       )}
//       <$Text weight="bold" size="xl" color="light">
//         {title}
//       </$Text>
//     </View>
//   );
// };


// src/components/Header.tsx
import React, { ReactNode } from "react";
import { View, ViewStyle, StyleProp } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import $Text from "./customText.component";
import $Button from "./customButton.component";
import tw from "../../utils/tailwind";

interface HeaderProps {
  title: string;
  onBack?: () => void;
  rightChildren?: ReactNode; // 👈 Flexible content on the far right
  style?: StyleProp<ViewStyle>; // 👈 Accept external style
}

export const Header = ({
  title,
  onBack,
  rightChildren,
  style,
}: HeaderProps): React.ReactElement => {
  return (
    <View
      style={[tw`bg-main flex-row items-center justify-between px-4 pt-6 pb-3`, style]}
    >
      {/* Left Section */}
      <View style={tw`flex-row items-center`}>
        {onBack && (
          <$Button variant="icon" onPress={onBack} style={tw`mr-3`}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </$Button>
        )}
        <$Text weight="bold" size="xl" color="light">
          {title}
        </$Text>
      </View>

      {/* Right Section */}
      {rightChildren && <View>{rightChildren}</View>}
    </View>
  );
};
