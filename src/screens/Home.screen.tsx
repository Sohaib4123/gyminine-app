// import React from "react";
// import { View, Text } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../store/store";
// import { increment, decrement } from "../store/slices/counter.slice";
// import $Button from "../components/UI/customButton.component";

// function Counter() {
//   const count = useSelector((state: RootState) => state.counter.value);
//   const dispatch = useDispatch();

//   return (
//     <View style={{ alignItems: "center", justifyContent: "center" }}>
//       <Text style={{ fontSize: 24, fontFamily: "Bahij-Palatino-Regular" }}>
//         Count: {count}
//       </Text>
//       <$Button onPress={() => dispatch(increment())}>
//         <Text>Increment</Text>
//       </$Button>
//       <$Button onPress={() => dispatch(decrement())}>
//         <Text>Decrement</Text>
//       </$Button>
//     </View>
//   );
// }

// export default function Home() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Counter />
//       <Text style={{ fontSize: 24, fontFamily: "Bahij-Palatino-Regular" }}>
//         {" "}
//         This is home page !!
//       </Text>
//     </View>
//   );
// }



import React from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import AppCarousel from "../components/HomeComponent/carousel.Component";
import ClassList from "../components/HomeComponent/classList.Component";
import TodayClassesList from "../components/HomeComponent/todayClassList.Component";
import InstructorList from "../components/HomeComponent/instructorList.Component";
import { carouselData, classesData, todayClasses, instructors } from "../data/homeData";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 10, paddingTop: 20}}
     contentContainerStyle={{ paddingBottom: 50}}>
      <AppCarousel data={carouselData} />

      {/* Classes */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5}}>Our Classes</Text>
        <TouchableOpacity><Text>View All</Text></TouchableOpacity>
      </View>
      <ClassList data={classesData} />

      {/* Today Classes */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Today Classes</Text>
        <TouchableOpacity><Text>View All</Text></TouchableOpacity>
      </View>
      <TodayClassesList data={todayClasses} />

      {/* Instructors */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5}}>Our Instructors</Text>
        <TouchableOpacity onPress={() => navigation.navigate('instructors')}><Text>View All</Text></TouchableOpacity>
      </View>
      <InstructorList data={instructors} />
    </ScrollView>
  );
}
