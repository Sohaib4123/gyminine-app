// import React, { useState } from "react";
// import { View, FlatList, StyleSheet, Dimensions } from "react-native";
// import $Text from "../components/UI/customText.component";
// import WeekDatePicker from "../components/ClassesComponent/WeekDatePicker.component";
// import ClassItemCard from "../components/ClassesComponent/ClassItemCard.component";
// import { mockClasses } from "../data/classesData";

// const {width, height} = Dimensions.get("window")
// export default function ClassesScreen() {
//   const [selectedDate, setSelectedDate] = useState<string>(
//     new Date().toISOString().split("T")[0]
//   );

//   // const filteredClasses = mockClasses.filter((cls) => cls.date === selectedDate);
//   const filteredClasses = mockClasses;
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <$Text style={styles.title} weight='bold'>Class Date</$Text>
//         <WeekDatePicker selectedDate={selectedDate} onSelectDate={setSelectedDate} />
//       </View>

//       <FlatList
//         data={filteredClasses}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <ClassItemCard gymClass={item} />}
//         contentContainerStyle={{ paddingBottom: 20 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: "#fff" },
//   header: { paddingHorizontal: 16, paddingTop: height * 0.05 },
//   title: { fontSize: 20, marginBottom: 10 },
// });



import React, { useState } from "react";
import { View, FlatList, Dimensions, Image } from "react-native";
import $Text from "../components/UI/customText.component";
import WeekDatePicker from "../components/ClassesComponent/WeekDatePicker.component";
import ClassItemCard from "../components/ClassesComponent/ClassItemCard.component";
import { mockClasses } from "../data/classesData";
import tw from "../utils/tailwind";

const { height } = Dimensions.get("window");

export default function ClassesScreen() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const Profile = require("../assets/images/logo.png");

  // const filteredClasses = mockClasses.filter((cls) => cls.date === selectedDate);
  const filteredClasses = mockClasses;

  return (
    <View style={tw`flex-1 bg-white`}>
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
      <View style={tw`px-4`}>
        <$Text style={tw`text-xl mb-2`} weight="bold">
          Class Date
        </$Text>
        <WeekDatePicker selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      </View>

      {/* 🔹 Class List */}
      <FlatList
        data={filteredClasses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ClassItemCard gymClass={item} />}
        contentContainerStyle={tw`pb-5`}
      />
    </View>
  );
}
