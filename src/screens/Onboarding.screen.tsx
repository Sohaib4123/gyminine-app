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

const { height } = Dimensions.get("window");

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
