// import React from "react";
// import { ScrollView, Text, View, TouchableOpacity } from "react-native";
// import AppCarousel from "../components/HomeComponent/carousel.Component";
// import ClassList from "../components/HomeComponent/classList.Component";
// import TodayClassesList from "../components/HomeComponent/todayClassList.Component";
// import InstructorList from "../components/HomeComponent/instructorList.Component";
// import {
//   carouselData,
//   classesData,
// } from "../data/homeData";
// import { mockClasses } from "../data/classesData";
// import { instructors } from "../data/instructorData";
// import { useNavigation, NavigationProp } from "@react-navigation/native";
// import { MainNavigatorParamList } from "../types/Navigation.type";

// export default function HomeScreen() {
//   const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
//   return (
//     <ScrollView
//       style={{
//         flex: 1,
//         backgroundColor: "#fff",
//         paddingHorizontal: 10,
//         paddingTop: 20,
//       }}
//       contentContainerStyle={{ paddingBottom: 50 }}
//     >
//       <AppCarousel data={carouselData} />

//       {/* Classes */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           marginTop: 16,
//         }}
//       >
//         <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
//           Our Classes
//         </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("classCategory")}>
//           <Text>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <ClassList data={classesData} />

//       {/* Today Classes */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           marginTop: 16,
//         }}
//       >
//         <Text style={{ fontSize: 18, fontWeight: "bold" }}>Today Classes</Text>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("mainTab", { screen: "Classes" })}
//         >
//           <Text>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <TodayClassesList data={mockClasses} />

//       {/* Instructors */}
//       <View
//         style={{
//           flexDirection: "row",
//           justifyContent: "space-between",
//           marginTop: 16,
//         }}
//       >
//         <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 5 }}>
//           Our Instructors
//         </Text>
//         <TouchableOpacity onPress={() => navigation.navigate("instructors")}>
//           <Text>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <InstructorList data={instructors} />
//     </ScrollView>
//   );
// }

import React from "react";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";
import AppCarousel from "../components/HomeComponent/carousel.Component";
import ClassList from "../components/HomeComponent/classList.Component";
import TodayClassesList from "../components/HomeComponent/todayClassList.Component";
import InstructorList from "../components/HomeComponent/instructorList.Component";
import { carouselData, classesData } from "../data/homeData";
import { mockClasses } from "../data/classesData";
import { instructors } from "../data/instructorData";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";
import $Text from "../components/UI/customText.component";
import tw from "../utils/tailwind";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const Profile = require("../assets/images/logo.png");

  return (
    <ScrollView
      style={tw`flex-1 bg-white px-2 pt-5`}
      contentContainerStyle={tw`pb-12`}
    >
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

      <AppCarousel data={carouselData} />

      {/* Classes */}
      <View style={tw`flex-row justify-between mt-4`}>
        <$Text style={tw`text-lg font-bold mb-1`}>Our Classes</$Text>
        <TouchableOpacity onPress={() => navigation.navigate("classCategory")}>
          <$Text style={tw`text-dark`}>View All</$Text>
        </TouchableOpacity>
      </View>
      <ClassList data={classesData} />

      {/* Today Classes */}
      <View style={tw`flex-row justify-between mt-4`}>
        <$Text style={tw`text-lg font-bold`}>Today Classes</$Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("mainTab", { screen: "Classes" })}
        >
          <$Text style={tw`text-dark`}>View All</$Text>
        </TouchableOpacity>
      </View>
      <TodayClassesList data={mockClasses} />

      {/* Instructors */}
      <View style={tw`flex-row justify-between mt-4`}>
        <$Text style={tw`text-lg font-bold mb-1`}>Our Instructors</$Text>
        <TouchableOpacity onPress={() => navigation.navigate("instructors")}>
          <$Text style={tw`text-dark`}>View All</$Text>
        </TouchableOpacity>
      </View>
      <InstructorList data={instructors} />
    </ScrollView>
  );
}
