// src/screens/TermsAndConditions.tsx
import React, { JSX, useState } from "react";
import { View, Dimensions } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { Header } from "../components/UI/header.component";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";
import $RadioButton from "../components/UI/customRadioBtn.component";
import { MainNavigatorParamList } from "../types/Navigation.type";
import tw from "../utils/tailwind";

const { height } = Dimensions.get("screen");

const TermsAndConditions = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={tw`flex-1 bg-white`}>
      <Header title="Terms and Conditions" onBack={() => navigation.goBack()} />

      <View style={tw`px-5`}>
        {/* About Section */}
        <View style={{ marginTop: height * 0.08 }}>
          <$Text style={tw`mb-2 leading-6`} size="md" color="dark">
            Our class policies are there to protect each and all our members
            experience within our classes and studio and we truly believe that
            this works both ways which is why many polices are also expected
            from us.{" "}
            <$Text weight="bold" size="md">
              5 hour cancellation policy
            </$Text>{" "}
            for semi private training.{" "}
            <$Text weight="bold" size="md">
              12 hour cancellation policy
            </$Text>{" "}
            for private training.
          </$Text>

          <$Text style={tw`mb-2 leading-6`} size="md" color="dark">
            please ensure that you arrive at least 5 minutes before class start
            time (late arrivals cannot be guaranteed entry).
          </$Text>

          <$Text style={tw`mb-2 leading-6`} size="md" color="dark">
            for those that are new to pilates:
          </$Text>

          {/* Bullet Points */}
          <View style={tw`flex-row items-start mb-1.5`}>
            <$Text style={tw`mr-2 leading-6`} size="lg" color="dark">
              •
            </$Text>
            <$Text style={tw`flex-1 leading-6`} size="md" color="dark">
              for the best quality workout please ensure that all phones are on
              silent and away from the workout area.
            </$Text>
          </View>

          <View style={tw`flex-row items-start mb-1.5`}>
            <$Text style={tw`mr-2 leading-6`} size="lg" color="dark">
              •
            </$Text>
            <$Text style={tw`flex-1 leading-6`} size="md" color="dark">
              for hygiene & safety reasons, grip socks are compulsory for all
              classes (on sale at front desk).
            </$Text>
          </View>
        </View>

        {/* Radio button */}
        <$RadioButton
          containerStyle={{ marginTop: height * 0.15 }}
          options={[{ label: "I Agree", value: 1 }]}
          selected={selected}
          onSelect={(value) =>
            setSelected(selected === value ? null : value)
          }
        />

        {/* Bottom row */}
        <View style={tw`flex-row justify-between items-center mt-4 pb-8`}>
          <$Button
            style={tw`bg-glass border-2 border-dark rounded-lg px-14 py-3`}
            onPress={() => navigation.goBack()}
          >
            <$Text size="lg" weight="bold" color="dark">
              Back
            </$Text>
          </$Button>

          <$Button
            style={tw`border-2 border-main rounded-lg px-14 py-3`}
            onPress={() => navigation.navigate("bookingConfirm")}
          >
            <$Text size="lg" weight="bold" color="light">
              Next
            </$Text>
          </$Button>
        </View>
      </View>
    </View>
  );
};

export default TermsAndConditions;
