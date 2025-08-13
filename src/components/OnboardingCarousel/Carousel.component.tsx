// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
// import {Slide} from '../types/Slide'
// const { width } = Dimensions.get('window');

// type Props = {
//   data: Slide[];
//   onIndexChange?: (index: number) => void;
// };

// const VisitorCarousel = React.forwardRef<ICarouselInstance, Props>(
//   ({ data, onIndexChange }, ref) => {
//     return (
//       <Carousel
//         ref={ref}
//         loop={false}
//         width={width}
//         height={380}
//         data={data}
//         pagingEnabled
//         onSnapToItem={onIndexChange}
//         renderItem={({ item }) => (
//           <View style={styles.slide}>
//             <Image source={item.image} style={styles.image} resizeMode="cover" />
//             <Text style={styles.heading}>{item.heading}</Text>
//             <Text style={styles.text}>{item.text}</Text>
//           </View>
//         )}
//       />
//     );
//   }
// );

// const styles = StyleSheet.create({
//   slide: {
//     alignItems: 'center',
//     paddingHorizontal: 24,
//     paddingTop: 8,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   text: {
//     fontSize: 13,
//     textAlign: 'center',
//     color: '#333',
//     lineHeight: 20,
//   },
// });

// export default VisitorCarousel;

import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  runOnJS,
} from "react-native-reanimated";
import { Slide } from "../../types/Slide.type";
import theme from "../../theme";

const { width, height } = Dimensions.get("window");

type Props = {
  data: Slide[];
  onIndexChange?: (index: number) => void;
};

const AnimatedFlatList = Animated.createAnimatedComponent(Animated.FlatList);

const OnboardingCarousel = React.forwardRef<any, Props>(
  ({ data, onIndexChange }, ref) => {
    const scrollX = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
      onScroll: (event) => {
        scrollX.value = event.contentOffset.x;
      },
      onMomentumEnd: (event) => {
        const offset = event.contentOffset.x;
        const index = Math.round(offset / width);
        if (onIndexChange) {
          runOnJS(onIndexChange)(index);
        }
      },
    });

  
    return (
      <View style={styles.container}>
        <AnimatedFlatList
          ref={ref}
          data={data}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          renderItem={({ item }) => (
            <View style={styles.slide}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.heading}>{item.heading}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: height * 0.65,
  },
  slide: {
    width: width,
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  image: {
    width: "100%",
    height: height * 0.33,
    borderRadius: 12,
    marginBottom: 20,
  },
  heading: {
    fontFamily: theme.fonts.bold,
    fontSize: theme.sizes.xl,
    textAlign: "center",
    marginBottom: theme.spacing.sm,
  },
  text: {
    fontFamily: theme.fonts.regular,
    fontSize: theme.sizes.md,
    textAlign: "left",
    color: theme.colors.text_dark,
    lineHeight: theme.spacing.lg,
  },
});

export default OnboardingCarousel;
