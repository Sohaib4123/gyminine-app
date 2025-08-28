import React from "react";
import { FlatList, Image } from "react-native";
import tw from "../../utils/tailwind";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParamList } from "../../types/Navigation.type";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";

type Props = {
  data: { id: string; name: string; speciality: string; image: string }[];
};

export default function InstructorList({ data }: Props) {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews
      renderItem={({ item }) => (
        <$Button
          style={tw`w-38 mr-3 p-3 bg-main rounded-xl items-center flex-1`}
          onPress={() =>
            navigation.navigate("instructorProf", { instructorId: item.id })
          }
        >
          <Image
            source={{ uri: item.image }}
            style={tw`w-20 h-20 rounded-full mb-2`}
          />
          <$Text style={tw`text-light font-semibold`}>{item.name}</$Text>
          <$Text style={tw`text-light text-xs`}>{item.speciality}</$Text>
        </$Button>
      )}
    />
  );
}

