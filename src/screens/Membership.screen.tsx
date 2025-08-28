import React, { useState } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import tw from "../utils/tailwind";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";
import { packagesData } from "../data/packagesData";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";

type PackageType = {
  id: string;
  title: string;
  price: string;
  details: string[];
};

const tabs = ["All", "Packages", "Personal Training", "Classes", "Membership"];

export default function MembershipScreen() {
  const [activeTab, setActiveTab] = useState("All");
  const SubArrow = require("../assets/images/subdirectory-arrow.png");
  const Profile = require("../assets/images/logo.png");
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  const renderCard = ({ item }: { item: PackageType }) => (
    <TouchableOpacity
      style={tw`bg-white p-xl rounded-2xl mb-4 border border-gray-200`}
      onPress={() => navigation.navigate("termsAndCond")}
      activeOpacity={1}
    >
      <$Text style={tw`text-lg text-dark mb-2`} weight="bold">
        {item.title}
      </$Text>
      {item.details.map((d, i) => (
        <View key={i} style={tw`flex-1 flex-row justify-start items-center`}>
          <Image source={SubArrow} style={tw`h-7 w-7`} />
          <$Text style={tw`text-main`}>{d}</$Text>
        </View>
      ))}
      <$Text style={tw`text-right text-lg font-bold mt-2`}>{item.price}</$Text>
    </TouchableOpacity>
  );

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      {/* Header */}
      <View style={tw`flex-row items-center p-4`}>
        <View style={tw`w-12 h-12 rounded-full bg-gray-200 mr-3 items-center justify-center overflow-hidden`}>
          <Image source={Profile} style={tw`h-10 w-10`}/>
        </View>
        <View>
          <$Text style={tw`text-base font-semibold`}>hi, user</$Text>
          <$Text style={tw`text-gray-600 text-sm`}>gyminine gym</$Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={tw`mb-4`}>
        <FlatList
          data={tabs}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={tw`h-14`} // consistent height
          contentContainerStyle={tw`px-4`}
          renderItem={({ item: tab }) => {
            const isActive = activeTab === tab;
            return (
              <$Button
                style={tw`flex-col h-13 px-8 py-4 mr-2 justify-center items-center rounded-md border-2 ${
                  isActive ? "bg-main border-main" : "border-main"
                }`}
                onPress={() => setActiveTab(tab)}
                variant="tab"
              >
                <$Text style={tw`${isActive ? "text-light" : "text-main"}`}>
                  {tab.toLowerCase()}
                </$Text>
              </$Button>
            );
          }}
        />
      </View>

      {/* List */}
      <FlatList
        data={packagesData[activeTab]}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        contentContainerStyle={tw`px-4 pb-4`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
