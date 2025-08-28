import React, { JSX } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../components/UI/header.component";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { instructors } from "../data/instructorData";
import theme from "../theme";
import { MainNavigatorParamList } from "../types/Navigation.type";

const AllInstructor = (): JSX.Element => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header title="Our Instructors" onBack={() => navigation.goBack()} />
      <View style={{ paddingHorizontal: 20 }}>
        {instructors.map((item) => (
          <View
            key={item.id}
            style={{
              flexDirection: "row",
              padding: 12,
              marginVertical: 6,
              borderWidth: 1,
              borderColor: theme.colors.muted,
              borderRadius: 12,
              backgroundColor: "#fff",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 8 }}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontWeight: "600" }}>{item.name}</Text>
              <Text>{item.speciality}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#6b776b",
                paddingHorizontal: 16,
                paddingVertical: 6,
                borderRadius: 8,
                height: 40,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() =>
                navigation.navigate("instructorBook", { instructorId: item.id })
              }
            >
              <Text style={{ color: "white" }}>View</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AllInstructor;
