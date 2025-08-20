import React from "react";
import { FlatList, Image, Text, View } from "react-native";

type Props = { data: { id: string; name: string; speciality: string; image: string }[] };

export default function InstructorList({ data }: Props) {
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          style={{
            width: 150,
            marginRight: 12,
            padding: 12,
            backgroundColor: "#6b776b",
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: item.image }}
            style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }}
          />
          <Text style={{ color: "white", fontWeight: "600" }}>{item.name}</Text>
          <Text style={{ color: "white", fontSize: 12 }}>{item.speciality}</Text>
        </View>
      )}
    />
  );
}
