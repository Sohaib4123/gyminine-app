// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   Image,
//   SafeAreaView,
// } from "react-native";
// import VisitorCarousel from "../components/Carousel";
// import { Pagination } from "react-native-reanimated-carousel";
// import { Image as ExpoImage } from "expo-image";
// import { carouselData } from "../data/carouselData";
// import { useSharedValue } from "react-native-reanimated";
// import { useNavigation } from "@react-navigation/native";
// import { interpolate, Extrapolation } from "react-native-reanimated";
// import Ionicons from '@expo/vector-icons/Ionicons';

// const { width, height } = Dimensions.get("window");

// export default function Visitor() {
//   const navigation = useNavigation();
//   const progress = useSharedValue(0);
//   const carouselRef = React.useRef<React.ComponentRef<typeof VisitorCarousel>>(null);

//   const onPressPagination = (index: number) => {
//     carouselRef.current?.scrollTo({ index, animated: true });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Transparent background overlay */}
//       <ExpoImage
//         source={require("../../assets/background.png")}
//         style={StyleSheet.absoluteFill}
//         contentFit="cover"
//       />

//       <SafeAreaView style={styles.safeArea}>
//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Image source={require("../../assets/logo.png")} style={styles.logo} />
//         </View>

//         {/* Main white content area */}
//         <View style={styles.transparentContainer}>
//           <VisitorCarousel
//             ref={carouselRef}
//             data={carouselData}
//             onIndexChange={(index) => {
//               progress.value = index;
//             }}
//           />

//           {/* Footer */}
//           <View style={styles.bottomRow}>
//             <TouchableOpacity
//               onPress={()=> navigation.navigate('home')}
//             >
//               <Text style={styles.skipText}>SKIP</Text>
//             </TouchableOpacity>

//             {/* <Pagination.Custom
//               progress={progress}
//               data={carouselData}
//               dotStyle={styles.dot}
//               activeDotStyle={styles.activeDot}
//               containerStyle={styles.pagination}
//               onPress={onPressPagination}
//             /> */}
//              <Pagination.Custom
//               progress={progress}
//               data={carouselData}
//               size={20}
//               dotStyle={{
//                 borderRadius: 16,
//                 backgroundColor: "#ccc",
//                 width: 10,
//                 height: 10,
//               }}
//               activeDotStyle={{
//                 borderRadius: 8,
//                 width: 20,
//                 height: 10,
//                 backgroundColor: "#000",
//               }}
//               containerStyle={{
//                 gap: 5,
//                 flexDirection: "row",
//                 alignItems: "center",
//                 height: 10,
//               }}
//               horizontal
//               onPress={onPressPagination}
//               customReanimatedStyle={(progress, index, length) => {
//                 let val = Math.abs(progress - index);
//                 if (index === 0 && progress > length - 1) {
//                   val = Math.abs(progress - length);
//                 }

//                 return {
//                   transform: [
//                     {
//                       translateY: interpolate(
//                         val,
//                         [0, 1],
//                         [0, 0],
//                         Extrapolation.CLAMP,
//                       ),
//                     },
//                   ],
//                 };
//               }}
//             />

//             <TouchableOpacity
//               disabled={progress.value !== carouselData.length - 1}
//               style={[
//                 styles.actionButton,
//                 progress.value === carouselData.length - 1 &&
//                   styles.actionButtonActive,
//               ]}
//             >
//               <Ionicons name="chevron-forward" size={20} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//     </View>
//   );
// }

// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Dimensions,
//   TouchableOpacity,
//   Image,
//   ImageBackground,
//   SafeAreaView,
// } from 'react-native';
// import VisitorCarousel from '../components/OnboardingCarousel/Carousel.component';
// import Pagination from '../components/OnboardingCarousel/Pagination.component';
// import { carouselData } from '../data/carouselData';
// import { useSharedValue } from 'react-native-reanimated';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import theme from '../theme';
// import $Text from '../components/UI/customText.component';
// import $Button from '../components/UI/customButton.component';

// const { width, height } = Dimensions.get('window');

// export default function Onboarding() {
//   const progress = useSharedValue(0);
//   const carouselRef = React.useRef<any>(null);
//   const navigation = useNavigation();

//   const onPressForward = (index: number) => {
//     if(index < carouselData.length)
//       carouselRef.current?.scrollToIndex({ index , animated: true });

//     if(index == carouselData.length - 1)
//       navigation.navigate('auth')

//   };

//   const onPressPagination = (index: number) => {
//     carouselRef.current?.scrollToIndex({ index, animated: true });
//   };

//   return (
//     <ImageBackground
//       source={require("../assets/images/background.png")}
//       style={styles.background}
//       resizeMode="cover"
//     >
//       <SafeAreaView style={styles.safeArea}>
//         {/* Logo */}
//         <View style={styles.logoContainer}>
//           <Image source={require('../assets/images/logo.png')} style={styles.logo} />
//         </View>

//         {/* Main white content area */}
//         <View style={styles.transparentContainer}>
//           <VisitorCarousel
//             ref={carouselRef}
//             data={carouselData}
//             onIndexChange={(index) => {
//               progress.value = index;
//             }}
//           />

//           {/* Footer */}
//           <View style={styles.bottomRow}>
//             <TouchableOpacity
//               onPress={() => {navigation.navigate('auth')}}
//             >
//               <$Text weight='bold' size='md'>SKIP</$Text>
//             </TouchableOpacity>

//             <Pagination
//               progress={progress}
//               data={carouselData}
//               dotStyle={styles.dot}
//               activeDotStyle={styles.activeDot}
//               containerStyle={styles.pagination}
//               onPress={onPressPagination}
//             />

//             <TouchableOpacity
//               // disabled={progress.value !== carouselData.length - 1}
//               style={[
//                 styles.actionButton,
//                 progress.value === carouselData.length - 1 &&
//                   styles.actionButtonActive,
//               ]}
//             >
//               <Ionicons name="chevron-forward" size={20} color={theme.colors.main} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     backgroundColor: theme.colors.background,
//   },
//   safeArea: {
//     flex: 1,
//   },
//   logoContainer: {
//     alignItems: "center",
//     marginTop: height * 0.10,
//   },
//   logo: {
//     width: 64,
//     height: 64,
//     resizeMode: "contain",
//   },
//   transparentContainer: {
//     flex: 1,
//     backgroundColor: "transparent",
//     marginTop: 10,
//     borderTopLeftRadius: 32,
//     borderTopRightRadius: 32,
//     paddingTop: 24,
//   },
//   bottomRow: {
//     marginTop: "auto",
//     paddingHorizontal: 23,
//     paddingBottom: 32,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },
//   pagination: {
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 5,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 6,
//     backgroundColor: theme.colors.background,
//   },
//   activeDot: {
//     width: 10,
//     height: 10,
//     borderRadius: 6,
//     backgroundColor: theme.colors.main,
//   },
//   actionButton: {
//     backgroundColor: theme.colors.background,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     borderWidth: 2,
//     borderColor: theme.colors.muted
//   },
//   actionButtonActive: {
//     backgroundColor: theme.colors.background,
//   },
// });

import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useSharedValue } from "react-native-reanimated";

import VisitorCarousel from "../components/OnboardingCarousel/Carousel.component";
import Pagination from "../components/OnboardingCarousel/Pagination.component";
import { carouselData } from "../data/carouselData";
import theme from "../theme";
import $Text from "../components/UI/customText.component";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const navigation = useNavigation();
  const carouselRef = useRef<any>(null);
  const progress = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < carouselData.length - 1) {
      carouselRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("auth");
    }
  };

  const handlePaginationPress = (index: number) => {
    carouselRef.current?.scrollToIndex({ index, animated: true });
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.transparentContainer}>
          <VisitorCarousel
            ref={carouselRef}
            data={carouselData}
            onIndexChange={(index) => {
              progress.value = index;
              setCurrentIndex(index);
            }}
          />

          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={() => navigation.navigate("auth")}>
              <$Text weight="bold" size="md">
                SKIP
              </$Text>
            </TouchableOpacity>

            <Pagination
              progress={progress}
              data={carouselData}
              dotStyle={styles.dot}
              activeDotStyle={styles.activeDot}
              containerStyle={styles.pagination}
              onPress={handlePaginationPress}
            />

            <TouchableOpacity
              onPress={handleNext}
              style={[
                styles.actionButton,
                currentIndex === carouselData.length - 1 &&
                  styles.actionButtonActive,
              ]}
            >
              <Ionicons
                name="chevron-forward"
                size={20}
                color={
                  currentIndex === carouselData.length - 1
                    ? "white"
                    : theme.colors.main
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: height * 0.1,
  },
  logo: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
  transparentContainer: {
    flex: 1,
    backgroundColor: theme.colors.glass,
    marginTop: 10,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 24,
  },
  bottomRow: {
    marginTop: "auto",
    paddingHorizontal: 23,
    paddingBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.background,
  },

  activeDot: {
    width: 24, // elongated width
    height: 10, // same height
    borderRadius: 6, // slightly rounded
    backgroundColor: theme.colors.main,
  },
  actionButton: {
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: theme.colors.muted,
  },
  actionButtonActive: {
    backgroundColor: theme.colors.main,
    borderColor: theme.colors.main,
  },
});
