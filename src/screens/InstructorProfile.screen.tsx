import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, ActivityIndicator } from "react-native";
import {
  useNavigation,
  RouteProp,
  NavigationProp,
} from "@react-navigation/native";
import tw from "../utils/tailwind";

import { Header } from "../components/UI/header.component";
import $Text from "../components/UI/customText.component";
import { instructors } from "../data/instructorData";
import { MainNavigatorParamList } from "../types/Navigation.type";

type Instructor = {
  id: string;
  name: string;
  speciality: string;
  image: string;
  description: string;
};
type InstructorProfileRoute = RouteProp<
  MainNavigatorParamList,
  "instructorProf"
>;
type Prop = {
  route: InstructorProfileRoute;
};
const InstructorProfile: React.FC<Prop> = ({ route }) => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const [instructor, setInstructor] = useState<Instructor>();
  const { instructorId, instructorName } = route.params;
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    try {
      let data: Instructor = {
        id: "",
        name: "",
        speciality: "",
        image: "",
        description: "",
      };
      if (instructorId) data = instructors.find((i) => i.id === instructorId);
      else data = instructors.find((i) => i.name === instructorName);

      setInstructor(data || undefined);
      setLoading(false);
    } catch (error) {
      console.log("Error when getting instructor data!!!", error);
    }
  }, []);

  const getTrimmedText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  if (loading) {
    return (
      <View style={tw`flex-1 justify-center items-center`}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 bg-background`}>
      {/* Header */}
      <Header
        title={instructor?.name || "Instructor"}
        onBack={() => navigation.goBack()}
      />

      {/* Content */}
      <ScrollView contentContainerStyle={tw`py-5 px-5`}>
        {/* Instructor Image + Speciality */}
        <View>
          <Image
            source={{
              uri: instructor?.image || "https://via.placeholder.com/300x200",
            }}
            style={tw`w-full h-50 rounded-xl bg-gray-500`}
          />
          <$Text style={tw`mt-2 text-dark`} size="md">
            {instructor?.speciality}
          </$Text>
        </View>

        {/* About Section */}
        <View style={tw`mt-4`}>
          <$Text style={tw`mb-1`} weight="bold" size="xl">
            About the Instructor
          </$Text>
          <$Text style={tw`text-dark leading-5`} size="md">
            {isExpanded
              ? instructor?.description
              : getTrimmedText(instructor?.description || "", 120)}{" "}
            <$Text
              style={tw`text-blue-700 underline font-medium`}
              onPress={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "read less" : "read more"}
            </$Text>
          </$Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default InstructorProfile;
