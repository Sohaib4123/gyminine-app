import React from "react";
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import theme from "../theme";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";

const { width, height } = Dimensions.get("window");

export default function Visit() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo */}
        <Image
          source={require("../assets/images/splash-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Description */}
        <$Text style={styles.description}>
          welcome to curve pilates center - we ensure the care and improvement
          of the health and quality of life of our users through the practice of
          integrative and holistic physical exercise.
        </$Text>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <$Button 
            style = {styles.primaryButton}
            onPress={() => navigation.navigate("Ename")}
            >
            <$Text color="light" size='lg' weight='bold'>New Account</$Text>
          </$Button>

          <$Button 
            style = {styles.secondaryButton}
            onPress={() => navigation.navigate("login")}
            >
            <$Text color='dark' size='lg' weight='bold'>Login</$Text>
          </$Button>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.colors.background, 
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: theme.spacing.xxl,
  },
  description: {
    fontFamily: theme.fonts.regular, 
    fontSize: theme.sizes.md,
    color: theme.colors.dark,
    textAlign: "left",
    lineHeight: theme.spacing.lg,
    marginBottom: 40,
    paddingHorizontal: 10,
  },
  buttonGroup: {
    width: "100%",
    gap: theme.spacing.md,
  },
  primaryButton: {
    backgroundColor: theme.colors.main,
    paddingVertical: theme.spacing.md,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: theme.colors.glass,
    borderWidth: 2,
    borderColor: theme.colors.dark,
    paddingVertical: theme.spacing.md,
    borderRadius: 10,
    alignItems: "center",
  },
});
