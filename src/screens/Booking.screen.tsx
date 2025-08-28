import React, { useState, useMemo } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import tw from "../utils/tailwind";
import { bookingData } from "../data/bookingData";
import $Text from "../components/UI/customText.component";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";

type Booking = {
  id: string;
  status:
    | "Active / Upcoming"
    | "Membership"
    | "Passed"
    | "Cancel"
    | "Waiting List"
    | "Frozen";
  date: string;
  month: string;
  className: string;
  bookingNo: string;
  type: string;
  from: string;
  to: string;
};

const FILTER_OPTIONS = [
  { label: "Active / Upcoming", value: "Active / Upcoming" },
  { label: "Membership", value: "Membership" },
  { label: "Passed", value: "Passed" },
  { label: "Cancel", value: "Cancel" },
  { label: "Waiting List", value: "Waiting List" },
  { label: "Frozen", value: "Frozen" },
];

// Status color map
const STATUS_COLOR: Record<Booking["status"], string> = {
  "Active / Upcoming": "bg-main",
  Membership: "bg-main",
  Passed: "bg-gray-500",
  Cancel: "bg-red-800",
  "Waiting List": "bg-amber-700",
  Frozen: "bg-cyan-600",
};

export default function BookingsScreen() {
  const [selectedFilter, setSelectedFilter] = useState("Active / Upcoming");
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>()
  const filteredBookings = useMemo(
    () => bookingData.filter((b) => b.status === selectedFilter),
    [selectedFilter]
  );

  const renderBookingCard = ({ item }: { item: Booking }) => (
    <TouchableOpacity 
      style={tw`flex-row bg-background m-3 rounded-xl shadow-md h-40`}
      activeOpacity={1}
      onPress={() => navigation.navigate('bookingDetail', {
        id: item.id,
        status: item.status,
        className: item.className,
        bookingNo: item.bookingNo,
        type: item.type,
        from: item.from,
        to: item.to,
      })}
    >
      {/* Date Column */}
      <View
        style={tw`${
          STATUS_COLOR[item.status]
        } w-16 justify-center items-center rounded-l-xl`}
      >
        <$Text style={tw`text-light`} weight="bold" size="xl">
          {item.date}
        </$Text>
        <$Text style={tw`text-light`} size="md">
          {item.month}
        </$Text>
      </View>

      {/* Details */}
      <View style={tw`flex-1 p-4 justify-center`}>
        <$Text style={tw`text-dark mb-3`} weight="bold" size="lg">
          {item.className}
        </$Text>

        {/* Details with alignment */}
        <View>
          {[
            { label: "booking no", value: item.bookingNo },
            { label: "class name", value: item.type },
            { label: "from", value: item.from },
            { label: "to", value: item.to },
          ].map((row, index) => (
            <View key={index} style={tw`flex-row justify-between`}>
              <$Text style={tw`text-dark w-28`} size="md">
                {row.label}
              </$Text>
              <$Text style={tw`text-dark flex-1`} size="sm">
                {row.value}
              </$Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 bg-background`}>
      {/* Header */}
      <View style={tw`bg-main p-5`}>
        <$Text style={tw`text-light text-xl font-bold`}>Bookings</$Text>

        {/* Dropdown */}
        <View style={tw`w-full mt-4`}>
          <Dropdown
            data={FILTER_OPTIONS}
            labelField="label"
            valueField="value"
            placeholder="Select Status"
            value={selectedFilter}
            onChange={(item) => setSelectedFilter(item.value)}
            style={tw`border border-gray-300 rounded-md px-3 py-2`}
            containerStyle={tw`rounded-md border border-gray-300`}
            itemTextStyle={tw`text-main font-regular`}
            selectedTextStyle={tw`text-light font-regular`}
            placeholderStyle={tw`text-gray-400`}
          />
        </View>
      </View>

      {/* Booking List */}
      <FlatList
        data={filteredBookings}
        renderItem={renderBookingCard}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <$Text style={tw`text-center text-gray-500 mt-10`}>
            No bookings found
          </$Text>
        }
        contentContainerStyle={tw`pb-5`}
      />
    </View>
  );
}
