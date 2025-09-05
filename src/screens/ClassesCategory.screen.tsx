import React, { useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import tw from "../utils/tailwind";
import { allClassesData } from "../data/classesData";
import { Header } from "../components/UI/header.component";
import $Button from "../components/UI/customButton.component";
import $Text from "../components/UI/customText.component";

export default function ClassesCategory({ navigation }) {
  const [selectedClass, setSelectedClass] = useState<any>(null);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={tw`flex-1 m-2 bg-white rounded-xl overflow-hidden shadow-md`}
      onPress={() => setSelectedClass(item)}
    >
      <Image source={item.image} style={tw`w-full h-38 rounded-t-xl`} />
      <$Text style={tw`text-center p-2 text-base font-medium capitalize`}>
        {item.title}
      </$Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={tw`flex-1 bg-background`}>
      {/* Header */}
      <Header title="Our Classes" onBack={() => navigation.goBack()} />

      {/* Grid List */}
      <FlatList
        data={allClassesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={tw`p-3`}
      />

      {/* Modal */}
      <Modal
        visible={!!selectedClass}
        transparent
        animationType="fade"
        onRequestClose={() => setSelectedClass(null)}
      >
        <View style={tw`flex-1 bg-black/50 justify-center items-center`}>
          <View style={tw`w-11/12 bg-white rounded-2xl p-4 items-center`}>
            <Image
              source={selectedClass?.image}
              style={tw`w-full h-60 rounded-xl`}
            />
            <$Text style={tw`text-xl font-bold mt-3 capitalize`}>
              {selectedClass?.title}
            </$Text>
            <$Text style={tw`mt-2 text-sm text-main text-left`}>
              {selectedClass?.description}
            </$Text>
            <$Text style={tw`self-start mt-2 text-sm font-semibold text-main`}>
              Level: {selectedClass?.level}
            </$Text>

            <$Button
              style={tw`mt-4 bg-main px-6 py-3 rounded-lg`}
              onPress={() => setSelectedClass(null)}
            >
              <$Text style={tw`text-white font-semibold`}>Close</$Text>
            </$Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
