import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tailwind";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";
import { Header } from "../components/UI/header.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";

export default function CancelBooking() {
  const [reason, setReason] = useState("");
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  return (
    <KeyboardAvoidingView 
    style={tw`flex-1 bg-background`}
    behavior={"padding"}
    keyboardVerticalOffset={50}
    >
      {/* Header */}
      <Header
        title="Booking Cancellation"
        onBack={() => navigation.goBack()}
        rightChildren={
          <$Button variant="icon" style={tw`mt-1`}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="#fff"
            />
          </$Button>
        }
      />
      <ScrollView
        style={tw`flex-1 bg-white`}
        contentContainerStyle={tw`p-4 pb-20`}
        keyboardShouldPersistTaps="handled"
      >
        {/* Card: Booking Info */}
        <View style={tw`bg-white p-4 rounded-xl shadow-md mb-4`}>
          {[
            { label: "class no:", value: "bk22-0945873" },
            { label: "class name:", value: "Hatha Yoga" },
            { label: "class time:", value: "5:00 pm - 6:00 pm" },
            { label: "people no:", value: "1 x person" },
            { label: "start at:", value: "2023/08/18 05:00 pm" },
            { label: "end at:", value: "2023/98/18 06:00 pm" },
          ].map((item, idx) => (
            <View key={idx} style={tw`flex-row justify-between mb-2`}>
              <$Text size="md" style={tw`text-gray-600 w-1/3`}>
                {item.label}
              </$Text>
              <$Text size="md" weight="bold" style={tw`text-dark w-2/3`}>
                {item.value}
              </$Text>
            </View>
          ))}
        </View>

        {/* Cancellation Reason */}
        <View style={tw`bg-white p-4 rounded-xl shadow-md mb-6`}>
          <$Text size="lg" style={tw`mb-2`} weight="bold">
            Cancellation Reason
          </$Text>
          <TextInput
            placeholder="Enter reason"
            multiline
            style={tw`border border-gray-300 rounded-lg p-3 h-27 text-base`}
            value={reason}
            onChangeText={setReason}
          />
        </View>

        {/* End Row */}
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <$Text size="md" weight="bold">
              Refund
            </$Text>
            <$Text size="lg">SAR 0</$Text>
          </View>

          <$Button
            onPress={() => console.log({ reason })}
            style={tw`bg-red-600 px-14 py-5 rounded-lg`}
          >
            <$Text color="light" size="lg" weight="bold">
              Submit
            </$Text>
          </$Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
