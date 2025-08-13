import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  SharedValue,
  Easing,
} from 'react-native-reanimated';
import theme from '../../theme';

type PaginationProps = {
  data: any[];
  progress: SharedValue<number>;
  onPress?: (index: number) => void;
  dotStyle?: any;
  activeDotStyle?: any;
  containerStyle?: any;
};

const Pagination: React.FC<PaginationProps> = ({
  data,
  progress,
  onPress,
  dotStyle,
  activeDotStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {data.map((_, index) => {
        const animatedStyle = useAnimatedStyle(() => {
          const isActive = Math.round(progress.value) === index;

          const width = withTiming(
            isActive ? activeDotStyle?.width || 24 : dotStyle?.width || 10,
            { duration: 250, easing: Easing.inOut(Easing.quad) }
          );

          const height = withTiming(
            isActive ? activeDotStyle?.height || 10 : dotStyle?.height || 10,
            { duration: 250, easing: Easing.inOut(Easing.quad) }
          );

          const borderRadius = withTiming(
            isActive ? activeDotStyle?.borderRadius || 6 : dotStyle?.borderRadius || 5,
            { duration: 250, easing: Easing.inOut(Easing.ease) }
          );

          const backgroundColor = isActive
            ? activeDotStyle?.backgroundColor || '#000'
            : dotStyle?.backgroundColor || '#ccc';

          return {
            width,
            height,
            borderRadius,
            backgroundColor,
            marginHorizontal: 4,
          };
        });

        return (
          <TouchableWithoutFeedback key={index} onPress={() => onPress?.(index)}>
            <Animated.View style={[styles.dot, animatedStyle]} />
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: theme.colors.main
  },
});

export default Pagination;
