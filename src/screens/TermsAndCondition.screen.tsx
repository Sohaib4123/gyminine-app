import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import { useNavigation , NavigationProp } from "@react-navigation/native";
import { Header } from "../components/UI/header.component";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";
import $RadioButton from "../components/UI/customRadioBtn.component";
import theme from "../theme";
import { RootStackParamList } from "../types/Navigation.type";


const TermsAndConditions: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [selected, setSelected] = useState<number | null>(null);
  const {height} = Dimensions.get('screen')
 
  return (
    <View style={styles.container}>
      <Header
        title={"Terms and Conditions"}
        onBack={() => navigation.goBack()}
      />
      <View style={{ paddingHorizontal: 20 }}>
        {/* About Section */}
        <View>
          <$Text style={styles.description} weight="regular" size="md">
            Our class policies are there to protect each and all our members
            experience within our classes and studio and we truly believe that
            this works both ways which is why many polices are also expected
            from us. 5 hour cancellation policy for semi private training.12
            hour cancellation policy for Private training. Please ensure that
            you arrive at least 5 minutes before class start time (late arrivals
            cannot be guaranteed entry). For those that are new to Pilates, For
            the best quality workout please ensure that all phones are on silent
            and away from the workout area. For hygiene & safety reasons, grip
            socks are compulsory for all classes (on sale at front desk)
          </$Text>
        </View>

        <$RadioButton
          containerStyle={{ marginTop: height * 0.4 }}
          options={[{ label: "I Agree", value: 1 }]}
          selected={selected}
          onSelect={(value) => {
            if (selected === value) {
              setSelected(null);
            } else {
              setSelected(value);
            }
          }}
        />
        <View style={styles.bottomRow}>
          <$Button style={styles.secondaryButton}>
            <$Text size="lg" weight="bold" color="dark">
              Back
            </$Text>
          </$Button>
          <$Button style={styles.primarybutton}>
            <$Text size="lg" weight="bold" color="light">
              Next
            </$Text>
          </$Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
   
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    backgroundColor: "#66706A",
  },
  special: {
    marginTop: 8,
    color: "#444",
  },
  heading: {
    marginBottom: 4,
  },
  description: {
    color: "#444",
    lineHeight: 20,
  },
  primarybutton: {
    backgroundColor: theme.colors.main,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xxl,
    borderRadius: 10,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: theme.colors.glass,
    borderWidth: 2,
    borderColor: theme.colors.dark,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xxl,
    borderRadius: 10,
    alignItems: "center",
  },
   bottomRow: {
    marginTop: "auto",
    paddingHorizontal: 23,
    paddingBottom: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
  }
});

export default TermsAndConditions;
