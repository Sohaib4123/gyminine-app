import React from "react";
import { FlatList, Image, ImageSourcePropType } from "react-native";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";
import tw from "../../utils/tailwind";

type Props = { 
  data: { id: string; title: string; image: ImageSourcePropType }[] 
};

export default function ClassList({ data }: Props) {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <$Button style={tw`mr-3 items-center`} variant="tab">
          <Image
            source={item.image}
            style={tw`w-32 h-32 rounded-lg`}
          />
          <$Text style={tw`mt-1`} size='md'>{item.title}</$Text>
        </$Button>
      )}
    />
  );
}
