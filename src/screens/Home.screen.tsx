import React from "react";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { MainNavigatorParamList } from "../types/Navigation.type";
import { carouselData, classesData } from "../data/homeData";
import $Text from "../components/UI/customText.component";
import tw from "../utils/tailwind";

// Lazy load heavy components to reduce initial bundle size
const AppCarousel = React.lazy(
  () => import("../components/HomeComponent/carousel.Component")
);
const ClassList = React.lazy(
  () => import("../components/HomeComponent/classList.Component")
);
const TodayClassesList = React.lazy(
  () => import("../components/HomeComponent/todayClassList.Component")
);
const InstructorList = React.lazy(
  () => import("../components/HomeComponent/instructorList.Component")
);

// Lazy load data to reduce initial bundle
const loadClassesData = () => import("../data/classesData");
const loadInstructorData = () => import("../data/instructorData");

const HomeScreen = React.memo(() => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  const Profile = require("../assets/images/logo.png");

  const [todayClassesData, setTodayClassesData] = React.useState<any>(null);
  const [instructorData, setInstructorData] = React.useState<any>(null);

  React.useEffect(() => {
    // Load data asynchronously to improve initial render performance
    Promise.all([loadClassesData(), loadInstructorData()]).then(
      ([classes, instructor]) => {
        setTodayClassesData(classes);
        setInstructorData(instructor.instructors);
      }
    );
  }, []);

  const handleClassCategoryPress = React.useCallback(() => {
    navigation.navigate("classCategory");
  }, [navigation]);

  const handleClassesPress = React.useCallback(() => {
    navigation.navigate("mainTab", { screen: "Classes" });
  }, [navigation]);

  const handleInstructorsPress = React.useCallback(() => {
    navigation.navigate("instructors");
  }, [navigation]);

  if (!classesData || !instructorData) {
    return (
      <View style={tw`flex-1 items-center justify-center bg-background`}>
        <View
          style={tw`w-6 h-6 border-2 border-main border-t-transparent rounded-full`}
        />
      </View>
    );
  }
  return (
    <ScrollView
      style={tw`flex-1 bg-background px-2 pt-5`}
      contentContainerStyle={tw`pb-12`}
      removeClippedSubviews={true}
    >
      {/* Header */}
      <View style={tw`flex-row items-center p-4`}>
        <View
          style={tw`w-12 h-12 rounded-full bg-gray-200 mr-3 items-center justify-center overflow-hidden`}
        >
          <Image source={Profile} style={tw`h-10 w-10`} />
        </View>
        <View>
          <$Text style={tw`text-base font-semibold`}>hi, user</$Text>
          <$Text style={tw`text-main text-sm`}>gyminine gym</$Text>
        </View>
      </View>

      <React.Suspense
        fallback={<View style={tw`h-32 bg-light rounded-lg`} />}
      >
        <AppCarousel data={carouselData} />
      </React.Suspense>

      {/* Classes */}
      <View style={tw`flex-row justify-between mt-4`}>
        <$Text style={tw`text-lg font-bold mb-1`}>Our Classes</$Text>
        <TouchableOpacity onPress={handleClassCategoryPress}>
          <$Text style={tw`text-dark`}>View All</$Text>
        </TouchableOpacity>
      </View>
      <React.Suspense
        fallback={<View style={tw`h-32 bg-light rounded-lg`} />}
      >
        <ClassList data={classesData} />
      </React.Suspense>

      {/* Today Classes */}
      <View style={tw`flex-row justify-between mt-4`}>
        <$Text style={tw`text-lg font-bold`}>Today Classes</$Text>
        <TouchableOpacity onPress={handleClassesPress}>
          <$Text style={tw`text-dark`}>View All</$Text>
        </TouchableOpacity>
      </View>
      <React.Suspense fallback={<View style={tw`h-24 bg-light rounded-lg`} />}>
        <TodayClassesList data={todayClassesData.mockClasses} />
      </React.Suspense>

      {/* Instructors */}
      <View style={tw`flex-row justify-between mt-4`}>
        <$Text style={tw`text-lg font-bold mb-1`}>Our Instructors</$Text>
        <TouchableOpacity onPress={handleInstructorsPress}>
          <$Text style={tw`text-dark`}>View All</$Text>
        </TouchableOpacity>
      </View>
      <React.Suspense
        fallback={<View style={tw`h-24 bg-light rounded-lg`} />}
      >
        <InstructorList data={instructorData} />
      </React.Suspense>
    </ScrollView>
  );
});

export default HomeScreen;
