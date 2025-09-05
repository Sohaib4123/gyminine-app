import React from "react";
import { Image, View, FlatList } from "react-native";
import tw from "../../utils/tailwind";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TabParamList } from "../../types/Navigation.type";

type ClassItem = {
  id: string;
  title: string;
  time: string;
  trainer: string;
  image: any;
  date: string;
};

type Props = {
  data: ClassItem[];
};

const TodayClassesList = React.memo(({ data }: Props) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  // Memoized navigation handler
  const handleBookPress = React.useCallback(
    (item: ClassItem) => {
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
      });
    },
    [navigation]
  );
  // Memoized render item with performance optimizations
  const renderClassItem = React.useCallback(
    ({ item }: { item: ClassItem }) => (
      <View style={tw`flex-row p-3 my-1.5 rounded-xl bg-background shadow-sm`}>
        <Image
          source={item.image}
          style={tw`w-15 h-15 rounded-lg`}
          resizeMode="cover"
          fadeDuration={0}
          progressiveRenderingEnabled={true}
        />

        <View style={tw`flex-1 ml-2.5`}>
          <$Text style={tw`font-semibold`} numberOfLines={1}>
            {item.title}
          </$Text>
          <$Text numberOfLines={1}>{item.time}</$Text>
          <$Text numberOfLines={1}>{item.trainer}</$Text>
        </View>

        <$Button
          style={tw`bg-main px-4 py-1.5 rounded-lg self-center`}
          onPress={() => handleBookPress(item)}
        >
          <$Text color="light">Book</$Text>
        </$Button>
      </View>
    ),
    [handleBookPress]
  );

  // Memoized key extractor
  const keyExtractor = React.useCallback((item: ClassItem) => item.id, []);

  // Performance-optimized getItemLayout
  const getItemLayout = React.useCallback(
    (data: any, index: number) => ({
      length: 72 + 12, // height + margin
      offset: (72 + 12) * index,
      index,
    }),
    []
  );

  // Only show first 3 items for performance
  const displayData = React.useMemo(() => data.slice(0, 3), [data]);

  return (
    <FlatList
      data={displayData}
      keyExtractor={keyExtractor}
      renderItem={renderClassItem}
      getItemLayout={getItemLayout}
      // Performance optimizations
      scrollEnabled={false} // Since we only show 3 items
      removeClippedSubviews={false} // Not needed for small list
      initialNumToRender={3}
      maxToRenderPerBatch={3}
      windowSize={1}
    />
  );
});

TodayClassesList.displayName = "TodayClassesList";

export default TodayClassesList;
