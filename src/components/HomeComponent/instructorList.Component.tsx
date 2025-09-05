import React from "react";
import { FlatList, Image, View } from "react-native";
import tw from "../../utils/tailwind";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParamList } from "../../types/Navigation.type";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";

type InstructorItem = {
  id: string;
  name: string;
  speciality: string;
  image: string;
};
type Props = {
  data: InstructorItem[];
};

const InstructorList = React.memo(({ data }: Props) => {
  const navigation = useNavigation<NavigationProp<MainNavigatorParamList>>();
  // Memoized navigation handler
  const handleInstructorPress = React.useCallback(
    (instructorId: string) => {
      navigation.navigate("instructorProf", { instructorId });
    },
    [navigation]
  );

  // Memoized render item
  const renderInstructorItem = React.useCallback(
    ({ item }: { item: InstructorItem }) => (
      <$Button
        style={tw`w-38 mr-3 p-3 bg-main rounded-xl items-center`}
        onPress={() => handleInstructorPress(item.id)}
      >
        <Image
          source={{ uri: item.image }}
          style={tw`w-20 h-20 rounded-full mb-2`}
          resizeMode="cover"
          // Performance optimizations for network images
          fadeDuration={200}
          loadingIndicatorSource={require("../../assets/images/logo.png")}
        />
        <$Text style={tw`text-light font-semibold`} numberOfLines={1}>
          {item.name}
        </$Text>
        <$Text style={tw`text-light text-xs`} numberOfLines={1}>
          {item.speciality}
        </$Text>
      </$Button>
    ),
    [handleInstructorPress]
  );

  // Memoized key extractor
  const keyExtractor = React.useCallback((item: InstructorItem) => item.id, []);

  return (
    <View style={tw`h-40`}>
      <FlatList
        data={data}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderInstructorItem}
        showsHorizontalScrollIndicator={false}
        // Performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={8}
        windowSize={8}
        initialNumToRender={8}
        scrollEventThrottle={16}
        // Image optimization
        decelerationRate="fast"
      />
    </View>
  );
});

InstructorList.displayName = "InstructorList";

export default InstructorList;
