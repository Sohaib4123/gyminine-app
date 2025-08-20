import React from "react";
import { FlatList, Image, Text, TouchableOpacity, ImageSourcePropType} from "react-native";

type Props = { data: { id: string; title: string; image: ImageSourcePropType }[] };

export default function ClassList({ data }: Props) {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginRight: 12, alignItems: "center" }}>
          <Image
            source={item.image}
            style={{ width: 125, height: 125, borderRadius: 10 }}
          />
          <Text style={{ marginTop: 4 }}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
