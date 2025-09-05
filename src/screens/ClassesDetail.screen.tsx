// src/screens/ClassDetailsScreen.tsx
import React from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationProp, useNavigation} from "@react-navigation/native";
import {
  ClassesNavigatorParamList,
  MainNavigatorParamList,
} from "../types/Navigation.type";
import $Text from "../components/UI/customText.component";
import $Button from "../components/UI/customButton.component";
import { Ionicons } from "@expo/vector-icons";
import tw from "../utils/tailwind";

type Props = NativeStackScreenProps<ClassesNavigatorParamList, "ClassDetails">;
const { height } = Dimensions.get("window");

export default function ClassDetailsScreen({ route }: Props) {
  const { title, time, trainer, date, price, image } = route.params;
  const navigation = useNavigation<NavigationProp<ClassesNavigatorParamList>>()
  const handleNavigation = () => {
    navigation
      .getParent<NavigationProp<MainNavigatorParamList>>()
      .navigate("termsAndCond");
  };

  const handleNavInstructor = (name: string) => {
    navigation
      .getParent<NavigationProp<MainNavigatorParamList>>()
      .navigate('instructorProf', {instructorName: name });
  }

  return (
    <ScrollView style={tw`flex-1 bg-background`}>
      {/* Header Image */}
      <View style={tw`relative`}>
        <Image
          source={{ uri: image }}
          style={[tw`w-full`, { height: height * 0.4 }]}
        />
        <$Button
          style={tw`absolute top-xl left-5 bg-light p-2 rounded-full`}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={22} color="#000" />
        </$Button>
      </View>

      {/* Class Info */}
      <View style={tw`p-4`}>
        <$Text style={tw`text-xl font-bold mb-4`}>{title}</$Text>

        {/* Info Rows */}
        <View style={tw`flex-row items-center py-2 border-b border-light_gray`}>
          <Ionicons name="time-outline" size={18} color="#333" />
          <$Text style={tw`ml-2 text-sm text-dark flex-1`}>class time</$Text>
          <$Text style={tw`text-sm font-medium text-dark`}>{time}</$Text>
        </View>

        <TouchableOpacity style={tw`bg-background p-0`} onPress={() => handleNavInstructor(trainer)}>
          <View
            style={tw`flex-row items-center py-2 border-b border-light_gray`}
          >
            <Ionicons name="person-outline" size={18} color="#333" />
            <$Text style={tw`ml-2 text-sm text-dark flex-1`}>class coach</$Text>
            <$Text style={tw`text-sm font-medium text-dark`}>{trainer}</$Text>
          </View>
        </TouchableOpacity>

        <View style={tw`flex-row items-center py-2 border-b border-gray-300`}>
          <Ionicons name="calendar-outline" size={18} color="#333" />
          <$Text style={tw`ml-2 text-sm text-dark flex-1`}>
            class date
          </$Text>
          <$Text style={tw`text-sm font-medium text-dark`}>{date}</$Text>
        </View>

        <View style={tw`flex-row items-center py-2 border-b border-light_gray`}>
          <Ionicons name="pricetag-outline" size={18} color="#333" />
          <$Text style={tw`ml-2 text-sm text-dark flex-1`}>class price</$Text>
          <$Text style={tw`text-sm font-medium text-dark`}>{price}</$Text>
        </View>

        {/* Description */}
        <View style={tw`mt-4`}>
          <$Text style={tw`text-base font-bold mb-2`}>Class Description</$Text>
          <$Text style={tw`text-sm leading-5 text-dark`}>
            This is a sample class description. You can replace it with API
            data.
          </$Text>
        </View>
      </View>

      {/* CTA */}
      <View style={tw`p-4 items-center`}>
        <$Button
          style={tw`bg-main py-3 rounded-lg items-center w-full mb-2`}
          onPress={handleNavigation}
        >
          <$Text style={tw`text-light font-bold text-lg`}>Book Your Slot</$Text>
        </$Button>
        <$Text style={tw`text-sm text-dark`}>
          don't have a membership yet?{" "}
          <$Text style={tw`underline`}>click here</$Text>
        </$Text>
      </View>
    </ScrollView>
  );
}
