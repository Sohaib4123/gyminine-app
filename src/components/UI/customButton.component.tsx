// // components/ui/Button.tsx

// import React from 'react';
// import {
//   Pressable,
//   Text,
//   StyleSheet,
//   GestureResponderEvent,
//   ViewStyle,
//   TextStyle,
//   ActivityIndicator,
// } from 'react-native';
// import theme from '../../theme';

// type ButtonProps = {
//   title: string;
//   onPress?: (event: GestureResponderEvent) => void;
//   disabled?: boolean;
//   loading?: boolean;
//   style?: ViewStyle;
//   textStyle?: TextStyle;
// };

// const $Button: React.FC<ButtonProps> = ({
//   title,
//   onPress,
//   disabled = false,
//   loading = false,
//   style,
//   textStyle,
// }) => {
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
//         <ActivityIndicator color={theme.colors.text_light} />
//       ) : (
//         <Text style={[styles.text, textStyle]}>{title}</Text>
//       )}
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: theme.colors.main,
//     paddingVertical: theme.spacing.sm,
//     paddingHorizontal: theme.spacing.lg,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   pressed: {
//     opacity: 0.7,
//   },
//   disabled: {
//     backgroundColor: theme.colors.muted,
//   },
//   text: {
//     color: theme.colors.text_light,
//     fontFamily: theme.fonts.bold,
//     fontSize: theme.fontsizes.md,
//   },
// });

// export default $Button;

// components/ui/Button.tsx

import React from 'react';
import {
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
  View,
  ActivityIndicator,
} from 'react-native';
import theme from '../../theme';

type ButtonProps = {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
};

const $Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  disabled = false,
  loading = false,
  style,
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button,
        isDisabled && styles.disabled,
        pressed && !isDisabled && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.light} />
      ) : (
        // If use this commented code, then you have to put children in fragment(<>....</>)
        // <View style={styles.content}>{children}</View>
        <View style={[styles.content, Array.isArray(children) && children.length > 1 && { gap: 8 }]}>
  {children}
</View>

      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.main,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  pressed: {
    opacity: 0.7,
  },
  disabled: {
    backgroundColor: theme.colors.muted,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
});

export default $Button;
