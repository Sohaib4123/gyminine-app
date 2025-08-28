import React from "react";
import { Image, View } from "react-native";
import tw from "../../utils/tailwind";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList } from "../../types/Navigation.type";

type Props = {
  data: {
    id: string;
    title: string;
    time: string;
    trainer: string;
    image: any;
    date: string;
  }[];
};

export default function TodayClassesList({ data }: Props) {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  return (
    <View>
      {data.slice(0, 3).map((item) => (
        <View
          key={item.id}
          style={tw`flex-row p-3 my-1.5 rounded-xl bg-background shadow`}
        >
          <Image
            source={item.image}
            style={tw`w-15 h-15 rounded-lg`}
          />

          <View style={tw`flex-1 ml-2.5`}>
            <$Text style={tw`font-semibold`}>{item.title}</$Text>
            <$Text>{item.time}</$Text>
            <$Text>{item.trainer}</$Text>
          </View>

          <$Button
            style={tw`bg-main px-4 py-1.5 rounded-lg self-center`}
            onPress={() =>
              navigation.navigate("Classes", {
                screen: "ClassDetails",
                params: {
                  id: item.id,
                  title: item.title,
                  trainer: item.trainer,
                  time: item.time,
                  date: item.date,
                  image: Image.resolveAssetSource(item.image).uri,
                  price: "175 qar",
                },
              })
            }
          >
            <$Text color="light">Book</$Text>
          </$Button>
        </View>
      ))}
    </View>
  );
}
