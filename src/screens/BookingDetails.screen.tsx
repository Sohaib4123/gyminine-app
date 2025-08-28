import React, { useState } from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MainNavigatorParamList } from "../types/Navigation.type";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tailwind";
import { Header } from "../components/UI/header.component";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";
import { Booking, Status } from "../types/Booking.type";


const STATUS_COLOR: Record<Booking["status"], string> = {
  "Active / Upcoming": "bg-main",
  Membership: "bg-main",
  Passed: "bg-gray-500",
  Cancel: "bg-red-800",
  "Waiting List": "bg-amber-700",
  Frozen: "bg-cyan-600",
};

type Prop = NativeStackScreenProps<MainNavigatorParamList, "bookingDetail">;

export default function BookingConfirmScreen({ navigation, route }: Prop) {
  const { status, className, bookingNo, from, to } = route.params;
  const [menuVisible, setMenuVisible] = useState(false);

  const booking = {
    bookingNo,
    className,
    person: "1 x person",
    username: "username",
    from,
    to,
    qrValue: bookingNo,
  };

  const ACTIONS: Record<Status, { label: string; onPress: () => void }[]> = {
    "Active / Upcoming": [
      {
        label: "Cancel Booking",
        onPress: () => navigation.navigate('cancelBooking'),
      },
      { label: "Rate Class", onPress: () => alert("Rate Class clicked") },
    ],
    Membership: [
      {
        label: "Cancel Booking",
        onPress: () => navigation.navigate('cancelBooking'),
      },
      {
        label: "Freeze Booking",
        onPress: () => navigation.navigate('freezeBooking'),
      },
    ],
    Passed: [
      { label: "Rate Booking", onPress: () => alert("Rate Booking clicked") },
    ],
  };

  
  const toggleMenu = () => setMenuVisible(!menuVisible);

   // 🔑 Determine menu actions based on status
  const menuActions = (ACTIONS as Partial<typeof ACTIONS>)[status as Status];
 
  return (
    <View style={tw`flex-1`}>
      {/* Top background */}
      <View
        style={tw`absolute top-0 left-0 right-0 h-1/2 ${STATUS_COLOR[status]}`}
      />

      {/* Reusable Header */}
      <Header
        style={tw`${STATUS_COLOR[status]}`}
        title={booking.bookingNo}
        onBack={() => navigation.goBack()}
        rightChildren={
          // menuActions && (
          <$Button onPress={toggleMenu} variant="icon">
            <Ionicons name="ellipsis-vertical" size={22} color="#fff" />
          </$Button>
          // )
        }
      />

      {/* Menu Modal */}
      {menuActions && (
        <Modal
          visible={menuVisible}
          transparent
          animationType="fade"
          onRequestClose={toggleMenu}
        >
          <TouchableOpacity
            style={tw`flex-1`}
            activeOpacity={1}
            onPress={toggleMenu}
          >
            <View
              style={tw`absolute top-10 right-4 bg-white rounded-md shadow-lg`}
            >
              {menuActions.map((action, index) => (
                <$Button
                  key={action.label}
                  style={tw`px-4 py-3 ${
                    index !== menuActions.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  } bg-white`}
                  onPress={() => {
                    toggleMenu();
                    action.onPress();
                  }}
                >
                  <$Text size="md" style={tw`text-dark`} weight="bold">
                    {action.label}
                  </$Text>
                </$Button>
              ))}
            </View>
          </TouchableOpacity>
        </Modal>
      )}

      {/* Card */}
      <View style={tw`flex-1 justify-start items-center mt-4`}>
        <View style={tw`w-11/12 rounded-md bg-white p-6 shadow-lg h-3/5`}>
          <$Text size="xl" weight="bold" style={tw`text-dark`}>
            {booking.className}
          </$Text>
          <$Text size="md" style={tw`text-gray-500 mt-1`}>
            Reservation Details
          </$Text>

          <View style={tw`h-px bg-gray-200 my-3`} />

          {/* Booking Details */}
          {[
            { label: "Person", value: booking.person },
            { label: "User", value: booking.username },
            { label: "Booking No", value: booking.bookingNo },
            { label: "From", value: booking.from },
            { label: "To", value: booking.to },
          ].map((item, idx) => (
            <View key={idx} style={tw`flex-row justify-between mb-2`}>
              <$Text size="md" style={tw`text-gray-600 w-1/3`}>
                {item.label}
              </$Text>
              <$Text size="md" style={tw`text-dark w-2/3`}>
                {item.value}
              </$Text>
            </View>
          ))}

          {/* QR Code Placeholder */}
          <View style={tw`mt-6 items-center`}>
            <$Text>QR Code</$Text>
          </View>
        </View>
      </View>
    </View>
  );
}
