import React, { useState } from "react";
import {
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tailwind";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";
import DatePickerInput from "../components/InstructorBookingComponent/DatePicker.component";
import { Header } from "../components/UI/header.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";

export default function FreezeBooking() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
          title="Booking freezing"
          onBack={() => navigation.goBack()}
          rightChildren={
            <$Button variant='icon' style={tw`mt-1`}>
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
              { label: "booking no:", value: "bk22-0945873" },
              { label: "membership name:", value: "3 months" },
              { label: "people no:", value: "1 x person" },
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

          {/* Freezing Start Date */}
          <View style={tw`bg-white p-4 rounded-xl shadow-md mb-4`}>
            <DatePickerInput
              label="freezing starting date"
              date={startDate}
              onChange={setStartDate}
            />
          </View>

          {/* Freezing End Date */}
          <View style={tw`bg-white p-4 rounded-xl shadow-md mb-4`}>
            <DatePickerInput
              label="freezing ending date"
              date={endDate}
              onChange={setEndDate}
            />
          </View>

          {/* Reason */}
          <View style={tw`bg-white p-4 rounded-xl shadow-md mb-6`}>
            <$Text size="lg" style={tw`mb-2`} weight="bold">
              freezing reason
            </$Text>
            <TextInput
              placeholder="Enter reason"
              multiline
              style={tw`border border-gray-300 rounded-lg p-3 h-24 text-base`}
              value={reason}
              onChangeText={setReason}
            />
          </View>

          {/* Button */}
          <View style={tw`items-end`}>
            <$Button
              onPress={() => console.log({ startDate, endDate, reason })}
              style={tw`bg-main px-14 py-5 rounded-lg`}
            >
              <$Text color="light" size="lg" weight='bold'>
                Freeze
              </$Text>
            </$Button>
          </View>
        </ScrollView>
    </KeyboardAvoidingView>
  );
}
