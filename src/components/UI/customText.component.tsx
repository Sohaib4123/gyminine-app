// components/ui/AppText.tsx
import React from 'react';
import { Text, TextProps, StyleSheet, TextStyle } from 'react-native';
import theme from '../../theme';

type Props = TextProps & {
  size?: keyof typeof theme.sizes;
  weight?: 'regular' | 'bold';
  color?: keyof typeof theme.colors;
  style?: TextStyle;
};

const $Text: React.FC<Props> = ({
  children,
  size = 'md',
  weight = 'regular',
  color = 'dark',
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.base,
        {
          fontSize: theme.sizes[size],
          fontFamily: theme.fonts[weight],
          color: theme.colors[color],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    lineHeight: 30,
  },
});

export default $Text;
